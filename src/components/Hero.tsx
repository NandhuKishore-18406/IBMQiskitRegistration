import { ArrowUpRight, Calendar, ExternalLink, Info } from "lucide-react";
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
								transition={{ duration: 0.3 }}
								className="w-full h-full min-h-0 flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-8 p-3 sm:p-6 md:p-8 overflow-hidden"
							>
								{/* LEFT HALF: Main Info & Action Stack */}
								<div
									ref={contentContainerRef}
									className="flex-1 h-full min-h-0 overflow-y-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth flex flex-col justify-between text-left py-1 sm:py-2 select-text space-y-4"
								>
									{/* Top Header Information Stack with CIT Logo */}
									<div className="w-full flex flex-col items-start justify-start gap-2.5 sm:gap-3 max-w-4xl">
										
										{/* CIT Logo at top left */}
										<motion.img
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											src={LOGO1_URL}
											alt="Coimbatore Institute of Technology Logo"
											className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-md mb-0.5"
										/>

										{/* Line 1 -> Coimbatore Institute of technology */}
										<motion.h2
											initial={{ opacity: 0, x: -15 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.1 }}
											className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#31135e] uppercase tracking-wider text-left drop-shadow-xs leading-tight"
										>
											Coimbatore Institute of technology
										</motion.h2>

										{/* Line 2 -> Department of Computing Badge */}
										<motion.div
											initial={{ opacity: 0, scale: 0.95 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: 0.2 }}
										>
											<HeroBadge text="Department of Computing" icon="atom" />
										</motion.div>

										{/* Line 3 -> Collaboration Statement */}
										<motion.p
											initial={{ opacity: 0, x: -15 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.3 }}
											className="text-xs sm:text-base md:text-lg font-bold text-[#31135e]/85 italic tracking-wide text-left"
										>
											in collaboration with IIC and IBM Qiskit
										</motion.p>

										{/* Line 4 -> Main Title: CIT - IBM qiskit fall fest 2026 */}
										<motion.h1
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: 0.4 }}
											className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black text-[#31135e] tracking-tight leading-[1.02] text-left drop-shadow-xs my-1"
										>
											CIT - IBM qiskit fall fest 2026
										</motion.h1>

										{/* Page Navigation Links directly below title */}
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.45 }}
											className="w-full mt-3 sm:mt-5 mb-1 sm:mb-2"
										>
											<div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
												{NAV_ITEMS.filter((item) => item.id !== "home").map((item) => (
													<button
														key={item.id}
														type="button"
														onClick={() => setActiveView(item.id)}
														className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-transparent hover:bg-[#31135e]/10 text-[#31135e] text-sm sm:text-base md:text-lg font-black transition-all group cursor-pointer active:scale-95"
													>
														<span>{item.label}</span>
														{item.badge && (
															<span className="text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider bg-emerald-600 text-white shadow-2xs">
																{item.badge}
															</span>
														)}
														<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#31135e] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
													</button>
												))}
											</div>
										</motion.div>

										{/* Below Page Links: Show ONE line partner logos when About Program is active, OR Large Event Date when inactive */}
										<div className="w-full my-2 sm:my-3 min-h-[64px] flex items-center">
											<AnimatePresence mode="wait">
												{showAboutRight ? (
													<motion.div
														key="logos-under-links"
														initial={{ opacity: 0, y: 6 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: -6 }}
														transition={{ duration: 0.25, ease: "easeInOut" }}
														className="w-full flex flex-wrap items-center justify-start gap-4 sm:gap-6 md:gap-8 bg-transparent"
													>
														<motion.img
															whileHover={{ scale: 1.06 }}
															src={LOGO3_URL}
															alt="IIC Logo"
															className="h-9 sm:h-12 md:h-14 w-auto object-contain drop-shadow-md"
														/>
														<motion.img
															whileHover={{ scale: 1.06 }}
															src={LOGO4_URL}
															alt="Qiskit Logo"
															className="h-8 sm:h-11 md:h-13 w-auto object-contain drop-shadow-md"
														/>
														<motion.img
															whileHover={{ scale: 1.06 }}
															src={LOGO2_URL}
															alt="IBM Quantum Logo"
															className="h-9 sm:h-12 md:h-14 w-auto object-contain drop-shadow-md"
														/>
													</motion.div>
												) : (
													<motion.div
														key="large-date-under-links"
														initial={{ opacity: 0, y: 6 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: -6 }}
														transition={{ duration: 0.25, ease: "easeInOut" }}
														onClick={() => setActiveView("timeline")}
														className="w-full flex items-center gap-3.5 bg-transparent cursor-pointer group"
													>
														<div className="p-2.5 sm:p-3 rounded-2xl bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] shrink-0 shadow-2xs group-hover:bg-[#31135e] group-hover:text-white transition-colors">
															<Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
														</div>
														<div>
															<div className="text-xs sm:text-sm font-black text-[#31135e]/70 uppercase tracking-wider">Event Dates</div>
															<div className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight">Nov 20 – Nov 30, 2026</div>
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>

									</div>

									{/* Action Buttons Cluster with Smooth Layout Transitions */}
									<motion.div
										initial={{ y: 15, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5 }}
										className="w-full flex flex-col items-start justify-start gap-3 pt-1 pb-2"
									>
										<motion.div layout className="w-full flex flex-wrap items-center justify-start gap-2.5 sm:gap-3.5">
											{/* DESKTOP ONLY: About Program Toggle Button */}
											<motion.button
												layout
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												transition={{ type: "spring", stiffness: 400, damping: 30 }}
												onClick={() => setShowAboutRight(!showAboutRight)}
												className={`hidden lg:flex h-10 sm:h-12 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-extrabold shadow-md transition-colors duration-200 cursor-pointer touch-manipulation items-center justify-center gap-2 ${
													showAboutRight
														? "bg-[#31135e] text-white border border-white/30"
														: "bg-white/60 backdrop-blur-xl border border-[#31135e]/30 text-[#31135e] hover:bg-white/80"
												}`}
											>
												<Info className="w-4 h-4" />
												<span>About Program</span>
											</motion.button>

											{/* Timeline Date Badge Button (Visible when about program is active) */}
											<AnimatePresence mode="popLayout">
												{showAboutRight && (
													<motion.button
														layout
														initial={{ opacity: 0, scale: 0.85, x: -10 }}
														animate={{ opacity: 1, scale: 1, x: 0 }}
														exit={{ opacity: 0, scale: 0.85, x: -10 }}
														transition={{ type: "spring", stiffness: 380, damping: 28 }}
														whileHover={{ scale: 1.03 }}
														whileTap={{ scale: 0.97 }}
														onClick={() => setActiveView("timeline")}
														className="h-10 sm:h-12 px-4 sm:px-6 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 text-[#31135e] hover:bg-white/70 text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 cursor-pointer touch-manipulation flex items-center justify-center"
													>
														Nov 20 – Nov 30, 2026
													</motion.button>
												)}
											</AnimatePresence>

											{/* Mode Indicator Badge (Hidden when about program is active) */}
											<AnimatePresence mode="popLayout">
												{!showAboutRight && (
													<motion.div
														layout
														initial={{ opacity: 0, scale: 0.85, x: -10 }}
														animate={{ opacity: 1, scale: 1, x: 0 }}
														exit={{ opacity: 0, scale: 0.85, x: -10 }}
														transition={{ type: "spring", stiffness: 380, damping: 28 }}
														whileHover={{ scale: 1.03 }}
														className="h-10 sm:h-12 px-4 sm:px-5 rounded-full bg-emerald-500/15 backdrop-blur-xl border border-emerald-600/30 text-[#31135e] text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 flex items-center justify-center gap-2"
													>
														<span className="relative flex h-2 w-2 shrink-0">
															<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
															<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
														</span>
														<span>Mode: Online</span>
													</motion.div>
												)}
											</AnimatePresence>
										</motion.div>

										{/* YouTube Channel Banner Link (Enlarged chip) */}
										<motion.a
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
											href="https://www.youtube.com/@citquantumhackathon1549/videos"
											target="_blank"
											rel="noopener noreferrer"
											className="mt-1.5 inline-flex items-center gap-2.5 px-4.5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/60 hover:bg-white/90 border border-white/80 shadow-md text-[#31135e] text-xs sm:text-sm md:text-base font-bold transition-all group touch-manipulation cursor-pointer"
										>
											<svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FF0000] shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
												<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
											</svg>
											<span>To view previous events – Visit our YouTube channel</span>
											<ExternalLink className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
										</motion.a>

										{/* MOBILE ONLY: About Program Embedded Section (Below buttons on mobile) */}
										<div className="lg:hidden w-full pt-4 border-t border-[#31135e]/15">
											<AboutProgram onViewChange={setActiveView} />
										</div>
									</motion.div>
								</div>

								{/* DESKTOP RIGHT HALF: Shows AboutProgram when showAboutRight is true, OR partner logos in old format when showAboutRight is false */}
								<div className="hidden lg:flex w-[460px] xl:w-[540px] 2xl:w-[600px] shrink-0 h-full min-h-0 flex-col justify-end items-end relative select-none p-2 pb-4">
									<AnimatePresence mode="wait">
										{showAboutRight ? (
											<motion.div
												key="about-panel-desktop"
												initial={{ opacity: 0, x: 20, scale: 0.95 }}
												animate={{ opacity: 1, x: 0, scale: 1 }}
												exit={{ opacity: 0, x: 20, scale: 0.95 }}
												transition={{ duration: 0.35, ease: "easeInOut" }}
												className="w-full h-full"
											>
												<AboutProgram
													onViewChange={setActiveView}
													onClose={() => setShowAboutRight(false)}
												/>
											</motion.div>
										) : (
											<motion.div
												key="logos-desktop-old"
												initial={{ opacity: 0, scale: 0.95 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.95 }}
												transition={{ duration: 0.35, ease: "easeInOut" }}
												className="flex flex-col items-end justify-end gap-4 w-full max-w-[380px] bg-transparent shrink-0"
											>
												{/* Line 1: IIC Logo and Qiskit Logo together side-by-side */}
												<div className="flex items-center justify-end gap-5 w-full bg-transparent">
													<motion.img
														whileHover={{ scale: 1.08 }}
														src={LOGO3_URL}
														alt="IIC Logo"
														className="h-14 lg:h-18 w-auto object-contain drop-shadow-md"
													/>
													<motion.img
														whileHover={{ scale: 1.08 }}
														src={LOGO4_URL}
														alt="Qiskit Logo"
														className="h-13 lg:h-16 w-auto object-contain drop-shadow-md"
													/>
												</div>

												{/* Line 2: IBM Quantum Logo matching the width of line 1 */}
												<div className="w-full pt-1 flex items-center justify-center bg-transparent">
													<motion.img
														whileHover={{ scale: 1.06 }}
														src={LOGO2_URL}
														alt="IBM Quantum Logo"
														className="h-16 lg:h-20 w-full object-contain drop-shadow-md"
													/>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</motion.div>
						) : (
							/* OTHER SUB-VIEWS: Full Screen View (Registration / Timeline / Organizers / Past Events) */
							<motion.div
								key="sub-view-layout"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
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
