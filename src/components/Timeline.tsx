import { Calendar, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface TimelineProps {
	onNavigateRegistration?: () => void;
}

export default function Timeline({ onNavigateRegistration }: TimelineProps) {
	return (
		<div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center max-w-3xl mx-auto my-auto min-h-[420px]">
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="p-8 sm:p-12 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/70 shadow-xl flex flex-col items-center gap-5 w-full"
			>
				{/* Glowing icon badge */}
				<div className="relative">
					<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#31135e]/10 border border-[#31135e]/20 text-[#31135e] flex items-center justify-center shadow-inner">
						<Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#31135e]" />
					</div>
					<div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-[#31135e] text-white shadow-md">
						<Sparkles className="w-4 h-4" />
					</div>
				</div>

				{/* Title and Subtitle */}
				<div className="space-y-2 max-w-lg">
					<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] text-xs font-semibold uppercase tracking-wider mb-2">
						<Clock className="w-3.5 h-3.5 animate-pulse" />
						<span>Schedule Announcement</span>
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#31135e] tracking-tight">
						Will Be Revealed Soon
					</h2>

					<p className="text-xs sm:text-sm text-[#5E6470] font-normal leading-relaxed">
						The detailed schedule for CIT - IBM Qiskit Fall Fest 2026 is currently being finalized. Stay tuned for dates, keynotes, and workshop announcements!
					</p>
				</div>

				{/* Optional Registration CTA */}
				{onNavigateRegistration && (
					<button
						type="button"
						onClick={onNavigateRegistration}
						className="mt-2 px-5 py-2.5 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer flex items-center gap-2"
					>
						<span>For Inquiry</span>
						<Sparkles className="w-4 h-4" />
					</button>
				)}
			</motion.div>
		</div>
	);
}
