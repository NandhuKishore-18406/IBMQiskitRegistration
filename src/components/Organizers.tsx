import { Mail } from "lucide-react";
import { motion } from "motion/react";

interface Organizer {
	id: string;
	name: string;
	role: string;
	designation: string;
	qualifications: string;
	department: string;
	email: string;
	image: string;
	isMain?: boolean;
}

const MAIN_ORGANIZER: Organizer = {
	id: "manjula",
	name: "Dr. S. Manjula Gandhi",
	role: "Main Organizer",
	designation: "Professor and Head",
	qualifications: "M.C.A., M.S., Ph.D.",
	department: "M.Sc. Software Systems",
	email: "hodss@cit.edu.in",
	image: `${import.meta.env.BASE_URL}assets/manjula.png`,
	isMain: true,
};

const CO_ORGANIZERS: Organizer[] = [
	{
		id: "gayathri",
		name: "Dr. S. Gayathri Devi",
		role: "Co-Organizer",
		designation: "Associate Professor",
		qualifications: "M.Sc., M.Phil., Ph.D.",
		department: "M.Sc. Data Science",
		email: "sgayathridevi@cit.edu.in",
		image: `${import.meta.env.BASE_URL}assets/gayathri.png`,
	},
	{
		id: "anandhi",
		name: "Dr. D. Anandhi",
		role: "Co-Organizer",
		designation: "Assistant Professor (Sl.Gr.)",
		qualifications: "M.C.A., M.Phil., Ph.D.",
		department: "M.Sc. Software Systems",
		email: "anandhi@cit.edu.in",
		image: `${import.meta.env.BASE_URL}assets/anandhi.png`,
	},
];

export default function Organizers() {
	return (
		<div className="w-full flex flex-col gap-6 sm:gap-8 py-2 px-1 sm:px-2 text-left max-w-6xl mx-auto pb-20 sm:pb-28">
			{/* Page Header */}
			<div className="flex flex-col items-center text-center space-y-3">
				<div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] text-xs font-semibold uppercase tracking-wider">
					Organizing Committee
				</div>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#31135e] tracking-tight">
					Meet Our Event Organizers
				</h2>

				<p className="text-xs sm:text-sm text-[#5E6470] max-w-xl font-normal leading-relaxed">
					The distinguished faculty leadership steering CIT - IBM Qiskit Fall Fest 2026.
				</p>
			</div>

			{/* Main Organizer Highlight Section */}
			<div className="w-full">
				<h3 className="text-xl sm:text-2xl font-bold text-[#31135e] tracking-tight mb-3 px-1">
					Lead Organizer
				</h3>

				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="p-5 sm:p-8 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 relative overflow-hidden"
				>
					{/* Glowing decorative background pill */}
					<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#31135e]/5 rounded-full blur-2xl pointer-events-none" />

					{/* Profile Avatar */}
					<div className="relative shrink-0">
						<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md">
							<img
								src={MAIN_ORGANIZER.image}
								alt={MAIN_ORGANIZER.name}
								className="w-full h-full object-cover rounded-full bg-white"
							/>
						</div>
					</div>

					{/* Profile Info */}
					<div className="flex-1 text-center md:text-left space-y-3">
						<div>
							<span className="text-xs font-semibold text-[#31135e] opacity-80 uppercase tracking-wide">
								{MAIN_ORGANIZER.designation}
							</span>
							<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#31135e] tracking-tight">
								{MAIN_ORGANIZER.name}
							</h3>
							<p className="text-xs sm:text-sm font-medium text-[#31135e]/70">
								{MAIN_ORGANIZER.qualifications}
							</p>
						</div>

						<div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs sm:text-sm text-[#5E6470]">
							<div className="px-3 py-1 rounded-xl bg-white/50 border border-white/60">
								<span>{MAIN_ORGANIZER.department}</span>
							</div>
						</div>

						<div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
							<a
								href={`mailto:${MAIN_ORGANIZER.email}`}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer touch-manipulation active:scale-95"
							>
								<Mail className="w-4 h-4" />
								<span>{MAIN_ORGANIZER.email}</span>
							</a>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Co-Organizers Section */}
			<div className="w-full space-y-3">
				<h3 className="text-xl sm:text-2xl font-bold text-[#31135e] tracking-tight px-1">
					Co-Organizers
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{CO_ORGANIZERS.map((org, index) => (
						<motion.div
							key={org.id}
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
							className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 relative"
						>
							{/* Avatar */}
							<div className="relative shrink-0">
								<div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm">
									<img
										src={org.image}
										alt={org.name}
										className="w-full h-full object-cover rounded-full bg-white"
									/>
								</div>
							</div>

							{/* Info */}
							<div className="flex-1 text-center sm:text-left space-y-2">
								<div>
									<span className="text-[11px] font-semibold text-[#31135e]/75 uppercase tracking-wide">
										{org.designation}
									</span>
									<h4 className="text-base sm:text-xl font-bold text-[#31135e] tracking-tight">
										{org.name}
									</h4>
									<p className="text-xs font-medium text-[#31135e]/70">
										{org.qualifications}
									</p>
								</div>

								<div className="flex flex-col gap-1 text-xs text-[#5E6470]">
									<div className="text-[#31135e]/80">
										<span>{org.department}</span>
									</div>
								</div>

								<div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
									<a
										href={`mailto:${org.email}`}
										className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs touch-manipulation active:scale-95"
									>
										<Mail className="w-3.5 h-3.5" />
										<span>{org.email}</span>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Bottom Scroll Padding Buffer */}
			<div className="h-12 sm:h-20 w-full shrink-0" />
		</div>
	);
}
