import { GraduationCap, Mail, Phone, User } from "lucide-react";
import { motion } from "motion/react";

interface LeadershipMember {
	id: string;
	name: string;
	designation: string;
	institution?: string;
	image?: string;
}

interface FacultyOrganizer {
	id: string;
	name: string;
	role: string;
	designation: string;
	qualifications?: string;
	department: string;
	email: string;
	phone: string;
	image?: string;
}

interface StudentOrganizer {
	id: string;
	name: string;
	department: string;
	year: string;
	role?: string;
	email?: string;
	phone?: string;
	image?: string;
}

const SANTOSSH_IMG = `${import.meta.env.BASE_URL}assets/organizers/Santossh.png`;
const NISCHAL_IMG = `${import.meta.env.BASE_URL}assets/organizers/nischal.png`;
const RAJESWARI_IMG = `${import.meta.env.BASE_URL}assets/organizers/rajeswari.jpg`;
const ALAMELU_IMG = `${import.meta.env.BASE_URL}assets/organizers/DrNRAlamelu.jpg`;
const UMAMAHESWARI_IMG = `${import.meta.env.BASE_URL}assets/organizers/Dr.K.Umamaheswari.jpg`;
const MANJULA_IMG = `${import.meta.env.BASE_URL}assets/organizers/ManjulaGandhi.png`;
const GAYATHRI_IMG = `${import.meta.env.BASE_URL}assets/organizers/DrSGayathriDevi.jpg`;
const ANANDHI_IMG = `${import.meta.env.BASE_URL}assets/organizers/Aanadhi.jpg`;

const CHIEF_PATRONS: LeadershipMember[] = [
	{
		id: "santossh",
		name: "Thiru. R. Santossh",
		designation: "Managing Trustee / Chairman",
		institution: "CIT Institutions",
		image: SANTOSSH_IMG,
	},
	{
		id: "vishnu",
		name: "Sri Vishnu Nischal Rajkumar",
		designation: "Director - Admissions",
		institution: "CIT Institutions",
		image: NISCHAL_IMG,
	},
];

const PATRONS: LeadershipMember[] = [
	{
		id: "rajeswari",
		name: "Dr. A. Rajeswari",
		designation: "Principal",
		institution: "Coimbatore Institute of Technology",
		image: RAJESWARI_IMG,
	},
	{
		id: "alamelu",
		name: "Dr. N. R. Alamelu",
		designation: "Chief Academic Officer",
		institution: "CIT and CIT Sandwich Polytechnic College Coimbatore",
		image: ALAMELU_IMG,
	},
];

const CONVENORS: LeadershipMember[] = [
	{
		id: "umamaheswari",
		name: "Dr. K. Umamaheswari",
		designation: "Convenor & Dean",
		institution: "Department of Computing, Coimbatore Institute of Technology",
		image: UMAMAHESWARI_IMG,
	},
];

const MAIN_ORGANIZER: FacultyOrganizer = {
	id: "manjula",
	name: "Dr. S. Manjula Gandhi",
	role: "Lead Organizer",
	designation: "Professor and Head",
	department: "Department of Computing - Software Systems, CIT",
	email: "hodss@cit.edu.in",
	phone: "",
	image: MANJULA_IMG,
};

const CO_ORGANIZERS: FacultyOrganizer[] = [
	{
		id: "gayathri",
		name: "Dr. S. Gayathri Devi",
		role: "Co-Organizer",
		designation: "Associate Professor",
		department: "Department of Computing - Data Science, CIT",
		email: "sgayathridevi@cit.edu.in",
		phone: "",
		image: GAYATHRI_IMG,
	},
	{
		id: "anandhi",
		name: "Dr. D. Anandhi",
		role: "Co-Organizer",
		designation: "Assistant Professor (Sl.Gr.)",
		department: "Department of Computing - Software Systems, CIT",
		email: "anandhi@cit.edu.in",
		phone: "+91 9842219092",
		image: ANANDHI_IMG,
	},
];

const STUDENT_ORGANIZERS: StudentOrganizer[] = [
	{
		id: "nandhu",
		name: "Nandhu Kishore S",
		department: "Department of Computing - MSc Software Systems, CIT",
		year: "3rd Year",
		role: "Student Lead",
		phone: "",
	},
	{
		id: "ashraff",
		name: "Ashraf S",
		department: "Department of Computing - MSc Software Systems, CIT",
		year: "2nd Year",
		role: "Student Organizer",
		phone: "",
	},
];

export default function Organizers() {
	return (
		<div className="w-full flex flex-col gap-8 sm:gap-10 lg:gap-12 py-3 px-2 sm:px-4 lg:px-6 text-left max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto pb-24 sm:pb-32">
			
			{/* Chief Patrons Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Chief Patrons
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
					{CHIEF_PATRONS.map((cp, idx) => (
						<motion.div
							key={cp.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-5 sm:p-6 md:p-7 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
						>
							{cp.image ? (
								<img
									src={cp.image}
									alt={cp.name}
									className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover object-top shadow-md ring-4 ring-white/90 shrink-0"
								/>
							) : (
								<div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
									<User className="w-12 h-12" />
								</div>
							)}

							<div className="flex-1 text-center sm:text-left space-y-1">
								<h4 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight">
									{cp.name}
								</h4>
								<div className="text-sm xs:text-base sm:text-lg md:text-xl font-extrabold text-[#31135e]/90 mt-1">
									{cp.designation}
								</div>
								{cp.institution && (
									<div className="text-xs xs:text-sm sm:text-base text-[#5E6470] font-bold mt-1.5">
										{cp.institution}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Patrons Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Patrons
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
					{PATRONS.map((patron, idx) => (
						<motion.div
							key={patron.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-5 sm:p-6 md:p-7 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
						>
							{patron.image ? (
								<img
									src={patron.image}
									alt={patron.name}
									className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover object-top shadow-md ring-4 ring-white/90 shrink-0"
								/>
							) : (
								<div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
									<User className="w-12 h-12" />
								</div>
							)}

							<div className="flex-1 text-center sm:text-left space-y-1">
								<h4 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight">
									{patron.name}
								</h4>
								<div className="text-sm xs:text-base sm:text-lg md:text-xl font-extrabold text-[#31135e]/90 mt-1">
									{patron.designation}
								</div>
								{patron.institution && (
									<div className="text-xs xs:text-sm sm:text-base text-[#5E6470] font-bold mt-1.5">
										{patron.institution}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Convenor Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Convenor
				</h3>

				<div className="grid grid-cols-1 gap-4 sm:gap-6">
					{CONVENORS.map((conv, idx) => (
						<motion.div
							key={conv.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5 sm:gap-7 transition-all duration-300 hover:shadow-2xl hover:bg-white/60"
						>
							{conv.image ? (
								<img
									src={conv.image}
									alt={conv.name}
									className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl object-cover object-top shadow-lg ring-4 ring-white/90 shrink-0"
								/>
							) : (
								<div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
									<User className="w-16 h-16" />
								</div>
							)}

							<div className="flex-1 text-center sm:text-left space-y-2">
								<h4 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight">
									{conv.name}
								</h4>
								<div className="text-base xs:text-lg sm:text-xl md:text-2xl font-extrabold text-[#31135e]/90">
									{conv.designation}
								</div>
								{conv.institution && (
									<div className="text-xs xs:text-sm sm:text-base md:text-lg text-[#5E6470] font-bold">
										{conv.institution}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Lead Organizer Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Lead Organizer
				</h3>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5 sm:gap-7 transition-all duration-300 hover:shadow-2xl hover:bg-white/60 relative overflow-hidden"
				>
					{MAIN_ORGANIZER.image ? (
						<img
							src={MAIN_ORGANIZER.image}
							alt={MAIN_ORGANIZER.name}
							className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl object-cover object-top shadow-lg ring-4 ring-white/90 shrink-0"
						/>
					) : (
						<div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
							<User className="w-16 h-16" />
						</div>
					)}

					<div className="flex-1 text-center sm:text-left space-y-2">
						<div className="inline-block px-3 py-1 rounded-full bg-[#31135e]/10 text-[#31135e] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-1">
							{MAIN_ORGANIZER.role}
						</div>
						<h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight">
							{MAIN_ORGANIZER.name}
						</h3>
						<div className="text-base xs:text-lg sm:text-xl md:text-2xl font-extrabold text-[#31135e]/90">
							{MAIN_ORGANIZER.designation}
						</div>
						<div className="text-xs xs:text-sm sm:text-base md:text-lg text-[#5E6470] font-bold">
							{MAIN_ORGANIZER.department}
						</div>

						{MAIN_ORGANIZER.email && (
							<div className="pt-2">
								<a
									href={`mailto:${MAIN_ORGANIZER.email}`}
									className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold transition-all shadow-md cursor-pointer active:scale-95"
								>
									<Mail className="w-4 h-4 sm:w-5 sm:h-5" />
									<span>{MAIN_ORGANIZER.email}</span>
								</a>
							</div>
						)}
					</div>
				</motion.div>
			</div>

			{/* Co-Organizers Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Co-Organizers
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
					{CO_ORGANIZERS.map((org, index) => (
						<motion.div
							key={org.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * index }}
							className="p-5 sm:p-6 md:p-7 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 hover:shadow-xl transition-all duration-300"
						>
							{org.image ? (
								<img
									src={org.image}
									alt={org.name}
									className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover object-top shadow-md ring-4 ring-white/90 shrink-0"
								/>
							) : (
								<div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
									<User className="w-12 h-12" />
								</div>
							)}

							<div className="flex-1 text-center sm:text-left space-y-1.5 flex flex-col justify-between h-full">
								<div>
									<h4 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight">
										{org.name}
									</h4>
									<div className="text-sm xs:text-base sm:text-lg md:text-xl font-extrabold text-[#31135e]/90 mt-1">
										{org.designation}
									</div>
									<div className="text-xs xs:text-sm sm:text-base text-[#5E6470] font-bold mt-1">
										{org.department}
									</div>
								</div>

								<div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
									{org.email && (
										<a
											href={`mailto:${org.email}`}
											className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs xs:text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer active:scale-95"
										>
											<Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
											<span>{org.email}</span>
										</a>
									)}
									{org.phone && (
										<a
											href={`tel:${org.phone}`}
											className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs xs:text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer active:scale-95"
										>
											<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
											<span>{org.phone}</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Student Organizers Section */}
			<div className="w-full space-y-4">
				<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight border-b-2 border-[#31135e]/15 pb-2.5">
					Student Organizers
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{STUDENT_ORGANIZERS.map((student, index) => (
						<motion.div
							key={student.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * index }}
							className="p-5 sm:p-6 md:p-7 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3"
						>
							<div className="space-y-2">
								<div className="flex items-center justify-between gap-2">
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31135e]/10 text-[#31135e] text-xs xs:text-sm font-extrabold shrink-0">
										<GraduationCap className="w-4 h-4" />
										{student.year} • {student.role}
									</span>
								</div>

								<h4 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight">
									{student.name}
								</h4>

								<div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-[#5E6470]">
									{student.department}
								</div>
							</div>

							{student.phone && (
								<div className="pt-2">
									<a
										href={`tel:${student.phone}`}
										className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs xs:text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer active:scale-95"
									>
										<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
										<span>{student.phone}</span>
									</a>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Bottom Scroll Padding Buffer */}
			<div className="h-16 sm:h-24 w-full shrink-0" />
		</div>
	);
}
