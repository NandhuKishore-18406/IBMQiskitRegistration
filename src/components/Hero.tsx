import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import AboutProgram from "./AboutProgram";
import HeroBadge from "./HeroBadge";
import Navbar, { HeroView, NAV_ITEMS } from "./Navbar";
import Organizers from "./Organizers";
import PastEvents from "./PastEvents";
import Registration from "./Registration";
import Timeline from "./Timeline";

const IMG_URL = `${import.meta.env.BASE_URL}assets/Untitled design.png`;
const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO3_URL = `${import.meta.env.BASE_URL}assets/iic.webp`;
const LOGO4_URL = `${import.meta.env.BASE_URL}assets/qiskit.png`;

const MARQUEE_LOGOS = [
	{ src: LOGO3_URL, alt: "IIC Logo", className: "h-10 sm:h-13 w-auto object-contain drop-shadow-sm" },
	{ src: LOGO2_URL, alt: "IBM Quantum Logo", className: "h-12 sm:h-16 w-auto object-contain drop-shadow-sm" },
	{ src: LOGO4_URL, alt: "Qiskit Logo", className: "h-10 sm:h-13 w-auto object-contain drop-shadow-sm" },
];

// Unified smooth easing curve for opening and reverting animations
const SMOOTH_EASE = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };
const HOVER_PHYSICS = { type: "spring" as const, stiffness: 280, damping: 28 };

const HERO_CONTAINER_VARIANTS = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			...SMOOTH_EASE,
			staggerChildren: 0.07,
		},
	},
	exit: {
		opacity: 0,
		y: -24,
		transition: SMOOTH_EASE,
	},
};

const HERO_ITEM_VARIANTS = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: SMOOTH_EASE },
};

export default function Hero() {
	const [activeView, setActiveView] = useState<HeroView>("home");
	const [showAboutRight, setShowAboutRight] = useState(false);
	const contentContainerRef = useRef<HTMLDivElement>(null);

	// Auto scroll to top on activeView transition
	useEffect(() => {
		if (contentContainerRef.current) {
			contentContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [activeView]);

	return (
		<div className="w-full min-h-screen min-h-[100dvh] lg:h-screen lg:h-[100dvh] flex items-center justify-center p-1 sm:p-3 md:p-4 lg:p-5 bg-[#f2f4f8] box-border overflow-x-hidden select-none">
			<section className="relative w-full min-h-screen min-h-[100dvh] lg:min-h-0 lg:h-full rounded-xl sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between bg-white/10 group">
				{/* Background Image Covered Over Entire Hero Card */}
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				{/* Header Navigation Bar (Visible on sub-pages only) */}
				{activeView !== "home" && (
					<Navbar activeView={activeView} onViewChange={setActiveView} />
				)}

				{/* Main Body Layout */}
				<div className="relative z-10 w-full flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
					
					<AnimatePresence mode="wait">
						{activeView === "home" ? (
							<motion.div
								key="home-layout"
								variants={HERO_CONTAINER_VARIANTS}
								initial="hidden"
								animate="show"
								exit="exit"
								className="w-full h-full min-h-0 flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-6 p-3 sm:p-5 md:p-6 lg:p-7 overflow-hidden"
							>
								{/* LEFT / MAIN HALF: Information & Action Stack */}
								<motion.div
									layout
									ref={contentContainerRef}
									animate={{ width: showAboutRight ? "50%" : "100%" }}
									transition={SMOOTH_EASE}
									className={`w-full h-full min-h-0 overflow-y-auto custom-scrollbar scroll-smooth flex flex-col py-2 sm:py-4 select-text space-y-3 sm:space-y-4 shrink-0 ${
										showAboutRight 
											? "items-start justify-start text-left" 
											: "items-center justify-start lg:justify-center text-center lg:my-auto"
									}`}
								>
									{/* Top Header Information Stack */}
									<motion.div 
										layout
										transition={SMOOTH_EASE}
										className={`w-full flex flex-col ${
											showAboutRight 
												? "items-start text-left max-w-4xl gap-2.5 sm:gap-3" 
												: "items-center text-center max-w-5xl mx-auto gap-3 sm:gap-4"
										}`}
									>
										
										{/* CIT Logo */}
										<motion.img
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											src={LOGO1_URL}
											alt="Coimbatore Institute of Technology Logo"
											className={`w-auto object-contain drop-shadow-md shrink-0 ${
												showAboutRight
													? "h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30"
													: "h-16 sm:h-22 md:h-28 lg:h-32 xl:h-36"
											}`}
										/>

										{/* Line 1 -> Coimbatore Institute of Technology Header Stack */}
										<motion.div
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`flex flex-col gap-1 w-full shrink-0 ${showAboutRight ? "items-start text-left" : "items-center text-center"}`}
										>
											<h2 className={`font-black text-[#31135e] uppercase tracking-wider drop-shadow-xs leading-tight ${
												showAboutRight
													? "text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left"
													: "text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[46px] text-center"
											}`}>
												Coimbatore Institute of Technology
											</h2>

											{/* Affiliation & Location Lines */}
											<div className={`flex flex-col gap-0.5 font-bold text-[#31135e]/90 ${
												showAboutRight ? "items-start text-left" : "items-center justify-center text-center"
											}`}>
												<span className="text-xs sm:text-sm md:text-base font-bold text-[#31135e]/90">
													(Affiliated to Anna University, Chennai)
												</span>
												<span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-[#31135e]">
													Coimbatore, Tamil Nadu, India
												</span>
											</div>
										</motion.div>

										{/* Partner Logos Row (IIC Logo left, Qiskit middle, IBM Quantum right) */}
										<motion.div
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`w-full my-2 sm:my-3 flex items-center shrink-0 ${
												showAboutRight
													? "justify-start gap-4 sm:gap-8 md:gap-10"
													: "justify-center gap-5 sm:gap-10 md:gap-14 lg:gap-16"
											}`}
										>
											{/* Left: IIC Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO3_URL}
												alt="IIC Logo"
												className={`w-auto object-contain drop-shadow-md ${
													showAboutRight ? "h-9 sm:h-12 md:h-15 lg:h-16" : "h-10 sm:h-14 md:h-16 lg:h-18"
												}`}
											/>

											{/* Middle: Qiskit Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO4_URL}
												alt="Qiskit Logo"
												className={`w-auto object-contain drop-shadow-md ${
													showAboutRight ? "h-8 sm:h-11 md:h-13 lg:h-15" : "h-9 sm:h-13 md:h-15 lg:h-16"
												}`}
											/>

											{/* Right: IBM Quantum Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO2_URL}
												alt="IBM Quantum Logo"
												className={`w-auto object-contain drop-shadow-md ${
													showAboutRight ? "h-9 sm:h-12 md:h-15 lg:h-16" : "h-10 sm:h-14 md:h-16 lg:h-18"
												}`}
											/>
										</motion.div>

										{/* Department of Computing Badge (Without Atom logo) */}
										<motion.div
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`w-full flex ${showAboutRight ? "justify-start text-left" : "justify-center text-center"}`}
										>
											<HeroBadge text="Department of Computing" />
										</motion.div>

										{/* Collaboration Statement */}
										<motion.p
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`text-xs sm:text-base md:text-lg font-bold text-[#31135e]/85 italic tracking-wide ${
												showAboutRight ? "text-left" : "text-center"
											}`}
										>
											in collaboration with <strong className="font-black text-[#31135e] not-italic">IBM Quantum</strong> and <strong className="font-black text-[#31135e] not-italic">IIC</strong>
										</motion.p>

										{/* Main Title: CIT - IBM Qiskit Fall Fest 2026 */}
										<motion.h1
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`font-black text-[#31135e] tracking-tight leading-[1.05] drop-shadow-xs my-1 sm:my-2 ${
												showAboutRight
													? "text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-left"
													: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center"
											}`}
										>
											CIT - IBM Qiskit Fall Fest 2026
										</motion.h1>

										{/* Date & Mode Badges */}
										<motion.div
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`w-full flex flex-wrap items-center gap-2.5 sm:gap-3.5 my-2 sm:my-3 ${
												showAboutRight ? "justify-start" : "justify-center"
											}`}
										>
											{/* Timeline Date Badge Button */}
											<motion.button
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												transition={HOVER_PHYSICS}
												onClick={() => setActiveView("timeline")}
												className="h-11 sm:h-13 px-5 sm:px-7 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 text-[#31135e] hover:bg-white/70 text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 cursor-pointer touch-manipulation flex items-center justify-center"
											>
												Nov 20 – Nov 30, 2026
											</motion.button>

											{/* Mode Indicator Badge */}
											<motion.div
												whileHover={{ scale: 1.03 }}
												transition={HOVER_PHYSICS}
												className="h-11 sm:h-13 px-5 sm:px-6 rounded-full bg-emerald-500/15 backdrop-blur-xl border border-emerald-600/30 text-[#31135e] text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 flex items-center justify-center gap-2.5"
											>
												<span className="relative flex h-2 w-2 shrink-0">
													<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
													<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
												</span>
												<span>Mode: Online</span>
											</motion.div>
										</motion.div>

										{/* Page Navigation Links */}
										<motion.div
											layout
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className={`w-full mt-2 sm:mt-4 mb-1 sm:mb-2 flex ${
												showAboutRight ? "justify-start" : "justify-center"
											}`}
										>
											<div className={`flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 ${
												showAboutRight ? "justify-start" : "justify-center"
											}`}>
												{NAV_ITEMS.map((item) => (
													<motion.button
														key={item.id}
														type="button"
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														transition={HOVER_PHYSICS}
														onClick={() => {
															if (item.id === "home") {
																if (window.innerWidth < 1024) {
																	const el = document.getElementById("mobile-about-section");
																	if (el) el.scrollIntoView({ behavior: "smooth" });
																} else {
																	setShowAboutRight(!showAboutRight);
																}
															} else {
																setActiveView(item.id);
															}
														}}
														className={`items-center gap-2 px-2.5 py-1.5 rounded-xl bg-transparent hover:bg-[#31135e]/10 text-[#31135e] text-sm sm:text-base md:text-lg font-black transition-colors group cursor-pointer active:scale-95 ${
															item.id === "home" ? "hidden lg:inline-flex" : "inline-flex"
														}`}
													>
														<span>{item.label}</span>
														{item.badge && (
															<span className="text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider bg-emerald-600 text-white shadow-2xs">
																{item.badge}
															</span>
														)}
														<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#31135e] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
													</motion.button>
												))}
											</div>
										</motion.div>

									</motion.div>

									{/* Embedded About Section on Mobile */}
									<motion.div
										layout
										variants={HERO_ITEM_VARIANTS}
										transition={SMOOTH_EASE}
										className="w-full flex flex-col gap-3 pt-1 pb-2 items-center text-center"
									>
										{/* MOBILE ONLY: About Program Embedded Section */}
										<div id="mobile-about-section" className="lg:hidden w-full pt-6 mt-2 border-t border-[#31135e]/15">
											<AboutProgram />
										</div>
									</motion.div>
								</motion.div>

								{/* DESKTOP RIGHT HALF: Synchronized smooth expanding/collapsing split panel */}
								<AnimatePresence initial={false}>
									{showAboutRight && (
										<motion.div
											key="about-right-panel"
											layout
											initial={{ width: "0%", opacity: 0, x: 40, scale: 0.96 }}
											animate={{ width: "50%", opacity: 1, x: 0, scale: 1 }}
											exit={{ width: "0%", opacity: 0, x: 40, scale: 0.96 }}
											transition={SMOOTH_EASE}
											className="hidden lg:flex shrink-0 h-full flex-col justify-stretch items-stretch relative select-none overflow-hidden min-h-0"
										>
											<div className="w-full h-full p-1 sm:p-2 pb-2 shrink-0 flex flex-col min-h-0">
												<AboutProgram
													onClose={() => setShowAboutRight(false)}
												/>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						) : (
							/* OTHER SUB-VIEWS: Full Screen View */
							<motion.div
								key="sub-view-layout"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={SMOOTH_EASE}
								className="w-full h-full min-h-0 overflow-y-auto custom-scrollbar scroll-smooth p-4 sm:p-6 select-text"
							>
								{activeView === "registration" && <Registration />}
								{activeView === "timeline" && <Timeline />}
								{activeView === "organizers" && <Organizers />}
								{activeView === "past-events" && <PastEvents />}
							</motion.div>
						)}
					</AnimatePresence>

					{/* MOBILE ONLY: Bottom Partner Logos Infinite Marquee */}
					{activeView === "home" && (
						<div className="lg:hidden w-full overflow-hidden py-3 bg-white/20 backdrop-blur-md border-t border-white/30 shrink-0 select-none">
							<motion.div
								animate={{ x: ["0%", "-50%"] }}
								transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
								className="flex items-center gap-12 whitespace-nowrap w-max"
							>
								{[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((item, idx) => (
									<div key={idx} className="flex items-center justify-center shrink-0 px-4">
										<img src={item.src} alt={item.alt} className={item.className} />
									</div>
								))}
							</motion.div>
						</div>
					)}

				</div>
			</section>
		</div>
	);
}
