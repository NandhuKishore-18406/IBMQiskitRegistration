import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import AboutProgram from "./AboutProgram";
import HeroBadge from "./HeroBadge";
import Navbar, { HeroView } from "./Navbar";
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
	const contentContainerRef = useRef<HTMLDivElement>(null);

	// Auto scroll to top on activeView transition
	useEffect(() => {
		if (contentContainerRef.current) {
			contentContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [activeView]);

	return (
		<div className="w-full min-h-screen min-h-[100dvh] lg:h-screen lg:h-[100dvh] flex items-center justify-center p-1 sm:p-3 md:p-4 lg:p-5 bg-[#f2f4f8] box-border overflow-x-hidden select-none">
			<section className="relative w-full min-h-screen min-h-[100dvh] lg:min-h-0 lg:h-full rounded-xl sm:rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col justify-between bg-white/10 group overflow-hidden shadow-2xl border border-white/80">
				{/* Background Image Covered Over Entire Hero Card */}
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				{/* Header Navigation Bar (Persistent across ALL pages including Home) */}
				<Navbar activeView={activeView} onViewChange={setActiveView} />

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
								className="w-full h-full min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-hidden"
							>
								{/* Information & Action Stack */}
								<motion.div
									ref={contentContainerRef}
									className="w-full h-full min-h-0 overflow-y-auto custom-scrollbar scroll-smooth flex flex-col py-2 sm:py-4 select-text space-y-3 sm:space-y-4 lg:space-y-5 shrink-0 items-center justify-start lg:justify-center text-center lg:my-auto"
								>
									{/* Top Header Information Stack */}
									<motion.div 
										className="w-full flex flex-col items-center text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto gap-3 sm:gap-4 lg:gap-5"
									>
										
										{/* CIT Logo */}
										<motion.img
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											src={LOGO1_URL}
											alt="Coimbatore Institute of Technology Logo"
											className="h-12 sm:h-16 md:h-20 lg:h-22 xl:h-26 2xl:h-28 w-auto object-contain drop-shadow-md shrink-0"
										/>

										{/* Line 1 -> Coimbatore Institute of Technology Header Stack */}
										<motion.div
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="flex flex-col gap-0.5 sm:gap-1 w-full shrink-0 items-center text-center"
										>
											<h2 className="font-black text-[#31135e] uppercase tracking-wider drop-shadow-xs leading-tight text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
												Coimbatore Institute of Technology
											</h2>

											{/* Affiliation & Location Lines */}
											<div className="flex flex-col gap-0.5 font-bold text-[#31135e]/90 items-center justify-center text-center">
												<span className="text-[11px] sm:text-xs md:text-sm font-bold text-[#31135e]/90">
													(Affiliated to Anna University, Chennai)
												</span>
												<span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-[#31135e]">
													Coimbatore, Tamil Nadu, India
												</span>
											</div>
										</motion.div>

										{/* Partner Logos Row (IIC Logo left, Qiskit middle, IBM Quantum right) */}
										<motion.div
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="w-full my-1.5 sm:my-2 lg:my-2.5 flex items-center shrink-0 justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12"
										>
											{/* Left: IIC Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO3_URL}
												alt="IIC Logo"
												className="h-8 sm:h-11 md:h-13 lg:h-14 xl:h-15 w-auto object-contain drop-shadow-md"
											/>

											{/* Middle: Qiskit Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO4_URL}
												alt="Qiskit Logo"
												className="h-7 sm:h-10 md:h-12 lg:h-13 xl:h-14 w-auto object-contain drop-shadow-md"
											/>

											{/* Right: IBM Quantum Logo */}
											<motion.img
												whileHover={{ scale: 1.08 }}
												whileTap={{ scale: 0.95 }}
												transition={HOVER_PHYSICS}
												src={LOGO2_URL}
												alt="IBM Quantum Logo"
												className="h-8 sm:h-11 md:h-13 lg:h-14 xl:h-15 w-auto object-contain drop-shadow-md"
											/>
										</motion.div>

										{/* Department of Computing Badge (Without Atom logo) */}
										<motion.div
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="w-full flex justify-center text-center"
										>
											<HeroBadge text="Department of Computing" />
										</motion.div>

										{/* Collaboration Statement */}
										<motion.p
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-[#31135e]/85 italic tracking-wide text-center"
										>
											in collaboration with <strong className="font-black text-[#31135e] not-italic">IBM Quantum</strong> and <strong className="font-black text-[#31135e] not-italic">IIC</strong>
										</motion.p>

										{/* Main Title: CIT - IBM Qiskit Fall Fest 2026 */}
										<motion.h1
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="font-black text-[#31135e] tracking-tight leading-[1.05] drop-shadow-xs my-1 sm:my-1.5 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center"
										>
											CIT - IBM Qiskit Fall Fest 2026
										</motion.h1>

										{/* Date & Mode Badges */}
										<motion.div
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="w-full flex flex-wrap items-center gap-2 sm:gap-3 my-1.5 sm:my-2 justify-center"
										>
											{/* Timeline Date Badge Button */}
											<motion.button
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												transition={HOVER_PHYSICS}
												onClick={() => setActiveView("timeline")}
												className="h-9 sm:h-11 lg:h-12 px-4 sm:px-6 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 text-[#31135e] hover:bg-white/70 text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 cursor-pointer touch-manipulation flex items-center justify-center"
											>
												Nov 20 – Nov 30, 2026
											</motion.button>

											{/* Mode Indicator Badge */}
											<motion.div
												whileHover={{ scale: 1.03 }}
												transition={HOVER_PHYSICS}
												className="h-9 sm:h-11 lg:h-12 px-4 sm:px-5 rounded-full bg-emerald-500/15 backdrop-blur-xl border border-emerald-600/30 text-[#31135e] text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 flex items-center justify-center gap-2"
											>
												<span className="relative flex h-2 w-2 shrink-0">
													<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
													<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
												</span>
												<span>Mode: Online</span>
											</motion.div>
										</motion.div>

										{/* MOBILE ONLY: Embedded About Program Section in Hero */}
										<motion.div
											variants={HERO_ITEM_VARIANTS}
											transition={SMOOTH_EASE}
											className="lg:hidden w-full pt-6 mt-4 border-t border-[#31135e]/15"
										>
											<AboutProgram />
										</motion.div>

									</motion.div>
								</motion.div>
							</motion.div>
						) : (
							/* OTHER SUB-VIEWS: Full Screen View */
							<motion.div
								key="sub-view-layout"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={SMOOTH_EASE}
								className="w-full h-full min-h-0 overflow-y-auto custom-scrollbar scroll-smooth p-3 sm:p-6 lg:p-8 xl:p-10 select-text"
							>
								{activeView === "about" && (
									<div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto py-2 sm:py-6 px-2 sm:px-4">
										<AboutProgram />
									</div>
								)}
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
