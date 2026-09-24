import { GraduationCap, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

interface LeadershipMember {
	id: string;
	name: string;
	designation: string;
	institution?: string;
}

interface FacultyOrganizer {
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

const CHIEF_PATRONS: LeadershipMember[] = [
	{
		id: "santossh",
		name: "Thiru. R. Santossh",
		designation: "Managing Trustee / Chairman",
		institution: "CIT Institutions",
	},
	{
		id: "vishnu",
		name: "Sri Vishnu Nischal Rajkumar",
		designation: "Director - Admissions",
		institution: "CIT Institutions",
	},
];

const PATRONS: LeadershipMember[] = [
	{
		id: "rajeswari",
		name: "Dr. A. Rajeswari",
		designation: "Principal",
		institution: "Coimbatore Institute of Technology",
	},
	{
		id: "alamelu",
		name: "Dr. N. R. Alamelu",
		designation: "Chief Academic Officer",
		institution: "CIT and CIT Sandwich Polytechnic College Coimbatore",
	},
];

const MAIN_ORGANIZER: FacultyOrganizer = {
	id: "manjula",
	name: "Dr. S. Manjula Gandhi",
	role: "Main Organizer",
	designation: "IBM Qiskit Advocate, Professor and Head",
	qualifications: "M.C.A., M.S., Ph.D.",
	department: "Department of Computing - Software Systems, CIT",
	email: "hodss@cit.edu.in",
	phone: "",
};

const CO_ORGANIZERS: FacultyOrganizer[] = [
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
		<div className="w-full flex flex-col gap-6 sm:gap-8 py-2 px-1 sm:px-2 text-left max-w-3xl mx-auto pb-20 sm:pb-28">
			{/* Page Header */}
			<div className="flex flex-col items-center text-center space-y-3">
				<div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] text-xs font-bold uppercase tracking-wider shadow-2xs">
					Organizing Committee
				</div>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight">
					Meet Our Leadership & Committee
				</h2>

				<p className="text-xs sm:text-sm text-[#5E6470] max-w-lg font-semibold leading-relaxed">
					The patronage, faculty leadership, and student organizers steering CIT - IBM Qiskit Fall Fest 2026.
				</p>
			</div>

			{/* Chief Patrons Section (No icon, no chips) */}
			<div className="w-full space-y-3">
				<h3 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight">
					Chief Patrons
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
					{CHIEF_PATRONS.map((cp, idx) => (
						<motion.div
							key={cp.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md space-y-1"
						>
							<h4 className="text-base sm:text-lg font-black text-[#31135e] tracking-tight">
								{cp.name}
							</h4>
							<div className="text-xs sm:text-sm font-bold text-[#31135e]/90">
								{cp.designation}
							</div>
							{cp.institution && (
								<div className="text-xs text-[#5E6470] font-semibold">
									{cp.institution}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Patrons Section (No chips) */}
			<div className="w-full space-y-3">
				<h3 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight">
					Patrons
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
					{PATRONS.map((patron, idx) => (
						<motion.div
							key={patron.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md space-y-1"
						>
							<h4 className="text-base sm:text-lg font-black text-[#31135e] tracking-tight">
								{patron.name}
							</h4>
							<div className="text-xs sm:text-sm font-bold text-[#31135e]/90">
								{patron.designation}
							</div>
							{patron.institution && (
								<div className="text-xs text-[#5E6470] font-semibold">
									{patron.institution}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Lead Organizer Section */}
			<div className="w-full space-y-3">
				<h3 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight">
					Lead Organizer
				</h3>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="p-5 sm:p-6 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
				>
					<div className="flex-1 space-y-1.5">
						<h3 className="text-lg sm:text-2xl font-black text-[#31135e] tracking-tight flex flex-wrap items-baseline gap-x-1.5">
							<span>{MAIN_ORGANIZER.name}</span>
							{MAIN_ORGANIZER.qualifications && (
								<span className="text-xs sm:text-base font-bold text-[#31135e]/80">
									, {MAIN_ORGANIZER.qualifications}
								</span>
							)}
						</h3>

						<div className="text-xs sm:text-sm font-extrabold text-[#31135e] opacity-90 uppercase tracking-wide">
							{MAIN_ORGANIZER.designation}
						</div>

						<div className="pt-1 text-xs text-[#5E6470] font-semibold">
							{MAIN_ORGANIZER.department}
						</div>
					</div>

					<div className="shrink-0 pt-1 md:pt-0">
						<a
							href={`mailto:${MAIN_ORGANIZER.email}`}
							className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
						>
							<Mail className="w-3.5 h-3.5" />
							<span>{MAIN_ORGANIZER.email}</span>
						</a>
					</div>
				</motion.div>
			</div>

			{/* Co-Organizers Section */}
			<div className="w-full space-y-3">
				<h3 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight">
					Co-Organizers
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
					{CO_ORGANIZERS.map((org, index) => (
						<motion.div
							key={org.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * index }}
							className="p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md flex flex-col justify-between gap-3"
						>
							<div className="space-y-1">
								<h4 className="text-base sm:text-lg font-black text-[#31135e] tracking-tight flex flex-wrap items-baseline gap-x-1.5">
									<span>{org.name}</span>
									{org.qualifications && (
										<span className="text-xs font-bold text-[#31135e]/80">
											, {org.qualifications}
										</span>
									)}
								</h4>

								<div className="text-xs font-extrabold text-[#31135e]/85 uppercase tracking-wide">
									{org.designation}
								</div>

								<div className="text-xs text-[#31135e]/75 font-medium">
									{org.department}
								</div>
							</div>

							<div className="pt-1 flex flex-wrap items-center gap-2">
								{org.email && (
									<a
										href={`mailto:${org.email}`}
										className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
									>
										<Mail className="w-3 h-3" />
										<span>{org.email}</span>
									</a>
								)}
								{org.phone && (
									<a
										href={`tel:${org.phone}`}
										className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
									>
										<Phone className="w-3 h-3" />
										<span>{org.phone}</span>
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Student Organizers Section */}
			<div className="w-full space-y-3">
				<h3 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight">
					Student Organizers
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
					{STUDENT_ORGANIZERS.map((student, index) => (
						<motion.div
							key={student.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * index }}
							className="p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-md flex flex-col justify-between gap-3"
						>
							<div className="space-y-1">
								<div className="flex items-center justify-between gap-2">
									<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#31135e]/10 text-[#31135e] text-xs font-extrabold shrink-0">
										<GraduationCap className="w-3.5 h-3.5" />
										{student.year}
									</span>
								</div>

								<h4 className="text-base sm:text-lg font-black text-[#31135e] tracking-tight pt-1">
									{student.name}
								</h4>

								<div className="text-xs font-medium text-[#31135e]/80 leading-snug">
									{student.department}
								</div>
							</div>

							{student.phone && (
								<div className="pt-1">
									<a
										href={`tel:${student.phone}`}
										className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
									>
										<Phone className="w-3 h-3" />
										<span>{student.phone}</span>
									</a>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Bottom Scroll Padding Buffer */}
			<div className="h-12 sm:h-20 w-full shrink-0" />
		</div>
	);
}
