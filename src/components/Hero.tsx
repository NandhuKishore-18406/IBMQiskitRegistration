import { ArrowLeft, Calendar, FileText } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import Registration from "./Registration";
import Timeline from "./Timeline";

const IMG_URL = `${import.meta.env.BASE_URL}assets/Untitled design.png`;
const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;

type HeroView = "home" | "registration" | "timeline";

export default function Hero() {
	const [activeView, setActiveView] = useState<HeroView>("home");

	return (
		<div className="w-full h-screen flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 bg-[#f2f4f8] box-border overflow-hidden select-none">
			<section className="relative w-full h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center justify-between bg-white/10 group">
				{/* Background Image Covered Over Entire Hero Card */}
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				{/* Floating Header View Bar inside Hero Card */}
				<header className="relative z-30 w-full pt-3 sm:pt-6 px-2 sm:px-4 flex items-center justify-center">
					<AnimatePresence>
						{activeView !== "home" && (
							<motion.div
								initial={{ opacity: 0, y: -15, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -15, scale: 0.95 }}
								transition={{ duration: 0.3 }}
								className="p-1 sm:p-1.5 rounded-full bg-white/35 backdrop-blur-2xl border border-white/50 shadow-md flex items-center gap-1 sm:gap-2 max-w-[95%] overflow-x-auto no-scrollbar"
							>
								{/* Back to Home Button */}
								<button
									type="button"
									onClick={() => setActiveView("home")}
									className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-white/90 text-[#31135e] hover:bg-white transition-all flex items-center gap-1 cursor-pointer shadow-2xs whitespace-nowrap"
								>
									<ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
									<span>Overview</span>
								</button>

								<span className="w-px h-3.5 bg-black/10 mx-0.5 flex-shrink-0" />

								{/* Timeline Switcher */}
								<button
									type="button"
									onClick={() => setActiveView("timeline")}
									className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
										activeView === "timeline"
											? "bg-[#31135e] text-white shadow-xs"
											: "bg-white/40 text-[#5E6470] hover:bg-white/80 hover:text-[#31135e]"
									}`}
								>
									<Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
									<span>Timeline</span>
								</button>

								{/* Registration Switcher */}
								<button
									type="button"
									onClick={() => setActiveView("registration")}
									className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
										activeView === "registration"
											? "bg-[#31135e] text-white shadow-xs"
											: "bg-white/40 text-[#5E6470] hover:bg-white/80 hover:text-[#31135e]"
									}`}
								>
									<FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
									<span>Registration</span>
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</header>

				{/* Central Content Area Replacing Hero Content - Scrollable without visible scrollbars */}
				<div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10 overflow-y-auto no-scrollbar">
					<AnimatePresence mode="wait">
						{activeView === "home" && (
							<motion.div
								key="hero-main"
								initial={{ opacity: 0, scale: 0.97 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.97 }}
								transition={{ duration: 0.4 }}
								className="w-full flex flex-col items-center text-center max-w-4xl my-auto select-text"
							>
								{/* Transparent glass container holding both logos + X */}
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.1 }}
									className="mx-auto mb-6 sm:mb-8 w-fit max-w-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl sm:rounded-3xl md:rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex items-center justify-center gap-3 sm:gap-5 md:gap-7"
								>
									<img
										src={LOGO1_URL}
										alt="CIT Logo"
										className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[35vw] sm:max-w-none object-contain drop-shadow-sm"
									/>
									<span className="text-lg sm:text-2xl md:text-3xl font-light text-[#31135e] opacity-70 leading-none select-none px-1">
										×
									</span>
									<img
										src={LOGO2_URL}
										alt="IBM Logo"
										className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[35vw] sm:max-w-none object-contain drop-shadow-sm"
									/>
								</motion.div>

								<motion.h1
									initial={{ opacity: 0, scale: 0.98 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.2 }}
									className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-[#31135e] mb-4 tracking-tight leading-[1.1] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
								>
									<span>CIT</span>
									<span className="bg-[#31135e] text-white px-5 py-1.5 md:px-8 md:py-2.5 rounded-full shadow-md inline-block font-mono font-light tracking-widest">
										Qiskit
									</span>
									<span>FALL FEST 2026</span>
								</motion.h1>

								{/* Action buttons replacing views */}
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6"
								>
									{/* Registration Button */}
									<motion.button
										whileHover={{ scale: 1.04 }}
										whileTap={{ scale: 0.96 }}
										onClick={() => setActiveView("registration")}
										className="p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex items-center gap-3 border border-white/40 shadow-sm hover:bg-white/40 transition-all cursor-pointer group min-w-[160px] md:min-w-[180px] justify-center"
									>
										<div className="bg-[#31135e]/10 p-1.5 rounded-full flex items-center justify-center">
											<FileText className="w-4 h-4 text-[#31135e] transition-transform group-hover:scale-1.1" />
										</div>
										<span className="text-base md:text-lg font-semibold text-[#31135e]">
											Registration
										</span>
									</motion.button>

									{/* Timeline Button */}
									<motion.button
										whileHover={{ scale: 1.04 }}
										whileTap={{ scale: 0.96 }}
										onClick={() => setActiveView("timeline")}
										className="p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex items-center gap-3 border border-white/40 shadow-sm hover:bg-white/40 transition-all cursor-pointer group min-w-[160px] md:min-w-[180px] justify-center"
									>
										<div className="bg-[#31135e]/10 p-1.5 rounded-full flex items-center justify-center">
											<Calendar className="w-4 h-4 text-[#31135e] transition-transform group-hover:scale-1.1" />
										</div>
										<span className="text-base md:text-lg font-semibold text-[#31135e]">
											Timeline
										</span>
									</motion.button>
								</motion.div>
							</motion.div>
						)}

						{activeView === "registration" && (
							<motion.div
								key="hero-registration"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.4 }}
								className="w-full h-full select-text"
							>
								<Registration />
							</motion.div>
						)}

						{activeView === "timeline" && (
							<motion.div
								key="hero-timeline"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.4 }}
								className="w-full h-full select-text"
							>
								<Timeline onNavigateRegistration={() => setActiveView("registration")} />
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Bottom Left Card ONLY rendered on Home View */}
				{activeView === "home" && <BottomLeftCard />}

				{/* Bottom Right Corner */}
				<BottomRightCorner />
			</section>
		</div>
	);
}
