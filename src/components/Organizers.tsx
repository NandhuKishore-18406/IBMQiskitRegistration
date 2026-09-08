import { ExternalLink, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

interface Organizer {
	id: string;
	name: string;
	role: string;
	designation: string;
	qualifications: string;
	department: string;
	email: string;
	officeNumber: string;
	vidwanUrl?: string;
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
	officeNumber: "4222574071",
	vidwanUrl: "https://vidwan.inflibnet.ac.in/",
	image: `${import.meta.env.BASE_URL}assets/manjula.png`,
	isMain: true,
};

const CO_ORGANIZERS: Organizer[] = [
	{
		id: "anandhi",
		name: "Dr. D. Anandhi",
		role: "Co-Organizer",
		designation: "Assistant Professor (Sl.Gr.)",
		qualifications: "M.C.A., M.Phil., Ph.D.",
		department: "M.Sc. Software Systems",
		email: "anandhi@cit.edu.in",
		officeNumber: "4222574071",
		vidwanUrl: "https://vidwan.inflibnet.ac.in/",
		image: `${import.meta.env.BASE_URL}assets/anandhi.png`,
	},
	{
		id: "gayathri",
		name: "Dr. S. Gayathri Devi",
		role: "Co-Organizer",
		designation: "Associate Professor",
		qualifications: "M.Sc., M.Phil., Ph.D.",
		department: "M.Sc. Data Science",
		email: "sgayathridevi@cit.edu.in",
		officeNumber: "4222574071",
		vidwanUrl: "https://vidwan.inflibnet.ac.in/",
		image: `${import.meta.env.BASE_URL}assets/gayathri.png`,
	},
];

export default function Organizers() {
	return (
		<div className="w-full flex flex-col gap-6 sm:gap-8 py-2 px-1 sm:px-2 text-left max-w-6xl mx-auto pb-16 sm:pb-20">
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
				<div className="text-xs font-bold uppercase tracking-wider text-[#31135e]/80 mb-3 px-1">
					Lead Organizer
				</div>

				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="p-5 sm:p-8 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative overflow-hidden"
				>
					{/* Glowing decorative background pill */}
					<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#31135e]/5 rounded-full blur-2xl pointer-events-none" />

					{/* Profile Avatar */}
					<div className="relative shrink-0">
						<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#31135e] via-[#4d258b] to-purple-400 shadow-md">
							<img
								src={MAIN_ORGANIZER.image}
								alt={MAIN_ORGANIZER.name}
								className="w-full h-full object-cover rounded-full bg-white"
							/>
						</div>
						<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#31135e] text-white text-[10px] sm:text-xs font-semibold whitespace-nowrap shadow-sm">
							{MAIN_ORGANIZER.role}
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

						<div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm text-[#5E6470]">
							<div className="px-3 py-1 rounded-xl bg-white/50 border border-white/60">
								<span>{MAIN_ORGANIZER.department}</span>
							</div>

							<div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/50 border border-white/60">
								<Phone className="w-4 h-4 text-[#31135e]" />
								<span>{MAIN_ORGANIZER.officeNumber}</span>
							</div>
						</div>

						<div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
							<a
								href={`mailto:${MAIN_ORGANIZER.email}`}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
							>
								<Mail className="w-4 h-4" />
								<span>{MAIN_ORGANIZER.email}</span>
							</a>

							{MAIN_ORGANIZER.vidwanUrl && (
								<a
									href={MAIN_ORGANIZER.vidwanUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white/60 hover:bg-white/80 border border-white/80 text-[#31135e] text-xs sm:text-sm font-medium transition-all shadow-2xs"
								>
									<span>Vidwan Profile</span>
									<ExternalLink className="w-3 h-3 opacity-60" />
								</a>
							)}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Co-Organizers Section */}
			<div className="w-full space-y-3">
				<div className="text-xs font-bold uppercase tracking-wider text-[#31135e]/80 px-1">
					Co-Organizers
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{CO_ORGANIZERS.map((org, index) => (
						<motion.div
							key={org.id}
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
							className="p-5 sm:p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-center sm:items-start gap-5 relative"
						>
							{/* Avatar */}
							<div className="relative shrink-0">
								<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#31135e]/80 via-purple-500/70 to-indigo-300 shadow-sm">
									<img
										src={org.image}
										alt={org.name}
										className="w-full h-full object-cover rounded-full bg-white"
									/>
								</div>
								<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#31135e]/85 text-white text-[9px] sm:text-[10px] font-medium whitespace-nowrap shadow-2xs">
									{org.role}
								</div>
							</div>

							{/* Info */}
							<div className="flex-1 text-center sm:text-left space-y-2">
								<div>
									<span className="text-[11px] font-semibold text-[#31135e]/75 uppercase tracking-wide">
										{org.designation}
									</span>
									<h4 className="text-lg sm:text-xl font-bold text-[#31135e] tracking-tight">
										{org.name}
									</h4>
									<p className="text-xs font-medium text-[#31135e]/70">
										{org.qualifications}
									</p>
								</div>

								<div className="flex flex-col gap-1.5 text-xs text-[#5E6470]">
									<div className="text-[#31135e]/80">
										<span>{org.department}</span>
									</div>

									<div className="flex items-center justify-center sm:justify-start gap-1.5">
										<Phone className="w-3.5 h-3.5 text-[#31135e]/80 shrink-0" />
										<span>{org.officeNumber}</span>
									</div>
								</div>

								<div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
									<a
										href={`mailto:${org.email}`}
										className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs"
									>
										<Mail className="w-3.5 h-3.5" />
										<span>{org.email}</span>
									</a>

									{org.vidwanUrl && (
										<a
											href={org.vidwanUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/60 hover:bg-white/80 border border-white/80 text-[#31135e] text-xs font-medium transition-all shadow-3xs"
										>
											<span>Vidwan Profile</span>
											<ExternalLink className="w-3 h-3 opacity-60" />
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
