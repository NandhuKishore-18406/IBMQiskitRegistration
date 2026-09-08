import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface MenuItem {
	label: string;
	hasDropdown?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
	{ label: "For Inquiry" },
	{ label: "Timeline" },
	{ label: "Organizers" },
];

const LOGO_URL = `${import.meta.env.BASE_URL}assets/logo.png`;

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10 w-full relative z-30">
			<div className="flex-1 flex items-center">
				<img
					src={LOGO_URL}
					alt="Logo"
					className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity drop-shadow-md"
				/>
			</div>

			{/* Desktop Menu */}
			<ul className="hidden lg:flex items-center gap-10 text-[rgb(45,45,45)] font-normal text-base">
				{MENU_ITEMS.map((item) => (
					<li
						key={item.label}
						className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group font-medium"
					>
						{item.label}
						{item.hasDropdown && (
							<ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
						)}
					</li>
				))}
			</ul>

			{/* Right actions and hamburger toggle */}
			<div className="flex-1 flex items-center justify-end gap-3">
				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
				>
					<div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
						<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
					</div>
					<span className="text-xs md:text-sm font-normal">Book Demo</span>
				</motion.button>

				{/* Toggle Button for Congested/Mobile Views */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden p-2 rounded-full bg-white/60 backdrop-blur-md text-[rgba(30,50,90,0.9)] hover:bg-white/80 transition-colors shadow-sm focus:outline-none"
					aria-label="Toggle Menu"
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Collapsible Mobile/Responsive Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.98 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="lg:hidden absolute top-full left-4 right-4 mt-2 p-5 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 flex flex-col gap-4 z-50"
					>
						<ul className="flex flex-col gap-3 text-[#2d2d2d]">
							{MENU_ITEMS.map((item) => (
								<li
									key={item.label}
									onClick={() => setIsOpen(false)}
									className="cursor-pointer hover:text-[#31135e] font-medium text-base py-2 border-b border-black/5 last:border-none transition-colors"
								>
									{item.label}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
