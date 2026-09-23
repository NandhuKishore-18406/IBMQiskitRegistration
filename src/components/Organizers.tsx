import { GraduationCap, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

interface Organizer {
	id: string;
	name: string;
	role: string;
	designation: string;
	qualifications: string;
	department: string;
	email: string;
	phone: string;
}

interface StudentOrganizer {
	id: string;
	name: string;
	department: string;
	year: string;
	role?: string;
	email?: string;
	phone?: string;
}

const MAIN_ORGANIZER: Organizer = {
	id: "manjula",
	name: "Dr. S. Manjula Gandhi",
	role: "Main Organizer",
	designation: "IBM Qiskit Advocate, Professor and Head",
	qualifications: "M.C.A., M.S., Ph.D.",
	department: "Department of Computing - Software Systems, CIT",
	email: "hodss@cit.edu.in",
	phone: "",
};

const CO_ORGANIZERS: Organizer[] = [
	{
		id: "gayathri",
		name: "Dr. S. Gayathri Devi",
		role: "Co-Organizer",
		designation: "IBM Qiskit Advocate, Associate Professor",
		qualifications: "M.Sc., M.Phil., Ph.D.",
		department: "Department of Computing - Data Science, CIT",
		email: "sgayathridevi@cit.edu.in",
		phone: "+91 9944561345",
	},
	{
		id: "anandhi",
		name: "Dr. D. Anandhi",
		role: "Co-Organizer",
		designation: "Assistant Professor (Sl.Gr.)",
		qualifications: "M.C.A., M.Phil., Ph.D.",
		department: "Department of Computing - Software Systems, CIT",
		email: "anandhi@cit.edu.in",
		phone: "+91 9842219092",
	},
];

const STUDENT_ORGANIZERS: StudentOrganizer[] = [
	{
		id: "nandhu",
		name: "Nandhu Kishore S",
		department: "Department of Computing - Software Systems, CIT",
		year: "3rd Year",
		role: "Student Lead",
		phone: "+91 9489622705",
	},
	{
		id: "ashraff",
		name: "Ashraf S",
		department: "Department of Computing - Software Systems, CIT",
		year: "2nd Year",
		role: "Student Organizer",
		phone: "",
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
					The faculty leadership and student organizers steering CIT - IBM Qiskit Fall Fest 2026.
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
					className="p-5 sm:p-8 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
				>
					{/* Glowing decorative background pill */}
					<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#31135e]/5 rounded-full blur-2xl pointer-events-none" />

					{/* Profile Info */}
					<div className="flex-1 space-y-2">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#31135e] tracking-tight flex flex-wrap items-baseline gap-x-2">
							<span>{MAIN_ORGANIZER.name}</span>
							{MAIN_ORGANIZER.qualifications && (
								<span className="text-sm sm:text-lg md:text-xl font-semibold text-[#31135e]/80">
									, {MAIN_ORGANIZER.qualifications}
								</span>
							)}
						</h3>

						<div className="text-xs sm:text-sm md:text-base font-semibold text-[#31135e] opacity-90 uppercase tracking-wide">
							{MAIN_ORGANIZER.designation}
						</div>

						<div className="pt-1 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#5E6470]">
							<div className="px-3 py-1 rounded-xl bg-white/50 border border-white/60 font-medium text-[#31135e]">
								{MAIN_ORGANIZER.department}
							</div>
						</div>
					</div>

					{/* Email Action */}
					<div className="shrink-0 pt-2 md:pt-0">
						<a
							href={`mailto:${MAIN_ORGANIZER.email}`}
							className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer touch-manipulation active:scale-95"
						>
							<Mail className="w-4 h-4" />
							<span>{MAIN_ORGANIZER.email}</span>
						</a>
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
							className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md hover:shadow-lg transition-all flex flex-col justify-between gap-4 relative"
						>
							{/* Info */}
							<div className="space-y-2">
								<h4 className="text-base sm:text-xl font-bold text-[#31135e] tracking-tight flex flex-wrap items-baseline gap-x-1.5">
									<span>{org.name}</span>
									{org.qualifications && (
										<span className="text-xs sm:text-sm font-semibold text-[#31135e]/80">
											, {org.qualifications}
										</span>
									)}
								</h4>

								<div className="text-xs sm:text-sm font-semibold text-[#31135e]/85 uppercase tracking-wide">
									{org.designation}
								</div>

								<div className="pt-1">
									<span className="inline-block px-2.5 py-1 rounded-lg bg-white/50 border border-white/60 text-xs font-medium text-[#31135e]/80">
										{org.department}
									</span>
								</div>
							</div>

							<div className="pt-2 flex flex-wrap items-center gap-2">
								{org.email && (
									<a
										href={`mailto:${org.email}`}
										className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs touch-manipulation active:scale-95"
									>
										<Mail className="w-3.5 h-3.5" />
										<span>{org.email}</span>
									</a>
								)}
								{org.phone && (
									<a
										href={`tel:${org.phone}`}
										className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs touch-manipulation active:scale-95"
									>
										<Phone className="w-3.5 h-3.5" />
										<span>{org.phone}</span>
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Student Organizers Section (Multiline layout) */}
			<div className="w-full space-y-3">
				<h3 className="text-xl sm:text-2xl font-bold text-[#31135e] tracking-tight px-1">
					Student Organizers
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{STUDENT_ORGANIZERS.map((student, index) => (
						<motion.div
							key={student.id}
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * (index + 3) }}
							className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md hover:shadow-lg transition-all flex flex-col justify-between gap-3 relative"
						>
							<div className="flex flex-col gap-2">
								{/* Line 1: Role & Year Badges */}
								<div className="flex items-center justify-between gap-2">
									
									<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#31135e]/10 text-[#31135e] text-xs font-semibold shrink-0">
										<GraduationCap className="w-3.5 h-3.5" />
										{student.year}
									</span>
								</div>

								{/* Line 2: Student Name */}
								<h4 className="text-lg sm:text-xl font-bold text-[#31135e] tracking-tight pt-0.5">
									{student.name}
								</h4>

								{/* Line 3: Department (Multiline formatting supported) */}
								<div className="text-xs sm:text-sm font-medium text-[#31135e]/80 whitespace-pre-line leading-relaxed">
									{student.department}
								</div>

								{/* Line 4: Email & Phone Buttons */}
								{(student.email || student.phone) && (
									<div className="pt-2 flex flex-wrap items-center gap-2">
										{student.email && (
											<a
												href={`mailto:${student.email}`}
												className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs touch-manipulation active:scale-95"
											>
												<Mail className="w-3.5 h-3.5" />
												<span>{student.email}</span>
											</a>
										)}
										{student.phone && (
											<a
												href={`tel:${student.phone}`}
												className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-medium transition-all shadow-2xs touch-manipulation active:scale-95"
											>
												<Phone className="w-3.5 h-3.5" />
												<span>{student.phone}</span>
											</a>
										)}
									</div>
								)}
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

