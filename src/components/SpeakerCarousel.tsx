import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

export type YearEdition = "2023" | "2022" | "2021";

export interface SpeakerData {
	id: string;
	name: string;
	role: string;
	affiliation: string;
	image: string;
}

export const SPEAKERS_BY_YEAR: Record<YearEdition, SpeakerData[]> = {
	"2023": [
		{
			id: "manjula-2023",
			name: "Dr. S. Manjula Gandhi",
			role: "CIT Quantum Convener",
			affiliation: "Associate Professor, CIT & Qiskit Advocate",
			image: `${import.meta.env.BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
		{
			id: "karthi-2023",
			name: "Mr. Karthi Ganesh Durai",
			role: "Chief Quantum Architect",
			affiliation: "BosonQ Psi",
			image: `${import.meta.env.BASE_URL}assets/speakers/karthiganeshdurai.jpg`,
		},
		{
			id: "raghavendra-2023",
			name: "Dr. Raghavendra V",
			role: "Quantum Chemistry Researcher",
			affiliation: "PhD Computational Chemistry",
			image: `${import.meta.env.BASE_URL}assets/speakers/ragavendrav.jpg`,
		},
		{
			id: "rohini-2023",
			name: "Ms. V. Rohini",
			role: "Qiskit Advocate",
			affiliation: "IBM Certified Associate Developer",
			image: `${import.meta.env.BASE_URL}assets/speakers/rohiniv.jpg`,
		},
	],
	"2022": [
		{
			id: "venkata-2022",
			name: "Dr. L Venkata Subramaniam",
			role: "IBM Quantum India Lead",
			affiliation: "IBM Fellow & IBM Research India Lead",
			image: `${import.meta.env.BASE_URL}assets/speakers/lvenkatasubramaniyam.jpg`,
		},
		{
			id: "alain-2022",
			name: "Alain Chance",
			role: "Qiskit Advocate & Author",
			affiliation: "Global Quantum Computing Author",
			image: `${import.meta.env.BASE_URL}assets/speakers/alainchance.jpg`,
		},
		{
			id: "shesha-2022",
			name: "Dr. Shesha Raghunathan",
			role: "IBM Quantum Educator",
			affiliation: "IBM Research & Quantum Education",
			image: `${import.meta.env.BASE_URL}assets/speakers/SheshaRaghunathan.jpg`,
		},
		{
			id: "prajjwal-2022",
			name: "Mr. Prajjwal Vijaywargiya",
			role: "Quantum Software Engineer",
			affiliation: "IBM Qiskit Developer",
			image: `${import.meta.env.BASE_URL}assets/speakers/prajjwal.jpg`,
		},
		{
			id: "balaji-2022",
			name: "Mr. Balaji Seetharaman",
			role: "Quantum Computing Researcher",
			affiliation: "Qiskit Advocate",
			image: `${import.meta.env.BASE_URL}assets/speakers/balajiseetaraman.jpg`,
		},
		{
			id: "manjula-2022",
			name: "Dr. S. Manjula Gandhi",
			role: "CIT Quantum Convener",
			affiliation: "Associate Professor, CIT",
			image: `${import.meta.env.BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
	],
	"2021": [
		{
			id: "chandia-2021",
			name: "Chandia",
			role: "Qiskit Advocate",
			affiliation: "Keynote Speaker (Fall Fest '21)",
			image: `${import.meta.env.BASE_URL}assets/speakers/chandia.jpg`,
		},
		{
			id: "vishal-2021",
			name: "Vishal",
			role: "Quantum Algorithms Mentor",
			affiliation: "Technical Workshop Lead",
			image: `${import.meta.env.BASE_URL}assets/speakers/vishal.jpg`,
		},
		{
			id: "manjula-2021",
			name: "Dr. S. Manjula Gandhi",
			role: "CIT Quantum Convener",
			affiliation: "Associate Professor, CIT & Qiskit Advocate",
			image: `${import.meta.env.BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
	],
};

interface SpeakerCarouselProps {
	year: YearEdition;
}

export default function SpeakerCarousel({ year }: SpeakerCarouselProps) {
	const speakers = SPEAKERS_BY_YEAR[year] || SPEAKERS_BY_YEAR["2023"];
	const [activeIdx, setActiveIdx] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	// Reset index when year changes
	useEffect(() => {
		setActiveIdx(0);
	}, [year]);

	// Auto-rotate featured active speaker every 3.5 seconds
	useEffect(() => {
		if (speakers.length <= 1) return;
		const interval = setInterval(() => {
			setActiveIdx((prev) => (prev + 1) % speakers.length);
		}, 3500);
		return () => clearInterval(interval);
	}, [speakers.length]);

	// Scroll active avatar into view smoothly
	useEffect(() => {
		if (scrollRef.current) {
			const container = scrollRef.current;
			const targetChild = container.children[activeIdx] as HTMLElement;
			if (targetChild) {
				const scrollLeft =
					targetChild.offsetLeft - container.offsetWidth / 2 + targetChild.offsetWidth / 2;
				container.scrollTo({ left: scrollLeft, behavior: "smooth" });
			}
		}
	}, [activeIdx, year]);

	const currentSpeaker = speakers[activeIdx] || speakers[0];

	return (
		<div className="w-full flex flex-col items-center justify-center space-y-6 py-4">
			{/* Top Header Label */}
			<div className="text-center space-y-1">
				<span className="text-xs font-bold tracking-widest uppercase text-[#31135e]/70">
					{year} Edition Speakers
				</span>
			</div>

			{/* Circular Avatar Carousel Reel */}
			<div
				ref={scrollRef}
				className="w-full flex items-center justify-center gap-2.5 sm:gap-6 overflow-x-auto no-scrollbar py-2 sm:py-4 px-2 sm:px-4 scroll-smooth touch-manipulation"
			>
				{speakers.map((speaker, idx) => {
					const isActive = idx === activeIdx;
					return (
						<motion.div
							key={speaker.id}
							whileHover={{ scale: 1.08 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setActiveIdx(idx)}
							className="flex flex-col items-center shrink-0 cursor-pointer group touch-manipulation"
						>
							{/* Borderless Circular Avatar */}
							<div
								className={`w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden transition-all duration-300 ${
									isActive
										? "scale-110 shadow-lg"
										: "opacity-60 group-hover:opacity-100 scale-95"
								}`}
							>
								<img
									src={speaker.image}
									alt={speaker.name}
									className="w-full h-full object-cover rounded-full"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>

			{/* Featured Active Speaker Spotlight Text */}
			<AnimatePresence mode="wait">
				{currentSpeaker && (
					<motion.div
						key={currentSpeaker.id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="px-6 py-3 text-center max-w-md w-full space-y-1"
					>
						<h4 className="text-base sm:text-lg font-extrabold text-[#31135e] tracking-tight">
							{currentSpeaker.name}
						</h4>
						<p className="text-xs sm:text-sm font-bold text-purple-900">
							{currentSpeaker.role}
						</p>
						<p className="text-[11px] sm:text-xs text-gray-600 font-medium">
							{currentSpeaker.affiliation}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
