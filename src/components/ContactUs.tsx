import {
	GraduationCap,
	Mail,
	Phone,
	Sparkles,
	User,
} from "lucide-react";
import { motion } from "motion/react";

const MANJULA_IMG = `${import.meta.env.BASE_URL}assets/organizers/ManjulaGandhi.png`;
const GAYATHRI_IMG = `${import.meta.env.BASE_URL}assets/organizers/DrSGayathriDevi.jpg`;
const ANANDHI_IMG = `${import.meta.env.BASE_URL}assets/organizers/Aanadhi.jpg`;
const ASHRAF_IMG = `${import.meta.env.BASE_URL}assets/organizers/asraf.jpeg`;
const NANDHU_IMG = `${import.meta.env.BASE_URL}assets/organizers/nandhu.jpeg`;

interface ContactMember {
	id: string;
	name: string;
	role?: string;
	designation: string;
	department: string;
	email?: string;
	phone?: string;
	image?: string;
	yearBadge?: string;
}

const FACULTY_CONTACTS: ContactMember[] = [
	{
		id: "manjula",
		name: "Dr. S. Manjula Gandhi",
		designation: "Professor and Head",
		department: "Department of Computing - Software Systems, CIT",
		email: "manjulagandhi@cit.edu.in",
		image: MANJULA_IMG,
	},
	{
		id: "gayathri",
		name: "Dr. S. Gayathri Devi",
		designation: "Associate Professor",
		department: "Department of Computing - Data Science, CIT",
		email: "sgayathridevi@cit.edu.in",
		image: GAYATHRI_IMG,
	},
	{
		id: "anandhi",
		name: "Dr. D. Anandhi",
		designation: "Assistant Professor (Sl.Gr.)",
		department: "Department of Computing - Software Systems, CIT",
		email: "anandhi@cit.edu.in",
		phone: "+91 9842219092",
		image: ANANDHI_IMG,
	},
];

const STUDENT_CONTACTS: ContactMember[] = [
	{
		id: "nandhu",
		name: "Nandhu Kishore S",
		designation: "Student Coordinator",
		department: "Department of Computing - Integrated MSc Software Systems, CIT",
		yearBadge: "3rd Year",
		email: "nandhukishore18406@gmail.com",
		phone: "+91 9489622705",
		image: NANDHU_IMG,
	},
	{
		id: "ashraf",
		name: "Ashraf S",
		designation: "Student Coordinator",
		department: "Department of Computing - Integrated MSc Software Systems, CIT",
		yearBadge: "2nd Year",
		phone: "+91 9787298939",
		image: ASHRAF_IMG,
	},
];

export default function ContactUs() {
	return (
		<div className="w-full flex flex-col gap-8 sm:gap-10 lg:gap-12 py-3 px-2 sm:px-4 lg:px-6 text-left max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto pb-24 sm:pb-32">
			{/* Page Header */}
			<div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#31135e]/10 border border-[#31135e]/20 text-[#31135e] text-xs font-black uppercase tracking-wider">
					<Sparkles className="w-3.5 h-3.5 text-[#31135e]" />
					<span>Get in Touch</span>
				</div>
				<h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#31135e] tracking-tight">
					Contact Us
				</h2>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/80 max-w-3xl leading-relaxed">
					Have questions about registration, hackathon challenges, workshop sessions, or IBM Quantum credits? Reach out to the CIT - IBM Qiskit Fall Fest 2026 organizing team.
				</p>
			</div>

			{/* Faculty Coordinators Section */}
			<div className="w-full space-y-4">
				<div className="flex items-center justify-between border-b-2 border-[#31135e]/15 pb-2.5">
					<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight">
						Faculty Coordinators
					</h3>
					<span className="text-xs sm:text-sm font-bold text-[#31135e]/70 hidden sm:inline-block">
						Academic & Program Inquiries
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
					{FACULTY_CONTACTS.map((faculty, idx) => (
						<motion.div
							key={faculty.id}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * idx }}
							className="p-5 sm:p-6 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
						>
							<div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3.5">
								{faculty.image ? (
									<img
										src={faculty.image}
										alt={faculty.name}
										className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top shadow-md ring-4 ring-white/90"
									/>
								) : (
									<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e]">
										<User className="w-10 h-10" />
									</div>
								)}

								<div>
									<h4 className="text-lg sm:text-xl font-black text-[#31135e] tracking-tight leading-snug">
										{faculty.name}
									</h4>
									<div className="text-xs sm:text-sm font-bold text-[#31135e]/80 mt-0.5">
										{faculty.designation}
									</div>
									<div className="text-xs sm:text-sm font-medium text-[#5E6470] mt-1 leading-snug">
										{faculty.department}
									</div>
								</div>
							</div>

							<div className="pt-4 flex flex-wrap gap-2 justify-center sm:justify-start border-t border-[#31135e]/10 mt-4">
								{faculty.email && (
									<a
										href={`mailto:${faculty.email}`}
										className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer active:scale-95"
									>
										<Mail className="w-3.5 h-3.5" />
										<span>{faculty.email}</span>
									</a>
								)}

								{faculty.phone && (
									<a
										href={`tel:${faculty.phone.replace(/\s+/g, "")}`}
										className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 hover:bg-white text-[#31135e] border border-[#31135e]/25 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer active:scale-95"
									>
										<Phone className="w-3.5 h-3.5" />
										<span>{faculty.phone}</span>
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Student Coordinators / Helpdesk Section */}
			<div className="w-full space-y-4">
				<div className="flex items-center justify-between border-b-2 border-[#31135e]/15 pb-2.5">
					<h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-[#31135e] tracking-tight">
						Student Coordinators & Helpdesk
					</h3>
					<span className="text-xs sm:text-sm font-bold text-[#31135e]/70 hidden sm:inline-block">
						Direct Support & Queries
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
					{STUDENT_CONTACTS.map((student, idx) => (
						<motion.div
							key={student.id}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 * idx }}
							className="p-5 sm:p-6 md:p-7 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/80 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 hover:shadow-xl transition-all duration-300"
						>
							{student.image ? (
								<img
									src={student.image}
									alt={student.name}
									className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover object-top shadow-md ring-4 ring-white/90 shrink-0"
								/>
							) : (
								<div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-[#31135e]/10 flex items-center justify-center text-[#31135e] shrink-0">
									<User className="w-12 h-12" />
								</div>
							)}

							<div className="flex-1 text-center sm:text-left space-y-2 flex flex-col justify-between h-full w-full">
								<div>
									{student.yearBadge && (
										<div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
											<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-900 border border-emerald-600/25 text-xs font-extrabold">
												<GraduationCap className="w-3.5 h-3.5" />
												{student.yearBadge}
											</span>
										</div>
									)}

									<h4 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight">
										{student.name}
									</h4>

									<div className="text-xs xs:text-sm sm:text-base font-semibold text-[#5E6470] mt-1 leading-snug">
										{student.department}
									</div>
								</div>

								{/* Contact Action Buttons */}
								<div className="pt-3 flex flex-wrap gap-2.5 justify-center sm:justify-start">
									{student.phone && (
										<a
											href={`tel:${student.phone.replace(/\s+/g, "")}`}
											className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#31135e] hover:bg-[#230c45] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer active:scale-95"
										>
											<Phone className="w-3.5 h-3.5" />
											<span>{student.phone}</span>
										</a>
									)}

									{student.email && (
										<a
											href={`mailto:${student.email}`}
											className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/70 hover:bg-white text-[#31135e] border border-[#31135e]/25 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer active:scale-95"
										>
											<Mail className="w-3.5 h-3.5" />
											<span>{student.email}</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Bottom Scroll Padding Buffer */}
			<div className="h-16 sm:h-24 w-full shrink-0" />
		</div>
	);
}
