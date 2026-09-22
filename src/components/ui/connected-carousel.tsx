import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import type { HTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

// Vite-compatible Image component replacement for Next.js Image
function Image({
	src,
	alt,
	fill,
	className,
	style,
	unoptimized,
	draggable,
	...props
}: {
	src: string;
	alt: string;
	fill?: boolean;
	className?: string;
	style?: React.CSSProperties;
	unoptimized?: boolean;
	draggable?: boolean;
	[key: string]: any;
}) {
	return (
		<img
			src={src}
			alt={alt}
			draggable={draggable}
			className={cn(fill && "absolute inset-0 w-full h-full object-cover", className)}
			style={style}
			{...props}
		/>
	);
}

export interface CarouselItem {
	id: string | number;
	stat: string; // Session Conducted / Topic
	quote: string; // Session details / quote
	author: string; // Speaker Name
	role: string; // Speaker Designation
	defaultImage: string;
	selectedImage: string;
	alt?: string;
}

export interface CalendlyCarouselProps extends HTMLAttributes<HTMLDivElement> {
	items: CarouselItem[];
	autoPlayInterval?: number;
	pauseOnHover?: boolean;
}

type ScreenTier = "mobile" | "tablet" | "desktop";

const VISIBLE_OFFSETS = [-4, -3, -2, -1, 0, 1, 2, 3, 4] as const;

const TRANSITION_SPRING = {
	type: "spring",
	stiffness: 220,
	damping: 26,
	mass: 0.75,
} as const;

export function CalendlyCarousel({
	items,
	autoPlayInterval = 5000,
	pauseOnHover = false,
	className,
	...props
}: CalendlyCarouselProps) {
	// Refs
	const containerRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number | null>(null);
	const lastTimeRef = useRef<number | null>(null);
	const elapsedRef = useRef<number>(0);

	// State
	const [page, setPage] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [tier, setTier] = useState<ScreenTier>("desktop");
	const [viewportWidth, setViewportWidth] = useState<number>(1200);

	// Global State/Hooks
	const total = items.length;
	const activeIndex = ((page % total) + total) % total;

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setViewportWidth(width);

			if (width < 768) {
				setTier("mobile");
			} else if (width < 1120) {
				setTier("tablet");
			} else {
				setTier("desktop");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (pauseOnHover && isHovered) {
			lastTimeRef.current = null;
			return;
		}

		const step = (timestamp: number) => {
			if (lastTimeRef.current === null) {
				lastTimeRef.current = timestamp;
			}

			const delta = timestamp - lastTimeRef.current;
			lastTimeRef.current = timestamp;
			elapsedRef.current += delta;

			if (elapsedRef.current >= autoPlayInterval) {
				elapsedRef.current = 0;
				lastTimeRef.current = null;
				setProgress(0);
				setPage((curr) => curr + 1);
				return;
			}

			setProgress(Math.min((elapsedRef.current / autoPlayInterval) * 100, 100));
			animationFrameRef.current = requestAnimationFrame(step);
		};

		animationFrameRef.current = requestAnimationFrame(step);

		return () => {
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			lastTimeRef.current = null;
		};
	}, [page, pauseOnHover, isHovered, autoPlayInterval]);

	// Handlers
	const handlePrev = useCallback(() => {
		elapsedRef.current = 0;
		lastTimeRef.current = null;
		setProgress(0);
		setPage((curr) => curr - 1);
	}, []);

	const handleNext = useCallback(() => {
		elapsedRef.current = 0;
		lastTimeRef.current = null;
		setProgress(0);
		setPage((curr) => curr + 1);
	}, []);

	const handleSelectTab = (event: MouseEvent<HTMLButtonElement>) => {
		const indexStr = event.currentTarget.dataset.index;

		if (indexStr !== undefined) {
			const targetIdx = Number.parseInt(indexStr, 10);
			let diff = targetIdx - activeIndex;

			if (diff > total / 2) {
				diff -= total;
			} else if (diff < -total / 2) {
				diff += total;
			}

			elapsedRef.current = 0;
			lastTimeRef.current = null;
			setProgress(0);
			setPage((curr) => curr + diff);
		}
	};

	const handleSelectCard = (event: MouseEvent<HTMLDivElement>) => {
		const offsetStr = event.currentTarget.dataset.offset;

		if (offsetStr !== undefined) {
			const offset = Number.parseInt(offsetStr, 10);

			if (offset !== 0) {
				elapsedRef.current = 0;
				lastTimeRef.current = null;
				setProgress(0);
				setPage((curr) => curr + offset);
			}
		}
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "ArrowLeft") {
			handlePrev();
		} else if (event.key === "ArrowRight") {
			handleNext();
		}
	};

	// Compact height matching square 1:1 image height
	const activeDimensions = {
		desktop: { width: 720, height: 340 },
		tablet: { width: 560, height: 320 },
		mobile: { width: Math.min(340, viewportWidth - 48), height: 440 },
	}[tier];

	return (
		<div
			ref={containerRef}
			role="region"
			aria-roledescription="carousel"
			aria-label="Speaker Spotlight Carousel"
			tabIndex={0}
			onKeyDown={handleKeyDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={cn(
				"relative w-full max-w-[1200px] mx-auto flex flex-col items-center select-none outline-none py-2 overflow-hidden",
				className
			)}
			{...props}
		>
			<div
				id="carousel-view-panel"
				role="tabpanel"
				aria-live="polite"
				className="relative w-full flex items-center justify-center"
				style={{ height: activeDimensions.height }}
			>
				{VISIBLE_OFFSETS.map((offset) => {
					const virtualIndex = page + offset;
					const itemIndex = ((virtualIndex % total) + total) % total;
					const item = items[itemIndex];
					const isActive = offset === 0;

					const getVariant = () => {
						if (tier === "mobile") {
							const activeW = activeDimensions.width;
							const activeH = activeDimensions.height;
							const gap = 14;
							const peekW = 50;
							const peekH = 360;

							if (offset === 0) {
								return {
									x: -activeW / 2,
									y: -activeH / 2,
									width: activeW,
									height: activeH,
									opacity: 1,
									zIndex: 0,
									pointerEvents: "auto" as const,
								};
							}

							if (offset === -1) {
								return {
									x: -activeW / 2 - gap - peekW,
									y: -peekH / 2,
									width: peekW,
									height: peekH,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							}

							if (offset === 1) {
								return {
									x: activeW / 2 + gap,
									y: -peekH / 2,
									width: peekW,
									height: peekH,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							}

							return {
								x: offset < 0 ? -activeW / 2 - 200 : activeW / 2 + 200,
								y: -peekH / 2,
								width: peekW,
								height: peekH,
								opacity: 0,
								zIndex: 0,
								pointerEvents: "none" as const,
							};
						}

						if (tier === "tablet") {
							const activeW = 560;
							const activeH = 320;
							const gap = 16;
							const sideW = 90;
							const sideH = 260;

							if (offset === 0) {
								return {
									x: -activeW / 2,
									y: -activeH / 2,
									width: activeW,
									height: activeH,
									opacity: 1,
									zIndex: 0,
									pointerEvents: "auto" as const,
								};
							}

							if (offset === -1) {
								return {
									x: -activeW / 2 - gap - sideW,
									y: -sideH / 2,
									width: sideW,
									height: sideH,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							}

							if (offset === 1) {
								return {
									x: activeW / 2 + gap,
									y: -sideH / 2,
									width: sideW,
									height: sideH,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							}

							return {
								x: offset < 0 ? -activeW / 2 - 220 : activeW / 2 + 220,
								y: -sideH / 2,
								width: 70,
								height: 180,
								opacity: 0,
								zIndex: 0,
								pointerEvents: "none" as const,
							};
						}

						switch (offset) {
							case 0:
								return {
									x: -360,
									y: -170,
									width: 720,
									height: 340,
									opacity: 1,
									zIndex: 0,
									pointerEvents: "auto" as const,
								};
							case -1:
								return {
									x: -475,
									y: -130,
									width: 95,
									height: 260,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							case 1:
								return {
									x: 380,
									y: -130,
									width: 95,
									height: 260,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							case -2:
								return {
									x: -560,
									y: -90,
									width: 70,
									height: 180,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							case 2:
								return {
									x: 490,
									y: -90,
									width: 70,
									height: 180,
									opacity: 1,
									zIndex: 100,
									pointerEvents: "auto" as const,
								};
							case -3:
								return {
									x: -680,
									y: -90,
									width: 70,
									height: 180,
									opacity: 0,
									zIndex: 0,
									pointerEvents: "none" as const,
								};
							case 3:
								return {
									x: 610,
									y: -90,
									width: 70,
									height: 180,
									opacity: 0,
									zIndex: 0,
									pointerEvents: "none" as const,
								};
							default:
								return {
									x: offset < 0 ? -800 : 800,
									y: -90,
									width: 70,
									height: 180,
									opacity: 0,
									zIndex: 0,
									pointerEvents: "none" as const,
								};
						}
					};

					return (
						<motion.div
							key={virtualIndex}
							data-offset={offset}
							onClick={handleSelectCard}
							initial={false}
							animate={getVariant()}
							transition={TRANSITION_SPRING}
							style={{
								position: "absolute",
								left: "50%",
								top: "50%",
								willChange: "transform",
							}}
							className={cn(
								"rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-lg text-[#31135e] overflow-hidden",
								!isActive && "cursor-pointer"
							)}
						>
							{/* NO liquid connections or SVG notches */}

							<div
								className="size-full overflow-hidden relative"
								style={{ borderRadius: "inherit" }}
							>
								{/* Inactive Card Preview */}
								<motion.div
									initial={false}
									animate={{ opacity: isActive ? 0 : 1 }}
									transition={{ duration: 0.22, ease: "easeOut" }}
									className={cn(
										"absolute inset-0 p-2",
										isActive && "pointer-events-none"
									)}
								>
									<div className="size-full rounded-2xl overflow-hidden bg-[#31135e]/15 relative">
										<Image
											alt={item.alt || item.author}
											src={item.defaultImage}
											fill
											unoptimized
											draggable={false}
											style={{ objectFit: "cover" }}
											className="size-full object-cover opacity-80"
										/>
									</div>
								</motion.div>

								{/* Active Card Content */}
								<div
									className="absolute"
									style={{
										left: "50%",
										top: "50%",
										width: activeDimensions.width,
										height: activeDimensions.height,
										transform: "translate(-50%, -50%)",
									}}
								>
									<motion.div
										initial={false}
										animate={{
											opacity: isActive ? 1 : 0,
											x: isActive ? 0 : offset < 0 ? -800 : 800,
										}}
										transition={TRANSITION_SPRING}
										className={cn(
											"size-full flex flex-col md:flex-row p-5 sm:p-6 md:p-7 gap-4 sm:gap-6 items-center justify-between",
											!isActive && "pointer-events-none"
										)}
									>
										{/* Left Text Content */}
										<div className="flex-1 min-w-0 flex flex-col justify-between h-full text-center md:text-left py-1 gap-3">
											{/* TOP: Speaker Name */}
											<div className="space-y-0.5">
												<h3
													title={item.author}
													className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#31135e] leading-snug"
												>
													{item.author}
												</h3>

												{/* BELOW NAME: Speaker Designation */}
												<p
													title={item.role}
													className="text-xs sm:text-sm font-semibold text-[#31135e]/80 leading-snug"
												>
													{item.role}
												</p>
											</div>

											{/* BODY / MAIN CONTENT: Session Title */}
											<div className="my-auto space-y-1 text-center md:text-left">
												<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#31135e]/10 border border-[#31135e]/20 text-[#31135e] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
													<BookOpen className="w-3 h-3 text-[#31135e] shrink-0" />
													<span>Session Conducted</span>
												</div>
												<h4 className="text-xs sm:text-sm md:text-base font-bold text-[#31135e] leading-snug line-clamp-3">
													{item.stat}
												</h4>
											</div>


										</div>

										{/* Right Square (1:1 Aspect Ratio) Speaker Image */}
										<div className="shrink-0 aspect-square w-[180px] sm:w-[220px] md:w-[240px] h-[180px] sm:h-[220px] md:h-[240px] rounded-3xl overflow-hidden border-2 border-white/80 shadow-md bg-[#31135e]/10 relative">
											<Image
												alt={item.alt || item.author}
												src={item.selectedImage}
												fill
												unoptimized
												draggable={false}
												style={{ objectFit: "cover" }}
												className="size-full object-cover"
											/>
										</div>
									</motion.div>
								</div>
							</div>
						</motion.div>

					);
				})}
			</div>

			{/* Bottom Tab Indicators */}
			<div
				role="tablist"
				aria-label="Carousel pagination"
				className="flex items-center gap-1.5 mt-4"
			>
				{items.map((item, idx) => {
					const isSelected = idx === activeIndex;

					return (
						<button
							key={item.id}
							type="button"
							role="tab"
							data-index={idx}
							id={`carousel-tab-${idx}`}
							aria-controls="carousel-view-panel"
							onClick={handleSelectTab}
							aria-selected={isSelected}
							aria-label={`Slide ${idx + 1}`}
							tabIndex={isSelected ? 0 : -1}
							className={cn(
								"h-[6px] rounded-full overflow-hidden border-0 p-0 cursor-pointer transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-purple-600",
								isSelected
									? "w-[48px] bg-[#31135e]"
									: "w-[8px] bg-purple-300/70 hover:bg-purple-400"
							)}
						>
							{isSelected && (
								<div
									className="h-full rounded-full bg-yellow-400"
									style={{
										transformOrigin: "0% 50%",
										transform: `scaleX(${progress / 100})`,
									}}
								/>
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
}
