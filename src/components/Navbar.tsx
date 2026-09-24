import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HeroView = "home" | "timeline" | "registration" | "organizers" | "past-events";

interface NavbarProps {
	activeView?: HeroView;
	onViewChange?: (view: HeroView) => void;
}

export const NAV_ITEMS: { id: HeroView; label: string; badge?: string }[] = [
	{ id: "home", label: "Overview" },
	{ id: "timeline", label: "Timeline" },
	{ id: "registration", label: "Enquiry/Interest Form", badge: "Open" },
	{ id: "organizers", label: "Organizers" },
	{ id: "past-events", label: "Past Events" },
];

const LOGO_URL = `${import.meta.env.BASE_URL}assets/logo.png`;

export default function Navbar({ activeView = "home", onViewChange }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (viewId: HeroView) => {
		if (onViewChange) {
			onViewChange(viewId);
		}
		setIsOpen(false);
	};

	return (
		<nav className="w-full relative z-30 bg-white/30 backdrop-blur-2xl border-b border-white/50 shadow-sm px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
			{/* Left: Brand Identity */}
			<div
				onClick={() => handleSelect("home")}
				className="flex items-center gap-3 cursor-pointer hover:opacity-95 transition-opacity shrink-0"
			>
				<img
					src={LOGO_URL}
					alt="CIT Logo"
					className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-sm"
				/>
				<div className="hidden md:flex flex-col text-left">
					<span className="text-xs sm:text-sm font-black text-[#31135e] uppercase tracking-wider">
						Coimbatore Institute of Technology
					</span>
					<span className="text-[10px] sm:text-xs font-bold text-[#31135e]/80">
						Department of Computing · IBM Qiskit Fall Fest 2026
					</span>
				</div>
			</div>

			{/* Right: Desktop Navigation Bar (Right-Aligned) */}
			<div className="hidden xl:flex items-center justify-end flex-1 ml-auto">
				<ul className="flex items-center gap-1 p-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-xs">
					{NAV_ITEMS.map((item) => {
						const isActive = activeView === item.id;
						return (
							<li key={item.id} className="relative">
								<button
									type="button"
									onClick={() => handleSelect(item.id)}
									className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
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
											className={`relative z-10 text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
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

			{/* Right: Hamburger Toggle Button for Mobile / Tablet */}
			<div className="flex items-center gap-2 sm:gap-3 shrink-0">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="xl:hidden p-2 sm:p-2.5 rounded-full bg-[#31135e] text-white hover:bg-[#230c45] transition-colors shadow-md focus:outline-none cursor-pointer"
					aria-label="Toggle navigation menu"
				>
					{isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
						className="xl:hidden absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-2xl border-b border-[#31135e]/20 px-4 py-4 shadow-2xl z-50 overflow-hidden"
					>
						<ul className="flex flex-col gap-2 w-full">
							{NAV_ITEMS.map((item) => {
								const isActive = activeView === item.id;
								return (
									<li key={item.id}>
										<button
											type="button"
											onClick={() => handleSelect(item.id)}
											className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
												isActive
													? "bg-[#31135e] text-white shadow-md"
													: "text-[#31135e] hover:bg-[#31135e]/10"
											}`}
										>
											<div className="flex items-center gap-2">
												<span>{item.label}</span>
												{item.badge && (
													<span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold uppercase">
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
