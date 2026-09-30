import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HeroView = "home" | "about" | "timeline" | "registration" | "organizers" | "past-events";

interface NavbarProps {
	activeView?: HeroView;
	onViewChange?: (view: HeroView) => void;
}

export const NAV_ITEMS: { id: HeroView; label: string; badge?: string }[] = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About the Program" },
	{ id: "timeline", label: "Timeline" },
	{ id: "registration", label: "Interest Form", badge: "Open" },
	{ id: "organizers", label: "Organizers" },
	{ id: "past-events", label: "Past Events" },
];

const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO3_URL = `${import.meta.env.BASE_URL}assets/iic.webp`;
const LOGO4_URL = `${import.meta.env.BASE_URL}assets/qiskit.png`;

export default function Navbar({ activeView = "home", onViewChange }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (viewId: HeroView) => {
		if (onViewChange) {
			onViewChange(viewId);
		}
		setIsOpen(false);
	};

	return (
		<nav className="w-full relative z-40 bg-white/60 backdrop-blur-2xl border-b border-white/70 shadow-sm px-3 sm:px-5 md:px-6 lg:px-6 xl:px-8 py-2 lg:py-2.5 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 box-border shrink-0 select-none">
			{/* Left: Brand Identity with CIT & Partner Logos */}
			<div
				onClick={() => handleSelect("home")}
				className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 cursor-pointer hover:opacity-95 transition-opacity shrink-0 min-w-0"
			>
				{/* Logos Cluster Row */}
				<div className="flex items-center gap-1 sm:gap-2 shrink-0">
					{/* CIT Logo */}
					<img
						src={LOGO1_URL}
						alt="CIT Logo"
						className="h-7 sm:h-8 md:h-9 lg:h-9.5 xl:h-10.5 w-auto object-contain drop-shadow-xs shrink-0"
					/>
					<div className="h-4 sm:h-5 lg:h-5 w-[1px] bg-[#31135e]/30 shrink-0 mx-0.5 sm:mx-1" />
					{/* IIC Logo */}
					<img
						src={LOGO3_URL}
						alt="IIC Logo"
						className="h-4.5 sm:h-5.5 md:h-6 lg:h-6.5 xl:h-7.5 w-auto object-contain drop-shadow-xs shrink-0"
					/>
					{/* Qiskit Logo */}
					<img
						src={LOGO4_URL}
						alt="Qiskit Logo"
						className="h-4 sm:h-5 md:h-5.5 lg:h-6 xl:h-6.5 w-auto object-contain drop-shadow-xs shrink-0"
					/>
					{/* IBM Quantum Logo */}
					<img
						src={LOGO2_URL}
						alt="IBM Quantum Logo"
						className="h-4.5 sm:h-5.5 md:h-6 lg:h-6.5 xl:h-7.5 w-auto object-contain drop-shadow-xs shrink-0"
					/>
				</div>

				{/* Responsive Text Branding Block */}
				<div className="hidden md:flex flex-col text-left justify-center min-w-0">
					<span className="text-xs sm:text-sm lg:text-sm xl:text-base font-black text-[#31135e] uppercase tracking-wide leading-tight truncate">
						Coimbatore Institute of Technology
					</span>
					<span className="text-[10px] sm:text-xs lg:text-[11px] xl:text-xs font-bold text-[#31135e]/85 truncate">
						Department of Computing · IBM Qiskit Fall Fest 2026
					</span>
				</div>
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
					className="p-2 sm:p-2.5 rounded-full bg-[#31135e] text-white hover:bg-[#230c45] active:scale-95 transition-all shadow-md focus:outline-none cursor-pointer"
					aria-label="Toggle navigation menu"
				>
					{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
