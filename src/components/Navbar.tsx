import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export type HeroView = "home" | "about" | "timeline" | "registration" | "organizers" | "past-events";

interface NavbarProps {
	activeView?: HeroView;
	onViewChange?: (view: HeroView) => void;
}

export const NAV_ITEMS: { id: HeroView; label: string; badge?: string }[] = [
	{ id: "home", label: "Home" },
	{ id: "timeline", label: "Timeline" },
	{ id: "registration", label: "Interest Form", badge: "Open" },
	{ id: "organizers", label: "Organizers" },
	{ id: "past-events", label: "Past Events" },
];

const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO3_URL = `${import.meta.env.BASE_URL}assets/iic.webp`;
const LOGO4_URL = `${import.meta.env.BASE_URL}assets/qiskit.png`;

interface BrandSlide {
	id: string;
	title: string;
	subtitle: string;
	titleClassName?: string;
	logos: { src: string; alt: string; className: string }[];
}

const BRAND_SLIDES: BrandSlide[] = [
	{
		id: "cit",
		title: "Coimbatore Institute of Technology",
		subtitle: "Department of Computing · Est. 1956",
		titleClassName: "text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl font-black text-[#31135e] uppercase tracking-wide leading-tight whitespace-nowrap",
		logos: [
			{ src: LOGO1_URL, alt: "CIT Logo", className: "h-9 sm:h-10.5 md:h-12 lg:h-13 xl:h-14 w-auto object-contain drop-shadow-xs shrink-0" },
		],
	},
	{
		id: "partners",
		title: "IBM Qiskit Fall Fest 2026",
		subtitle: "Department of Computing · Nov 20–30, 2026",
		titleClassName: "text-[11px] xs:text-xs sm:text-sm lg:text-base xl:text-lg font-black text-[#31135e] uppercase tracking-wide leading-tight whitespace-nowrap",
		logos: [
			{ src: LOGO3_URL, alt: "IIC Logo", className: "h-7.5 sm:h-8.5 md:h-9.5 lg:h-10.5 xl:h-11.5 w-auto object-contain drop-shadow-xs shrink-0" },
			{ src: LOGO4_URL, alt: "Qiskit Logo", className: "h-7.5 sm:h-8.5 md:h-9.5 lg:h-10.5 xl:h-11.5 w-auto object-contain drop-shadow-xs shrink-0" },
			{ src: LOGO2_URL, alt: "IBM Quantum Logo", className: "h-7.5 sm:h-8.5 md:h-9.5 lg:h-10.5 xl:h-11.5 w-auto object-contain drop-shadow-xs shrink-0" },
		],
	},
];

export default function Navbar({ activeView = "home", onViewChange }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [brandIndex, setBrandIndex] = useState(0);

	// Slow fixed timer switch interval (3.5s timer loop)
	useEffect(() => {
		const interval = setInterval(() => {
			setBrandIndex((prev) => (prev + 1) % BRAND_SLIDES.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	const handleSelect = (viewId: HeroView) => {
		if (onViewChange) {
			onViewChange(viewId);
		}
		setIsOpen(false);
	};

	const activeSlide = BRAND_SLIDES[brandIndex];

	return (
		<nav className="w-full relative z-40 bg-white/60 backdrop-blur-2xl border-b border-white/70 shadow-sm px-2.5 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-1.5 lg:py-2 flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-6 box-border shrink-0 select-none">
			{/* Left: 2-Slide Timer Switch Brand Identity */}
			<div
				onClick={() => handleSelect("home")}
				className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer hover:opacity-95 transition-opacity shrink-0 min-w-0 overflow-hidden h-10 sm:h-12 md:h-14 lg:h-15"
			>
				{/* Timer Switch Animated Slide Container */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeSlide.id}
						initial={{ y: 14, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -14, opacity: 0 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
					>
						{/* Dynamic Logos Cluster */}
						<div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
							{activeSlide.logos.map((logo, idx) => (
								<img
									key={idx}
									src={logo.src}
									alt={logo.alt}
									className={logo.className}
								/>
							))}
						</div>

						{/* Vertical Separator */}
						<div className="h-4 sm:h-5 lg:h-6 w-[1px] bg-[#31135e]/25 shrink-0 mx-0.5" />

						{/* Dynamic Text Branding Block */}
						<div className="flex flex-col text-left justify-center min-w-0">
							<span className={activeSlide.titleClassName || "text-xs xs:text-sm sm:text-base font-black text-[#31135e] uppercase tracking-wide leading-tight whitespace-nowrap"}>
								{activeSlide.title}
							</span>
							<span className="text-[9px] xs:text-[10px] sm:text-xs lg:text-[11px] xl:text-xs font-bold text-[#31135e]/85 whitespace-nowrap">
								{activeSlide.subtitle}
							</span>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Right-Aligned Desktop Navigation Bar (Visible on lg and larger screens: 1024px+) */}
			<div className="hidden lg:flex items-center justify-end flex-1 ml-auto">
				<ul className="flex items-center gap-1 sm:gap-1 lg:gap-1.5 p-1 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-xs">
					{NAV_ITEMS.map((item) => {
						const isActive = activeView === item.id;
						return (
							<li key={item.id} className="relative">
								<button
									type="button"
									onClick={() => handleSelect(item.id)}
									className={`relative px-3 lg:px-3.5 xl:px-4 py-1.5 rounded-full text-xs lg:text-xs xl:text-sm font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
										isActive
											? "text-white"
											: "text-[#31135e] hover:bg-[#31135e]/15 hover:text-[#31135e]"
									}`}
								>
									{isActive && (
										<motion.div
											layoutId="navbar-active-pill"
											className="absolute inset-0 bg-[#31135e] rounded-full shadow-md z-0"
											transition={{ type: "spring", stiffness: 380, damping: 30 }}
										/>
									)}
									<span className="relative z-10">{item.label}</span>
									{item.badge && (
										<span
											className={`relative z-10 text-[9px] xl:text-[9.5px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
												isActive
													? "bg-emerald-400 text-[#31135e]"
													: "bg-emerald-600 text-white"
											}`}
										>
											{item.badge}
										</span>
									)}
								</button>
							</li>
						);
					})}
				</ul>
			</div>

			{/* Right: Hamburger Toggle Button for Mobile / Tablet (<1024px) */}
			<div className="flex items-center gap-2 shrink-0 lg:hidden">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="p-1.5 sm:p-2 rounded-full bg-[#31135e] text-white hover:bg-[#230c45] active:scale-95 transition-all shadow-md focus:outline-none cursor-pointer"
					aria-label="Toggle navigation menu"
				>
					{isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
				</button>
			</div>

			{/* Mobile / Responsive Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0, y: -5 }}
						animate={{ opacity: 1, height: "auto", y: 0 }}
						exit={{ opacity: 0, height: 0, y: -5 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="lg:hidden absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-2xl border-b border-[#31135e]/20 px-4 py-4 shadow-2xl z-50 overflow-hidden"
					>
						<ul className="flex flex-col gap-2 w-full">
							{NAV_ITEMS.map((item) => {
								const isActive = activeView === item.id;
								return (
									<li key={item.id}>
										<button
											type="button"
											onClick={() => handleSelect(item.id)}
											className={`w-full text-left px-4 py-3 rounded-xl text-sm font-extrabold transition-all flex items-center justify-between cursor-pointer ${
												isActive
													? "bg-[#31135e] text-white shadow-md"
													: "text-[#31135e] hover:bg-[#31135e]/10"
											}`}
										>
											<div className="flex items-center gap-2">
												<span>{item.label}</span>
												{item.badge && (
													<span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-black uppercase">
														{item.badge}
													</span>
												)}
											</div>
											{isActive && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
										</button>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}




