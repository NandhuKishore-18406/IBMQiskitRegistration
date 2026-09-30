import {
	Award,
	BookOpen,
	HelpCircle,
	UploadCloud,
	UserCheck,
	Users,
} from "lucide-react";
import { motion } from "motion/react";

interface TimelineEvent {
	id: string;
	phase: string;
	dateLine1: string;
	dateLine2: string;
	title: string;
	icon: any;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
	{
		id: "enquiry",
		phase: "Phase 1",
		dateLine1: "Sept 28 – Oct 10",
		dateLine2: "2026",
		title: "Enquiry Period",
		icon: HelpCircle,
	},
	{
		id: "registration",
		phase: "Phase 2",
		dateLine1: "Oct 10 – Nov 10",
		dateLine2: "2026",
		title: "Registration Period",
		icon: UserCheck,
	},
	{
		id: "lectures",
		phase: "Phase 3",
		dateLine1: "Nov 20 – Nov 24",
		dateLine2: "2026",
		title: "Quantum Lecture Series",
		icon: BookOpen,
	},
	{
		id: "group-formation",
		phase: "Phase 4",
		dateLine1: "Nov 23",
		dateLine2: "2026",
		title: "Group Formation",
		icon: Users,
	},
	{
		id: "idea-submission",
		phase: "Phase 5",
		dateLine1: "Nov 24",
		dateLine2: "2026",
		title: "Idea Submission",
		icon: UploadCloud,
	},
	{
		id: "final-presentation",
		phase: "Phase 6",
		dateLine1: "Nov 30",
		dateLine2: "2026",
		title: "Final Presentation & Ceremony",
		icon: Award,
	},
];

export default function Timeline() {
	return (
		<div className="w-full flex flex-col items-center justify-start py-4 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto min-h-full pb-20 sm:pb-28">
			{/* Page Header */}
			<motion.div
				initial={{ opacity: 0, y: -15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="flex flex-col items-center text-center space-y-3 mb-8 sm:mb-12 lg:mb-14"
			>
				<h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#31135e] tracking-tight">
					CIT - IBM Qiskit Fall Fest Timeline
				</h2>

			</motion.div>

			{/* Timeline Card Container */}
			<div className="relative w-full pl-2 sm:pl-4">
				{/* Vertical Connector Line */}
				<div className="absolute left-6 sm:left-9 top-4 bottom-8 w-1 bg-gradient-to-b from-[#31135e]/40 via-[#31135e]/25 to-[#31135e]/10 rounded-full" />

				{/* Timeline Event Items */}
				<div className="flex flex-col gap-4 sm:gap-6">
					{TIMELINE_EVENTS.map((event, idx) => {
						const Icon = event.icon;
						const dateFormatted = `${event.dateLine1}, ${event.dateLine2}`;
						return (
							<motion.div
								key={event.id}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: idx * 0.08 }}
								className="relative pl-12 sm:pl-16 group"
							>
								{/* Glowing Node Icon */}
								<div className="absolute left-0 top-1 sm:top-1.5 w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#31135e] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-10 border-2 border-white">
									<Icon className="w-4 h-4 sm:w-5 sm:h-5" />
								</div>

								{/* Main Content Card */}
								<motion.div
									whileHover={{ y: -2, scale: 1.005 }}
									transition={{ type: "spring", stiffness: 400, damping: 25 }}
									className="p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
								>
									{/* 1.name format */}
									<h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#31135e] tracking-tight">
										{idx + 1}. {event.title}
									</h3>

									{/* Date (Same font size) */}
									<div className="text-base sm:text-lg md:text-xl font-bold text-[#31135e]/80 whitespace-nowrap">
										{dateFormatted}
									</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
