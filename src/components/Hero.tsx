import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Organizers from "./Organizers";
import PastEvents from "./PastEvents";
import Registration from "./Registration";
import Timeline from "./Timeline";

const IMG_URL = `${import.meta.env.BASE_URL}assets/Untitled design.png`;
const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO3_URL = `${import.meta.env.BASE_URL}assets/iic.webp`;

const DYNAMIC_SLOGANS = [
	"Eager to learn & hone your skills in Quantum Computing?",
	"Ready to explore quantum algorithms & real quantum hardware?",
	"Want to innovate with IBM Qiskit & quantum computing?",
	"Passionate about building the future of Quantum Technologies?",
];

type HeroView = "home" | "registration" | "timeline" | "organizers" | "past-events";

export default function Hero() {
	const [activeView, setActiveView] = useState<HeroView>("home");
	const [sloganIndex, setSloganIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSloganIndex((prev) => (prev + 1) % DYNAMIC_SLOGANS.length);
		}, 3800);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full h-screen h-[100dvh] flex items-center justify-center p-1.5 sm:p-3 md:p-4 lg:p-5 bg-[#f2f4f8] box-border overflow-hidden select-none">
			<section className="relative w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-none flex flex-col items-center justify-between bg-white/10 group">
				{/* Background Image Covered Over Entire Hero Card */}
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				{/* Persistent Top Header Bar with Logos & Navigation */}
				<header className="relative z-30 w-full pt-2 sm:pt-4 px-2 sm:px-4 md:px-6 shrink-0 flex items-center justify-center">
					<div className="w-full max-w-6xl px-3 py-2 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-3xl md:rounded-full bg-white/25 backdrop-blur-2xl border border-white/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
						{/* Left: Brand Logos */}
						<div
							onClick={() => setActiveView("home")}
							className="flex items-center justify-center gap-2 sm:gap-4 cursor-pointer hover:opacity-95 transition-opacity"
						>
							<img
								src={LOGO1_URL}
								alt="CIT Logo"
								className="h-7 sm:h-9 md:h-11 w-auto max-w-[20vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<div className="w-px h-5 sm:h-7 bg-[#31135e]/30 rounded-full shrink-0" />
							<img
								src={LOGO3_URL}
								alt="IIC Logo"
								className="h-7 sm:h-9 md:h-11 w-auto max-w-[20vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<div className="w-px h-5 sm:h-7 bg-[#31135e]/30 rounded-full shrink-0" />
							<img
								src={LOGO2_URL}
								alt="IBM Logo"
								className="h-7 sm:h-9 md:h-11 w-auto max-w-[20vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
						</div>

						{/* Right: Navigation Tabs */}
						<nav className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 overflow-x-auto no-scrollbar max-w-full">
							<button
								type="button"
								onClick={() => setActiveView("home")}
								className={`px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
									activeView === "home"
										? "bg-[#31135e] text-white shadow-xs"
										: "text-[#31135e] hover:bg-white/50"
								}`}
							>
								Overview
							</button>

							<button
								type="button"
								onClick={() => setActiveView("timeline")}
								className={`px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
									activeView === "timeline"
										? "bg-[#31135e] text-white shadow-xs"
										: "text-[#31135e] hover:bg-white/50"
								}`}
							>
								Timeline
							</button>

							<button
								type="button"
								onClick={() => setActiveView("registration")}
								className={`px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
									activeView === "registration"
										? "bg-[#31135e] text-white shadow-xs"
										: "text-[#31135e] hover:bg-white/50"
								}`}
							>
								For Inquiry
							</button>

							<button
								type="button"
								onClick={() => setActiveView("organizers")}
								className={`px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
									activeView === "organizers"
										? "bg-[#31135e] text-white shadow-xs"
										: "text-[#31135e] hover:bg-white/50"
								}`}
							>
								Organizers
							</button>

							<button
								type="button"
								onClick={() => setActiveView("past-events")}
								className={`px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
									activeView === "past-events"
										? "bg-[#31135e] text-white shadow-xs"
										: "text-[#31135e] hover:bg-white/50"
								}`}
							>
								Past Events
							</button>
						</nav>
					</div>
				</header>

				{/* Central Content Area - Scrollable with custom transparent scrollbar */}
				<div className="relative z-10 w-full flex-1 min-h-0 flex flex-col items-center justify-start px-2 sm:px-4 md:px-6 pt-2 pb-16 sm:pb-24 overflow-y-auto custom-scrollbar">
					<AnimatePresence mode="wait">
						{activeView === "home" && (
							<motion.div
								key="hero-main"
								initial={{ opacity: 0, scale: 0.97 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.97 }}
								transition={{ duration: 0.4 }}
								className="w-full h-full min-h-[460px] sm:min-h-[500px] flex flex-col items-center justify-between text-center max-w-5xl my-auto py-2 sm:py-4 select-text"
							>
								{/* Main H1 Title Area with Dynamic Slogan */}
								<div className="my-auto py-4 sm:py-8 flex flex-col items-center gap-4 sm:gap-6 max-w-4xl">
									{/* Dynamic Rotating Slogan Area */}
									<div className="flex flex-col items-center justify-center w-full px-3 py-2 sm:px-6 sm:py-4">
										<div className="min-h-[60px] sm:min-h-[84px] md:min-h-[100px] flex items-center justify-center overflow-hidden w-full px-2 sm:px-6">
											<AnimatePresence mode="wait">
												<motion.p
													key={sloganIndex}
													initial={{ opacity: 0, y: 14, scale: 0.98 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: -14, scale: 0.98 }}
													transition={{ duration: 0.5, ease: "easeInOut" }}
													className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#31135e] max-w-4xl mx-auto leading-relaxed tracking-tight text-center drop-shadow-2xs"
												>
													{DYNAMIC_SLOGANS[sloganIndex]}
												</motion.p>
											</AnimatePresence>
										</div>

										<motion.span
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.8, delay: 0.3 }}
											className="text-xs sm:text-base md:text-lg font-bold text-[#31135e]/80 tracking-wider uppercase mt-1 sm:mt-2"
										>
											Get ready for...
										</motion.span>
									</div>

									{/* H1 Headline */}
									<motion.h1
										initial={{ opacity: 0, scale: 0.98 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-[#31135e] tracking-tight leading-[1.15] flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
									>
										<span>CIT - IBM</span>
										<span className="bg-[#31135e] text-white px-4 py-1 sm:px-6 sm:py-1.5 md:px-7 md:py-2 rounded-full shadow-md inline-block font-mono font-light tracking-widest">
											Qiskit
										</span>
										<span>FALL FEST 2026</span>
									</motion.h1>

									{/* Paraphrased Slogan below H1 */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.4 }}
										className="mt-2 sm:mt-4 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-2xs inline-block"
									>
										<p className="text-xs sm:text-base md:text-lg font-bold text-[#31135e] tracking-widest uppercase">
											10 Days · Infinite Qubits · One Mission
										</p>
									</motion.div>
								</div>

								{/* Focused Action & Event Highlights Bar */}
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="mt-auto w-full max-w-2xl px-2 sm:px-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-2 sm:pb-4"
								>
									{/* Main CTA Button */}
									<motion.button
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.97 }}
										onClick={() => setActiveView("registration")}
										className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#31135e] hover:bg-[#230c45] text-white text-sm sm:text-base font-semibold shadow-lg transition-all cursor-pointer"
									>
										Submit Inquiry
									</motion.button>

									{/* Date Highlight Badge */}
									<motion.button
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.97 }}
										onClick={() => setActiveView("timeline")}
										className="px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-white/35 backdrop-blur-xl border border-white/50 text-[#31135e] hover:bg-white/50 text-sm sm:text-base font-semibold shadow-sm transition-all cursor-pointer"
									>
										Nov 20 – Nov 30, 2026
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
								className="w-full min-h-full select-text flex flex-col justify-start"
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
								className="w-full min-h-full select-text flex flex-col justify-start"
							>
								<Timeline onNavigateRegistration={() => setActiveView("registration")} />
							</motion.div>
						)}

						{activeView === "organizers" && (
							<motion.div
								key="hero-organizers"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.4 }}
								className="w-full min-h-full select-text flex flex-col justify-start"
							>
								<Organizers />
							</motion.div>
						)}

						{activeView === "past-events" && (
							<motion.div
								key="hero-past-events"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.4 }}
								className="w-full min-h-full select-text flex flex-col justify-start"
							>
								<PastEvents />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</section>
		</div>
	);
}
