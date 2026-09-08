import { Calendar } from "lucide-react";
import { motion } from "motion/react";

interface TimelineProps {
	onNavigateRegistration?: () => void;
}

export default function Timeline({ onNavigateRegistration }: TimelineProps) {
	return (
		<div className="w-full flex flex-col items-center justify-center py-4 sm:py-12 px-2 sm:px-4 text-center max-w-3xl mx-auto my-auto min-h-[360px] sm:min-h-[420px] pb-16 sm:pb-24">
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/70 shadow-xl flex flex-col items-center gap-4 sm:gap-5 w-full"
			>
				{/* Icon badge */}
				<div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#31135e]/10 border border-[#31135e]/20 text-[#31135e] flex items-center justify-center shadow-inner">
					<Calendar className="w-7 h-7 sm:w-10 sm:h-10 text-[#31135e]" />
				</div>

				{/* Title and Subtitle */}
				<div className="space-y-2 max-w-lg">
					<div className="inline-flex items-center px-3 py-1 rounded-full bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] text-xs font-semibold uppercase tracking-wider mb-2">
						Schedule Announcement
					</div>

					<h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#31135e] tracking-tight">
						Will Be Revealed Soon
					</h2>

					<p className="text-xs sm:text-sm text-[#5E6470] font-normal leading-relaxed">
						The detailed schedule for CIT - IBM Qiskit Fall Fest 2026 is currently being finalized. Stay tuned for dates, keynotes, and workshop announcements!
					</p>
				</div>

				{/* Registration CTA */}
				{onNavigateRegistration && (
					<button
						type="button"
						onClick={onNavigateRegistration}
						className="mt-2 px-6 py-3 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer touch-manipulation"
					>
						Submit Inquiry
					</button>
				)}
			</motion.div>

			{/* Bottom Scroll Buffer */}
			<div className="h-10 sm:h-16 w-full shrink-0" />
		</div>
	);
}
