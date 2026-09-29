import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
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
		<div className="w-full min-h-screen min-h-[100dvh] md:h-screen md:h-[100dvh] flex items-center justify-center p-1 sm:p-3 md:p-4 lg:p-5 bg-[#f2f4f8] box-border overflow-x-hidden md:overflow-hidden select-none">
			<section className="relative w-full min-h-screen min-h-[100dvh] md:min-h-0 md:h-full rounded-xl sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between bg-white/10 group">
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
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={SMOOTH_EASE}
								className="w-full h-full min-h-0 flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-6 p-3 sm:p-5 md:p-6 lg:p-7 overflow-hidden"
							>
								{/* LEFT / MAIN HALF: Information & Action Stack */}
								<motion.div
									layout
									ref={contentContainerRef}
									animate={{ width: showAboutRight ? "50%" : "100%" }}
									transition={SMOOTH_EASE}
									className="h-full min-h-0 overflow-y-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth flex flex-col justify-between py-1 sm:py-2 select-text space-y-4 shrink-0"
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
											transition={SMOOTH_EASE}
											src={LOGO1_URL}
											alt="Coimbatore Institute of Technology Logo"
											className={`w-auto object-contain drop-shadow-md ${
												showAboutRight
													? "h-16 sm:h-22 md:h-26 lg:h-32 xl:h-36"
													: "h-20 sm:h-28 md:h-32 lg:h-38 xl:h-44"
											}`}
										/>

										{/* Line 1 -> Coimbatore Institute of Technology Header Stack */}
										<motion.div
											layout
											transition={SMOOTH_EASE}
											className={`flex flex-col gap-1 w-full ${showAboutRight ? "items-start text-left" : "items-center text-center"}`}
										>
											<h2 className={`font-black text-[#31135e] uppercase tracking-wider drop-shadow-xs leading-tight whitespace-nowrap ${
												showAboutRight
													? "text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px]"
													: "text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]"
											}`}>
												Coimbatore Institute of Technology
											</h2>

											{/* Coimbatore, India & Affiliation */}
											<div className={`flex flex-col sm:flex-row gap-1 sm:gap-3 font-semibold text-[#31135e]/90 ${
												showAboutRight ? "items-start text-left" : "items-center justify-center text-center"
											}`}>
												<span className="text-base sm:text-lg md:text-xl font-extrabold text-[#31135e]">Coimbatore, India</span>
												<span className="hidden sm:inline opacity-40">•</span>
												<span className="text-xs sm:text-sm md:text-base font-semibold text-[#31135e]/80">(Affiliated to Anna University, Chennai)</span>
											</div>
										</motion.div>

										{/* Partner Logos Row (IIC Logo left, Qiskit middle, IBM Quantum right) */}
										<motion.div
											layout
											transition={SMOOTH_EASE}
											className={`w-full my-3 sm:my-5 flex items-center ${
												showAboutRight
													? "justify-start gap-6 sm:gap-10 md:gap-12"
													: "justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-20"
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
													showAboutRight ? "h-11 sm:h-15 md:h-18 lg:h-20" : "h-12 sm:h-16 md:h-20 lg:h-22"
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
													showAboutRight ? "h-10 sm:h-14 md:h-16 lg:h-18" : "h-11 sm:h-15 md:h-18 lg:h-20"
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
													showAboutRight ? "h-11 sm:h-15 md:h-18 lg:h-20" : "h-12 sm:h-16 md:h-20 lg:h-22"
												}`}
											/>
										</motion.div>

										{/* Department of Computing Badge */}
										<motion.div
											layout
											transition={SMOOTH_EASE}
										>
											<HeroBadge text="Department of Computing" icon="atom" />
										</motion.div>

										{/* Collaboration Statement */}
										<motion.p
											layout
											transition={SMOOTH_EASE}
											className={`text-sm sm:text-lg md:text-xl font-bold text-[#31135e]/85 italic tracking-wide ${
												showAboutRight ? "text-left" : "text-center"
											}`}
										>
											in collaboration with IIC and IBM Quantum
										</motion.p>

										{/* Main Title: CIT - IBM Qiskit Fall Fest 2026 */}
										<motion.h1
											layout
											transition={SMOOTH_EASE}
											className={`font-black text-[#31135e] tracking-tight leading-[1.02] drop-shadow-xs my-1 sm:my-2 ${
												showAboutRight
													? "text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] text-left"
													: "text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] 2xl:text-[84px] text-center sm:whitespace-nowrap"
											}`}
										>
											CIT - IBM Qiskit Fall Fest 2026
										</motion.h1>

										{/* Page Navigation Links */}
										<motion.div
											layout
											transition={SMOOTH_EASE}
											className={`w-full mt-2 sm:mt-4 mb-1 sm:mb-2 flex ${
												showAboutRight ? "justify-start" : "justify-center"
											}`}
										>
											<div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 justify-center">
												{NAV_ITEMS.filter((item) => item.id !== "home").map((item) => (
													<motion.button
														key={item.id}
														type="button"
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														transition={HOVER_PHYSICS}
														onClick={() => setActiveView(item.id)}
														className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-transparent hover:bg-[#31135e]/10 text-[#31135e] text-sm sm:text-base md:text-lg font-black transition-colors group cursor-pointer active:scale-95"
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

									{/* Action Buttons Cluster */}
									<motion.div
										layout
										transition={SMOOTH_EASE}
										className={`w-full flex flex-col gap-3 pt-1 pb-2 ${
											showAboutRight ? "items-start text-left" : "items-center text-center"
										}`}
									>
										<div className={`w-full flex flex-wrap items-center gap-2.5 sm:gap-3.5 ${
											showAboutRight ? "justify-start" : "justify-center"
										}`}>
											{/* DESKTOP ONLY: About Program Toggle Button */}
											<motion.button
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												transition={HOVER_PHYSICS}
												onClick={() => setShowAboutRight(!showAboutRight)}
												className={`hidden lg:flex h-11 sm:h-13 px-5 sm:px-7 rounded-full text-xs sm:text-sm font-extrabold shadow-md transition-colors duration-200 cursor-pointer touch-manipulation items-center justify-center gap-2.5 ${
													showAboutRight
														? "bg-[#31135e] text-white border border-white/30"
														: "bg-white/60 backdrop-blur-xl border border-[#31135e]/30 text-[#31135e] hover:bg-white/80"
												}`}
											>
												<Info className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
												<span>About Program</span>
											</motion.button>

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
										</div>

										{/* YouTube Channel Banner Link */}
										<motion.a
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
											transition={HOVER_PHYSICS}
											href="https://www.youtube.com/@citquantumhackathon1549/videos"
											target="_blank"
											rel="noopener noreferrer"
											className="mt-1.5 inline-flex items-center gap-2.5 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/60 hover:bg-white/90 border border-white/80 shadow-md text-[#31135e] text-xs sm:text-sm md:text-base font-bold transition-all group touch-manipulation cursor-pointer"
										>
											<svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FF0000] shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
												<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
											</svg>
											<span>To view previous events – Visit our YouTube channel</span>
											<ExternalLink className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
										</motion.a>

										{/* MOBILE ONLY: About Program Embedded Section */}
										<div className="lg:hidden w-full pt-4 border-t border-[#31135e]/15">
											<AboutProgram />
										</div>
									</motion.div>
								</motion.div>

								{/* DESKTOP RIGHT HALF: Synchronized smooth expanding/collapsing split panel */}
								<AnimatePresence initial={false}>
									{showAboutRight && (
										<motion.div
											key="about-right-panel"
											initial={{ width: "0%", opacity: 0, x: 25 }}
											animate={{ width: "50%", opacity: 1, x: 0 }}
											exit={{ width: "0%", opacity: 0, x: 25 }}
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
								className="w-full h-full min-h-0 overflow-y-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth p-4 sm:p-6 select-text"
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
