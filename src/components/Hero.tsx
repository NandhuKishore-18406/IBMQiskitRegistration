import { ExternalLink, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Organizers from "./Organizers";
import PastEvents from "./PastEvents";
import Registration from "./Registration";
import Timeline from "./Timeline";

const IMG_URL = `${import.meta.env.BASE_URL}assets/Untitled design.png`;
const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO3_URL = `${import.meta.env.BASE_URL}assets/iic.webp`;
const LOGO4_URL = `${import.meta.env.BASE_URL}assets/qiskit.png`;

const DYNAMIC_SLOGANS = [
	"Eager to learn & hone your skills in Quantum Computing?",
	"Ready to explore quantum algorithms & real quantum hardware?",
	"Want to innovate with IBM Qiskit & quantum computing?",
	"Passionate about building the future of Quantum Technologies?",
];

type HeroView = "home" | "registration" | "timeline" | "organizers" | "past-events";

const NAV_ITEMS: { id: HeroView; label: string }[] = [
	{ id: "home", label: "Overview" },
	{ id: "timeline", label: "Timeline" },
	{ id: "registration", label: "Enquiry/Interest Form" },
	{ id: "organizers", label: "Organizers" },
	{ id: "past-events", label: "Past Events" },
];

export default function Hero() {
	const [activeView, setActiveView] = useState<HeroView>("home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [sloganIndex, setSloganIndex] = useState(0);
	const contentContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setSloganIndex((prev) => (prev + 1) % DYNAMIC_SLOGANS.length);
		}, 3800);
		return () => clearInterval(interval);
	}, []);

	// Auto scroll to top on activeView transition
	useEffect(() => {
		if (contentContainerRef.current) {
			contentContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [activeView]);

	return (
		<div className="w-full min-h-screen min-h-[100dvh] md:h-screen md:h-[100dvh] flex items-center justify-center p-1 sm:p-3 md:p-4 lg:p-5 bg-[#f2f4f8] box-border overflow-x-hidden md:overflow-hidden select-none">
			<section className="relative w-full min-h-screen min-h-[100dvh] md:min-h-0 md:h-full rounded-xl sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-none flex flex-col items-center justify-between bg-white/10 group">
				{/* Background Image Covered Over Entire Hero Card */}
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				{/* Persistent Top Header Bar with Logos & Dynamic Navigation */}
				<header className="relative z-30 w-full shrink-0 bg-white/25 backdrop-blur-2xl border-b border-white/40 shadow-xs">
					<div className="w-full px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
						{/* Left: Brand Logos */}
						<div
							onClick={() => {
								setActiveView("home");
								setIsMobileMenuOpen(false);
							}}
							className="flex items-center justify-start gap-1.5 sm:gap-3 md:gap-4 cursor-pointer hover:opacity-95 transition-opacity py-0.5 shrink-0"
						>
							<img
								src={LOGO1_URL}
								alt="CIT Logo"
								className="h-7 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[22vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<div className="w-px h-5 sm:h-7 md:h-8 bg-[#31135e]/30 rounded-full shrink-0" />
							<img
								src={LOGO3_URL}
								alt="IIC Logo"
								className="h-7 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[22vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<div className="w-px h-5 sm:h-7 md:h-8 bg-[#31135e]/30 rounded-full shrink-0" />
							<img
								src={LOGO2_URL}
								alt="IBM Logo"
								className="h-7 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[22vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<div className="w-px h-5 sm:h-7 md:h-8 bg-[#31135e]/30 rounded-full shrink-0" />
							<img
								src={LOGO4_URL}
								alt="Qiskit Logo"
								className="h-7 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[22vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
						</div>

						{/* Right: Desktop Navigation Tabs (xl and above) */}
						<nav className="hidden xl:flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40">
							{NAV_ITEMS.map((item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => setActiveView(item.id)}
									className={`px-3.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap touch-manipulation ${
										activeView === item.id
											? "bg-[#31135e] text-white shadow-xs"
											: "text-[#31135e] hover:bg-white/50"
									}`}
								>
									{item.label}
								</button>
							))}
						</nav>

						{/* Toggle Button for Mobile / Tablet View (< xl) */}
						<button
							type="button"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="xl:hidden p-2 sm:p-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-[#31135e] hover:bg-white/70 transition-colors shadow-xs focus:outline-none cursor-pointer"
							aria-label="Toggle navigation menu"
						>
							{isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
						</button>
					</div>

					{/* Collapsible Mobile & Tablet Dropdown Navigation Menu */}
					<AnimatePresence>
						{isMobileMenuOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.25, ease: "easeInOut" }}
								className="xl:hidden w-full bg-white/90 backdrop-blur-2xl border-t border-white/40 px-4 py-3 shadow-lg overflow-hidden"
							>
								<nav className="flex flex-col gap-1.5 w-full">
									{NAV_ITEMS.map((item) => (
										<button
											key={item.id}
											type="button"
											onClick={() => {
												setActiveView(item.id);
												setIsMobileMenuOpen(false);
											}}
											className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
												activeView === item.id
													? "bg-[#31135e] text-white shadow-xs"
													: "text-[#31135e] hover:bg-white/60"
											}`}
										>
											<span>{item.label}</span>
											{activeView === item.id && (
												<div className="w-2 h-2 rounded-full bg-white animate-pulse" />
											)}
										</button>
									))}
								</nav>
							</motion.div>
						)}
					</AnimatePresence>
				</header>

				{/* Central Content Area - Scrollable with custom transparent scrollbar */}
				<div
					ref={contentContainerRef}
					className="relative z-10 w-full flex-1 min-h-0 flex flex-col items-center justify-start px-2 sm:px-4 md:px-6 pt-2 pb-20 sm:pb-32 overflow-y-auto custom-scrollbar scroll-smooth"
				>
					<AnimatePresence mode="wait">
						{activeView === "home" && (
							<motion.div
								key="hero-main"
								initial={{ opacity: 0, scale: 0.97 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.97 }}
								transition={{ duration: 0.4 }}
								className="w-full h-full min-h-[420px] sm:min-h-[500px] flex flex-col items-center justify-between text-center max-w-5xl my-auto py-2 sm:py-4 select-text"
							>
								{/* Main H1 Title Area with Dynamic Slogan */}
								<div className="my-auto py-2 sm:py-8 flex flex-col items-center gap-3 sm:gap-6 max-w-4xl">
									{/* Dynamic Rotating Slogan Area */}
									<div className="flex flex-col items-center justify-center w-full px-2 py-1 sm:px-6 sm:py-4">
										<div className="min-h-[64px] sm:min-h-[84px] md:min-h-[100px] flex items-center justify-center overflow-hidden w-full px-1 sm:px-6">
											<AnimatePresence mode="wait">
												<motion.p
													key={sloganIndex}
													initial={{ opacity: 0, y: 14, scale: 0.98 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: -14, scale: 0.98 }}
													transition={{ duration: 0.5, ease: "easeInOut" }}
													className="text-base sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#31135e] max-w-4xl mx-auto leading-snug sm:leading-relaxed tracking-tight text-center drop-shadow-2xs"
												>
													{DYNAMIC_SLOGANS[sloganIndex]}
												</motion.p>
											</AnimatePresence>
										</div>

										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.8, delay: 0.3 }}
											className="flex flex-wrap items-center justify-center gap-2 mt-1 sm:mt-2"
										>
											<span className="text-[11px] sm:text-base md:text-lg font-bold text-[#31135e]/80 tracking-wider uppercase">
												Get ready for...
											</span>
											
										</motion.div>
									</div>

									{/* H1 Headline */}
									<motion.h1
										initial={{ opacity: 0, scale: 0.98 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										className="text-2xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-[#31135e] tracking-tight leading-[1.15] flex flex-wrap items-center justify-center gap-2 sm:gap-4"
									>
										<span>CIT - IBM</span>
										<span className="font-ibm-mono font-medium tracking-normal text-[#31135e]">Qiskit</span>
										<span>FALL FEST 2026</span>
									</motion.h1>

									{/* Paraphrased Slogan below H1 */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.4 }}
										className="mt-1 sm:mt-4 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-2xs inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-full"
									>
										<p className="text-[10px] sm:text-base md:text-lg font-bold text-[#31135e] tracking-wider sm:tracking-widest uppercase">
											Infinite Qubits · One Mission
										</p>
										
									</motion.div>
								</div>

								{/* Focused Action & Event Highlights Bar */}
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="mt-auto w-full max-w-3xl px-2 sm:px-4 flex flex-col items-center justify-center gap-3 pb-2 sm:pb-4 pt-2"
								>
									<div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
										{/* Main CTA Button */}
										<motion.button
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
											onClick={() => setActiveView("registration")}
											className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#31135e] hover:bg-[#230c45] text-white text-sm sm:text-base font-semibold shadow-lg transition-all cursor-pointer touch-manipulation"
										>
											Enquiry/Interest Form
										</motion.button>

										{/* Date Highlight Badge */}
										<motion.button
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
											onClick={() => setActiveView("timeline")}
											className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-white/35 backdrop-blur-xl border border-white/50 text-[#31135e] hover:bg-white/50 text-sm sm:text-base font-semibold shadow-sm transition-all cursor-pointer touch-manipulation"
										>
											Nov 20 – Nov 30, 2026
										</motion.button>

										{/* Mode Badge Button */}
										<motion.div
											whileHover={{ scale: 1.03 }}
											className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-emerald-500/15 backdrop-blur-xl border border-emerald-600/30 text-[#31135e] text-sm sm:text-base font-bold shadow-sm transition-all flex items-center justify-center gap-2"
										>
											<span className="relative flex h-2.5 w-2.5 shrink-0">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
												<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
											</span>
											<span>Mode: Online</span>
										</motion.div>
									</div>

									{/* YouTube Channel Banner Link */}
									<motion.a
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										href="https://www.youtube.com/@citquantumhackathon1549/videos"
										target="_blank"
										rel="noopener noreferrer"
										className="mt-1 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/45 hover:bg-white/70 border border-white/60 shadow-2xs text-[#31135e] text-xs sm:text-sm font-semibold transition-all group touch-manipulation"
									>
										<svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF0000] shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
											<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
										</svg>
										<span>To view previous events – Visit our YouTube channel</span>
										<ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
									</motion.a>
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
								<Timeline />
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
