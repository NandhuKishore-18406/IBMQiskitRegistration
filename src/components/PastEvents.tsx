import { Calendar, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SpeakerCarousel from "./SpeakerCarousel";

type YearEdition = "2023" | "2022" | "2021";

interface GalleryImage {
	url: string;
	title: string;
	category: string;
}

interface Speaker {
	name: string;
	role: string;
	image?: string;
}

interface Winner {
	rank: string;
	title: string;
	names: string[];
	project?: string;
	image?: string;
}

interface EventEditionData {
	year: string;
	title: string;
	subtitle: string;
	dates: string;
	mode: string;
	registrations: string;
	speakersCount: string;
	projectsCount: string;
	summary: string;
	heroImage: string;
	gallery: GalleryImage[];
	topics: string[];
	winners: Winner[];
	featuredSpeakers: Speaker[];
	insights: { text: string; tag: string }[];
}

const BASE_URL = import.meta.env.BASE_URL;

const EDITIONS_DATA: Record<YearEdition, EventEditionData> = {
	"2023": {
		year: "2023",
		title: "CIT Quantum Challenge 2023",
		subtitle: "The 3rd Annual Qiskit Fall Fest event hosted offline & online at Coimbatore Institute of Technology.",
		dates: "October 26 – November 11, 2023",
		mode: "Hybrid (Offline Workshops + Online Challenge)",
		registrations: "100+ Participants",
		speakersCount: "12 Speakers",
		projectsCount: "50+ Challenge Submissions",
		summary:
			"Supported by IBM Quantum Education leads Brian Ingmanson and Serena Godwin, the 2023 edition brought 13 deep-dive technical sessions followed by a multi-checkpoint coding challenge on Python Qiskit.",
		heroImage: `${BASE_URL}assets/past/2023_banner.png`,
		gallery: [
			{
				url: `${BASE_URL}assets/past/2023_banner.png`,
				title: "Official Quantum Banner 2023",
				category: "Official Banner",
			},
			{
				url: `${BASE_URL}assets/past/2023_circuit.png`,
				title: "IBM Qiskit Circuit Composer Logic Slide",
				category: "Technical Workshop",
			},
			{
				url: `${BASE_URL}assets/past/2022_session.png`,
				title: "Quantum Computing Hands-on Session Poster",
				category: "Keynote Session",
			},
		],
		topics: [
			"Reversible Circuits",
			"Quantum Entanglement",
			"Quantum Teleportation",
			"Deutsch-Jozsa & Grover's Algorithms",
			"Shor's Factoring Algorithm",
			"Quantum Machine Learning (QML)",
			"Quantum Key Distribution (QKD)",
			"Quantum Finance",
		],
		winners: [
			{ rank: "1st Place", title: "Overall Winner", names: ["Karthick Roshan S (CIT)"] },
			{ rank: "2nd Place", title: "Runner Up", names: ["Balaji Doraiswamy (CIT)"] },
			{ rank: "3rd Place", title: "Second Runner Up", names: ["Jeevan N (CIT)"] },
			{ rank: "Distinction", title: "Top Coders", names: ["James Titus (KIT)", "Raj Kishore S (CIT)"] },
		],
		featuredSpeakers: [
			{ name: "Dr. S. Manjula Gandhi", role: "Associate Professor, CIT & Qiskit Advocate", image: `${BASE_URL}assets/past/2022_manjula.jpg` },
			{ name: "Mr. Karthi Ganesh Durai", role: "Chief Quantum Architect, BosonQ Psi" },
			{ name: "Dr. Raghavendra V", role: "PhD Computational Chemistry, Quantum Researcher" },
			{ name: "Ms. V. Rohini", role: "IBM Certified Developer & Qiskit Advocate" },
		],
		insights: [
			{ tag: "37 Global Universities", text: "CIT was selected among 37 international host campuses for IBM Qiskit Fall Fest 2023." },
			{ tag: "Hands-on QML", text: "Live real-time execution of Quantum Machine Learning algorithms on IBM Quantum backends." },
			{ tag: "Official Badges", text: "All top leaderboard coders received official IBM Quantum digital credentials." },
		],
	},
	"2022": {
		year: "2022",
		title: "CIT Quantum Hackathon 2022",
		subtitle: "A two-week quantum journey featuring 22 international speakers and real IBM Quantum hardware execution.",
		dates: "October 06 – October 19, 2022",
		mode: "Global Online Hackathon & Talks",
		registrations: "200+ Hackers",
		speakersCount: "22 Global Speakers",
		projectsCount: "12 Submitted Quantum Projects",
		summary:
			"Keynote address delivered by Dr. L Venkata Subramaniam (IBM Quantum India Lead). Participants gained hands-on access to IBM Quantum hardware, running quantum circuits with zero noise mitigation errors.",
		heroImage: `${BASE_URL}assets/past/2022_poster.png`,
		gallery: [
			{
				url: `${BASE_URL}assets/past/2022_poster.png`,
				title: "Official Fall Fest 2022 Hackathon Poster",
				category: "Event Poster",
			},
			{
				url: `${BASE_URL}assets/past/2022_session.png`,
				title: "Day 1 Technical Keynote Session Poster",
				category: "Session Banner",
			},
			{
				url: `${BASE_URL}assets/past/2022_winner.png`,
				title: "Winning Project Poster: Quantum State Transfer",
				category: "Winner Spotlight",
			},
		],
		topics: [
			"State Vector Simulators",
			"Quantum Phase Estimation",
			"Variational Quantum Eigensolver (VQE)",
			"Quantum Error Mitigation",
			"Noise Models on Hardware",
			"Superconducting Qubits",
		],
		winners: [
			{
				rank: "1st Place",
				title: "Quantum State Transfer on Oriented Triangle",
				names: ["Boobalaragavan P", "S. Mohanraj", "Dr. R. Sundareswaran", "Dr. S. K. Subramanian"],
				project: "Implemented state transfer protocol across 3-qubit graph structures.",
				image: `${BASE_URL}assets/past/2022_winner.png`,
			},
			{
				rank: "2nd Place",
				title: "Quantum Walk on 4-Vertex Cycle Graph",
				names: ["Sohail Maidargi"],
				project: "Simulated continuous-time quantum walk algorithm on cycle graphs using Qiskit.",
			},
		],
		featuredSpeakers: [
			{ name: "Dr. L Venkata Subramaniam", role: "IBM Quantum India Lead & IBM Fellow", image: `${BASE_URL}assets/past/2022_venkata.jpg` },
			{ name: "Alain Chance", role: "Qiskit Advocate & Global Quantum Author", image: `${BASE_URL}assets/past/2022_alain.jpg` },
			{ name: "Dr. Shesha Raghunathan", role: "IBM Quantum Educator", image: `${BASE_URL}assets/past/2022_shesha.png` },
			{ name: "Ms. Soyoung Shin", role: "IBM Quantum Developer & Educator", image: `${BASE_URL}assets/past/2022_soyoung.jpg` },
			{ name: "Mr. Prajjwal Vijaywargiya", role: "Quantum Software Engineer", image: `${BASE_URL}assets/past/2022_prajjwal.jpg` },
			{ name: "Mr. Balaji Seetharaman", role: "Quantum Computing Researcher", image: `${BASE_URL}assets/past/2022_balaji.jpg` },
		],
		insights: [
			{ tag: "22 Global Speakers", text: "World-class keynotes from IBM Research India, USA, France, and Singapore." },
			{ tag: "Hardware Jobs", text: "Over 1,200 quantum circuits executed directly on IBM Quantum ibm_perth and ibm_nairobi." },
			{ tag: "1st Place Publication", text: "Winning project extended into an academic research paper on graph state transfer." },
		],
	},
	"2021": {
		year: "2021",
		title: "CIT Quantum Hackathon 2021",
		subtitle: "The pioneering inaugural event that started the Quantum Computing community at CIT.",
		dates: "October 11 – October 25, 2021",
		mode: "Virtual Hackathon & Workshops",
		registrations: "272 Participants",
		speakersCount: "8 Speakers",
		projectsCount: "12 Team Projects",
		summary:
			"The debut event of IBM Qiskit Fall Fest at CIT! 272 passionate students registered to learn quantum gates, circuit design, and Qiskit SDK, concluding with a 48-hour competitive hackathon.",
		heroImage: `${BASE_URL}assets/past/2021_poster_cit.png`,
		gallery: [
			{
				url: `${BASE_URL}assets/past/2021_poster_cit.png`,
				title: "Official CIT Quantum Hackathon 2021 Poster",
				category: "Official Poster",
			},
			{
				url: `${BASE_URL}assets/past/2021_main.png`,
				title: "Pioneer CIT Quantum Hackathon 2021 Event Graphic",
				category: "Event Graphic",
			},
			{
				url: `${BASE_URL}assets/past/2021_banner.png`,
				title: "Fall Fest Official Qiskit Header Banner",
				category: "Event Banner",
			},
			{
				url: `${BASE_URL}assets/past/2021_ceremony.jpg`,
				title: "Opening Ceremony & Keynote Slide Presentation",
				category: "Ceremony Slide",
			},
		],
		topics: [
			"Single & Multi-Qubit Gates",
			"Bloch Sphere Visualization",
			"Qiskit Terra Basics",
			"Quantum Teleportation",
			"Superdense Coding",
			"Quantum Optimization",
		],
		winners: [
			{
				rank: "1st Place",
				title: "Concrete Comprehensive Strength Prediction using Qiskit",
				names: ["C R Deepak Kumar"],
				project: "Applied VQE to predict material compressive strength properties.",
			},
			{
				rank: "2nd Place",
				title: "Mid-Day Meals Scheme Optimization",
				names: ["CIT Quantum Team B"],
				project: "Formulated combinatorial supply-chain logistics as a QAOA problem.",
			},
			{
				rank: "3rd Place",
				title: "Quantum Music Notes Generator",
				names: ["CIT Quantum Team C"],
				project: "Used quantum superposition measurements to compose algorithmic harmony.",
			},
		],
		featuredSpeakers: [
			{ name: "Chandia", role: "Qiskit Advocate & Keynote Speaker", image: `${BASE_URL}assets/past/2021_speaker1.png` },
			{ name: "Vishal", role: "Quantum Algorithms Mentor", image: `${BASE_URL}assets/past/2021_speaker2.png` },
			{ name: "Dr. S. Manjula Gandhi", role: "CIT Quantum Club Convener", image: `${BASE_URL}assets/past/2022_manjula.jpg` },
		],
		insights: [
			{ tag: "272 Hackers", text: "Massive turnout for CIT's first-ever quantum hackathon edition." },
			{ tag: "Quantum Music!", text: "3rd place team built a music generator powered by quantum superposition." },
			{ tag: "Birth of CIT Quantum", text: "Sparked the formation of the official CIT Quantum Student Chapter." },
		],
	},
};

export default function PastEvents() {
	const [activeYear, setActiveYear] = useState<YearEdition>("2023");
	const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);

	const data = EDITIONS_DATA[activeYear];

	return (
		<div className="w-full max-w-6xl mx-auto py-2 sm:py-6 px-2 sm:px-6 space-y-10 sm:space-y-14 select-text">
			{/* Top Year Switcher - Clean Glass Pill Bar */}
			<div className="flex flex-col items-center justify-center space-y-3">
				<span className="text-xs sm:text-sm font-bold text-[#31135e]/70 tracking-widest uppercase">
					Previous Event Archives
				</span>

				<div className="flex items-center justify-center p-1.5 rounded-full bg-white/30 backdrop-blur-2xl border border-white/50 shadow-sm gap-2">
					{(["2023", "2022", "2021"] as YearEdition[]).map((year) => {
						const isActive = activeYear === year;
						return (
							<button
								key={year}
								type="button"
								onClick={() => setActiveYear(year)}
								className={`px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
									isActive
										? "bg-[#31135e] text-white shadow-md scale-105"
										: "text-[#31135e] hover:bg-white/40"
								}`}
							>
								{year} Edition
							</button>
						);
					})}
				</div>
			</div>

			{/* Main Dynamic View Stream */}
			<AnimatePresence mode="wait">
				<motion.div
					key={activeYear}
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -15 }}
					transition={{ duration: 0.4 }}
					className="space-y-12 sm:space-y-16"
				>
					{/* Open Hero Canvas */}
					<div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 py-2">
						{/* Left: Dynamic Content Stream */}
						<div className="w-full md:w-1/2 space-y-5 text-left">
							<motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31135e]/10 border border-[#31135e]/20 text-[#31135e] text-xs font-semibold"
							>
								<Calendar className="w-3.5 h-3.5" />
								<span>{data.dates}</span>
							</motion.div>

							<h2 className="text-3xl sm:text-5xl font-extrabold text-[#31135e] tracking-tight leading-[1.15]">
								{data.title}
							</h2>

							<p className="text-base sm:text-lg text-[#31135e]/90 leading-relaxed font-semibold">
								{data.subtitle}
							</p>

							<p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl">
								{data.summary}
							</p>

							{/* Dynamic Metric Chips */}
							<div className="pt-3 flex flex-wrap items-center gap-3">
								<motion.div
									whileHover={{ scale: 1.05 }}
									className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#31135e] text-xs font-bold shadow-2xs"
								>
									{data.registrations}
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.05 }}
									className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#31135e] text-xs font-bold shadow-2xs"
								>
									{data.speakersCount}
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.05 }}
									className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#31135e] text-xs font-bold shadow-2xs"
								>
									{data.projectsCount}
								</motion.div>
							</div>
						</div>

						{/* Right: Hero Media Display */}
						<div className="w-full md:w-1/2 flex items-center justify-center">
							<motion.div
								whileHover={{ scale: 1.02 }}
								onClick={() =>
									setActiveLightboxImage({
										url: data.heroImage,
										title: `${data.title} Official Poster`,
										category: "Hero Banner",
									})
								}
								className="relative w-full max-h-[380px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-white/80"
							>
								<img
									src={data.heroImage}
									alt={data.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#31135e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
									<span className="text-white text-xs font-bold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
										<ZoomIn className="w-4 h-4" />
										Inspect Poster High-Res
									</span>
								</div>
							</motion.div>
						</div>
					</div>

					{/* Soft Divider */}
					<div className="w-full h-px bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

					{/* Insights Section */}
					<div className="space-y-6 text-left">
						<h3 className="text-2xl sm:text-3xl font-extrabold text-[#31135e] tracking-tight">
							Insights
						</h3>

						{/* Flowing Vertical Timeline Line */}
						<div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#31135e] before:via-purple-400 before:to-transparent">
							{data.insights.map((insight, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -15 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.15 }}
									className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
								>
									{/* Dot Marker */}
									<div className="absolute -left-6 sm:-left-10 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#31135e] text-white text-xs font-black flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform">
										0{idx + 1}
									</div>

									<div className="space-y-1">
										<span className="inline-block px-3 py-0.5 rounded-full bg-purple-100/90 text-purple-900 text-[11px] font-bold uppercase tracking-wider">
											{insight.tag}
										</span>
										<p className="text-base sm:text-lg font-bold text-[#31135e] group-hover:text-purple-900 transition-colors">
											{insight.text}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Soft Divider */}
					<div className="w-full h-px bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

					{/* Media & Event Archives */}
					<div className="space-y-6 text-left">
						<div className="flex items-center justify-between">
							<h3 className="text-2xl sm:text-3xl font-extrabold text-[#31135e] tracking-tight">
								Media & Event Archives
							</h3>
							<span className="text-xs font-bold text-[#31135e]/60 hidden sm:block">
								Click any item to expand
							</span>
						</div>

						{/* Gallery Slider */}
						<div className="flex items-center gap-5 overflow-x-auto no-scrollbar py-3 px-1">
							{data.gallery.map((item, idx) => (
								<motion.div
									key={idx}
									whileHover={{ y: -8, scale: 1.03 }}
									onClick={() => setActiveLightboxImage(item)}
									className="min-w-[280px] sm:min-w-[340px] h-[220px] rounded-3xl overflow-hidden relative cursor-pointer shadow-lg border border-white/80 shrink-0 group"
								>
									<img
										src={item.url}
										alt={item.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#31135e]/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
										<span className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-300 bg-black/50 px-3 py-1 rounded-full w-fit backdrop-blur-md mb-1.5">
											{item.category}
										</span>
										<h4 className="text-sm sm:text-base font-bold text-white leading-snug">
											{item.title}
										</h4>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Soft Divider */}
					<div className="w-full h-px bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

					{/* Winner Podium & Innovations */}
					<div className="space-y-6 text-left">
						<h3 className="text-2xl sm:text-3xl font-extrabold text-[#31135e] tracking-tight">
							Winner Podium & Innovations
						</h3>

						<div className="divide-y divide-[#31135e]/15">
							{data.winners.map((winner, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: idx * 0.1 }}
									className="py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-white/20 px-4 rounded-2xl transition-colors"
								>
									<div className="space-y-2 flex-1">
										<div className="flex items-center gap-3">
											<span className="text-sm font-extrabold px-3 py-1 rounded-full bg-[#31135e] text-white">
												{winner.rank}
											</span>
											<h4 className="text-lg sm:text-xl font-bold text-[#31135e] group-hover:text-purple-900 transition-colors">
												{winner.title}
											</h4>
										</div>

										{winner.project && (
											<p className="text-xs sm:text-sm text-gray-700 italic font-medium">
												"{winner.project}"
											</p>
										)}

										<div className="flex flex-wrap items-center gap-2 pt-1">
											{winner.names.map((name, nIdx) => (
												<span
													key={nIdx}
													className="px-3 py-1 rounded-full bg-[#31135e]/10 text-[#31135e] text-xs font-bold"
												>
													{name}
												</span>
											))}
										</div>
									</div>

									{winner.image && (
										<motion.div
											whileHover={{ scale: 1.05 }}
											onClick={() =>
												setActiveLightboxImage({
													url: winner.image!,
													title: winner.title,
													category: "Winner Submission Poster",
												})
											}
											className="w-full md:w-[180px] h-[110px] rounded-2xl overflow-hidden cursor-pointer shadow-md border border-white/80 shrink-0 group/wimg relative"
										>
											<img
												src={winner.image}
												alt={winner.title}
												className="w-full h-full object-cover group-hover/wimg:scale-108 transition-transform"
											/>
											<div className="absolute inset-0 bg-black/40 opacity-0 group-hover/wimg:opacity-100 flex items-center justify-center transition-opacity">
												<ZoomIn className="w-5 h-5 text-white" />
											</div>
										</motion.div>
									)}
								</motion.div>
							))}
						</div>
					</div>

					{/* Soft Divider */}
					<div className="w-full h-px bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

					{/* Keynote Speakers & Mentors (Circular Interactive Carousel) */}
					<div className="space-y-4 text-left">
						<h3 className="text-2xl sm:text-3xl font-extrabold text-[#31135e] tracking-tight">
							Keynote Speakers & Mentors
						</h3>

						<SpeakerCarousel year={activeYear} />
					</div>

					{/* Soft Divider */}
					<div className="w-full h-px bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

					{/* Technical Topics Covered */}
					<div className="space-y-4 text-left py-2">
						<h3 className="text-xl sm:text-2xl font-extrabold text-[#31135e] tracking-tight">
							Technical Topics Covered in {data.year}
						</h3>

						<div className="flex flex-wrap gap-2.5">
							{data.topics.map((topic, tIdx) => (
								<motion.span
									key={tIdx}
									whileHover={{ scale: 1.06 }}
									className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-purple-200/80 text-[#31135e] text-xs sm:text-sm font-bold shadow-2xs cursor-default"
								>
									{topic}
								</motion.span>
							))}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{activeLightboxImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveLightboxImage(null)}
						className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-4xl max-h-[90vh] bg-white/10 border border-white/30 rounded-3xl p-3 sm:p-4 flex flex-col items-center gap-3 overflow-hidden shadow-2xl"
						>
							<button
								type="button"
								onClick={() => setActiveLightboxImage(null)}
								className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
							>
								<X className="w-5 h-5" />
							</button>

							<img
								src={activeLightboxImage.url}
								alt={activeLightboxImage.title}
								className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-md"
							/>

							<div className="text-center px-4 py-2">
								<span className="text-xs font-bold uppercase tracking-widest text-yellow-300">
									{activeLightboxImage.category}
								</span>
								<h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
									{activeLightboxImage.title}
								</h3>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
