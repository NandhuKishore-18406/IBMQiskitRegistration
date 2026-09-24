import {
	Calendar,
	ChevronRight,
	FileText,
	History,
	Home,
	Menu,
	Sparkles,
	Users,
	X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HeroView = "home" | "timeline" | "registration" | "organizers" | "past-events";

interface RevealMenuProps {
	activeView: HeroView;
	onViewChange: (view: HeroView) => void;
}

const NAV_ITEMS: { id: HeroView; label: string; icon: any; badge?: string }[] = [
	{ id: "home", label: "Overview", icon: Home },
	{ id: "timeline", label: "Timeline", icon: Calendar },
	{ id: "registration", label: "Enquiry Form", icon: FileText, badge: "Open" },
	{ id: "organizers", label: "Organizers", icon: Users },
	{ id: "past-events", label: "Past Events", icon: History },
];

export default function RevealMenu({ activeView, onViewChange }: RevealMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (viewId: HeroView) => {
		onViewChange(viewId);
		setIsOpen(false);
	};

	const currentItem = NAV_ITEMS.find((item) => item.id === activeView) || NAV_ITEMS[0];

	return (
		<div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 select-none">
			{/* Floating Reveal Menu Trigger Button */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#31135e] text-white shadow-xl hover:bg-[#230c45] border border-white/30 backdrop-blur-xl transition-all cursor-pointer group"
				aria-label="Toggle navigation menu"
			>
				<div className="flex items-center gap-2">
					<span className="relative flex h-2.5 w-2.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
					</span>
					<span className="text-xs sm:text-sm font-bold tracking-wide">
						{currentItem.label}
					</span>
				</div>
				<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
					{isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
				</div>
			</motion.button>

			{/* Slide-over Reveal Panel */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs"
						/>

						{/* Reveal Menu Drawer Card */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9, x: 20, y: -10 }}
							animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, x: 20, y: -10 }}
							transition={{ type: "spring", stiffness: 350, damping: 28 }}
							className="absolute top-12 right-0 w-64 sm:w-72 bg-white/95 backdrop-blur-2xl border border-[#31135e]/20 rounded-3xl p-3 shadow-2xl z-50 overflow-hidden"
						>
							<div className="px-3 py-2 border-b border-[#31135e]/10 flex items-center justify-between mb-2">
								<span className="text-[11px] font-black text-[#31135e]/70 uppercase tracking-widest flex items-center gap-1.5">
									<Sparkles className="w-3 h-3 text-[#31135e]" />
									Navigation Menu
								</span>
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="p-1 rounded-full text-[#31135e]/60 hover:text-[#31135e] hover:bg-[#31135e]/10 transition-colors cursor-pointer"
								>
									<X className="w-4 h-4" />
								</button>
							</div>

							<ul className="flex flex-col gap-1.5">
								{NAV_ITEMS.map((item) => {
									const Icon = item.icon;
									const isActive = activeView === item.id;
									return (
										<li key={item.id}>
											<button
												type="button"
												onClick={() => handleSelect(item.id)}
												className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between cursor-pointer group ${
													isActive
														? "bg-[#31135e] text-white shadow-md"
														: "text-[#31135e] hover:bg-[#31135e]/10"
												}`}
											>
												<div className="flex items-center gap-3">
													<div
														className={`p-1.5 rounded-xl transition-colors ${
															isActive
																? "bg-white/20 text-white"
																: "bg-[#31135e]/10 text-[#31135e] group-hover:bg-[#31135e]/20"
														}`}
													>
														<Icon className="w-4 h-4" />
													</div>
													<span>{item.label}</span>
												</div>

												<div className="flex items-center gap-2">
													{item.badge && (
														<span
															className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${
																isActive
																	? "bg-emerald-400 text-[#31135e]"
																	: "bg-emerald-600 text-white"
															}`}
														>
															{item.badge}
														</span>
													)}
													{isActive && (
														<ChevronRight className="w-4 h-4 text-emerald-400" />
													)}
												</div>
											</button>
										</li>
									);
								})}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
