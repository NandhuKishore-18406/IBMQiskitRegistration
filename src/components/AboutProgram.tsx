import { X } from "lucide-react";
import { motion } from "motion/react";

interface AboutProgramProps {
	onClose?: () => void;
}

const FAST_EASE = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function AboutProgram({ onClose }: AboutProgramProps) {
	return (
		<section className="w-full py-4 sm:py-8 px-2 sm:px-4 lg:px-6 select-text relative bg-transparent flex flex-col items-center text-center space-y-10 sm:space-y-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
			{/* Top Bar Close Button (if present) */}
			{onClose && (
				<div className="flex items-center justify-end w-full">
					<button
						type="button"
						onClick={onClose}
						className="p-2 rounded-full bg-[#31135e]/15 text-[#31135e] hover:bg-[#31135e] hover:text-white transition-colors cursor-pointer z-20 shadow-2xs"
						aria-label="Close About Section"
					>
						<X className="w-4 h-4" />
					</button>
				</div>
			)}

			{/* Section 1: About the Institution */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={FAST_EASE}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Institution
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					<strong className="font-black text-[#31135e]">Coimbatore Institute of Technology (CIT)</strong>, established in 1956 by the V. Rangaswamy Naidu Educational Trust, is an autonomous Government-aided engineering institution affiliated to Anna University, Chennai. Recognized globally for academic excellence, NAAC & NBA accreditation, and pioneering research, CIT stands as a premier center of technical education and innovation in India.
				</p>
			</motion.div>

			{/* Subtle Section Divider */}
			<div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

			{/* Section 2: About the Department */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ...FAST_EASE, delay: 0.1 }}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Department
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					The <strong className="font-black text-[#31135e]">Department of Computing</strong> at CIT is a premier academic department offering specialized programs in Software Systems, Data Science, and Artificial Intelligence. Equipped with state-of-the-art computational infrastructure, deep industry collaborations with global tech leaders like IBM, and a legacy of research excellence, the department empowers students to build next-generation software technologies.
				</p>
			</motion.div>

			{/* Subtle Section Divider */}
			<div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

			{/* Section 3: About the Program */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ...FAST_EASE, delay: 0.2 }}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Program
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					The <strong className="font-black text-[#31135e]">CIT - IBM Qiskit Fall Fest 2026</strong> (4th Edition) is a 100% online global quantum event running from <strong className="font-black text-[#31135e]">November 20 to November 30, 2026</strong>. Hosted by the Department of Computing, CIT in collaboration with <strong className="font-black text-[#31135e]">IBM Quantum</strong> and <strong className="font-black text-[#31135e]">IIC</strong>, the event features expert quantum lectures, hands-on algorithm coding on real IBM Quantum hardware, team hackathon challenges, and certified IBM Advocate mentorship.
				</p>
			</motion.div>
		</section>
	);
}
