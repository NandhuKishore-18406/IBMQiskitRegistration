import { X } from "lucide-react";
import { motion } from "motion/react";

interface AboutProgramProps {
	onClose?: () => void;
}

const FAST_EASE = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;
const LOGO4_URL = `${import.meta.env.BASE_URL}assets/qiskit.png`;

export default function AboutProgram({ onClose }: AboutProgramProps) {
	return (
		<section className="w-full py-4 sm:py-8 px-2 sm:px-4 lg:px-6 select-text relative bg-transparent flex flex-col items-center text-center space-y-10 sm:space-y-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
			{/* Top Bar Close Button (if modal/sheet mode) */}
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
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={FAST_EASE}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Institution
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					<strong className="font-black text-[#31135e]">Coimbatore Institute of Technology (CIT)</strong>, established in 1956 by the V. Rangaswamy Naidu Educational Trust, is an autonomous Government-aided engineering institution affiliated to Anna University, Chennai. Recognized globally for academic excellence, NAAC & NBA accreditation, and pioneering research, Coimbatore Institute of Technology stands as a premier center of technical education and innovation in India.
				</p>
			</motion.div>

			{/* Subtle Section Divider */}
			<div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

			{/* Section 2: About the Department */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={FAST_EASE}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Department
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					The <strong className="font-black text-[#31135e]">Department of Computing</strong> at Coimbatore Institute of Technology is a premier academic department offering Integrated programmes in Software Systems, Data Science, Decision and Computing Science, and Artificial Intelligence and Machine Learning. Equipped with state-of-the-art computational infrastructure, deep industry collaborations with global tech leaders like IBM, and a legacy of research excellence, the department empowers students to pioneer innovations at the crossroads of artificial intelligence and quantum computing.
				</p>
			</motion.div>

			{/* Subtle Section Divider */}
			<div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

			{/* Section 3: About IBM Quantum */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={FAST_EASE}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<div className="flex items-center justify-center gap-3 sm:gap-4 mb-1">
					<img
						src={LOGO2_URL}
						alt="IBM Quantum"
						className="h-9 sm:h-12 w-auto object-contain drop-shadow-sm"
					/>
					<div className="h-6 w-[1px] bg-[#31135e]/30" />
					<img
						src={LOGO4_URL}
						alt="Qiskit"
						className="h-8 sm:h-10 w-auto object-contain drop-shadow-sm"
					/>
				</div>

				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About IBM Quantum
				</h3>

				<div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					<p>
						<strong className="font-black text-[#31135e]">IBM Quantum</strong> is an industry-first initiative by IBM dedicated to developing full-stack quantum computing systems and making them universally accessible to researchers, developers, and enterprises worldwide. In 2016, IBM placed the world's first quantum computer on the cloud, transforming quantum physics from a laboratory exploration into a global developer ecosystem.
					</p>

					<p>
						At the core of IBM Quantum is <strong className="font-black text-[#31135e]">Qiskit</strong>, the premier open-source software development kit (SDK) used by hundreds of thousands of users to design quantum algorithms, optimize circuits, and execute programs on real quantum hardware. Powered by breakthrough superconducting processors like <strong className="font-black text-[#31135e]">Heron</strong> with 5x gate error reductions, IBM Quantum has entered the era of <strong className="font-black text-[#31135e]">Quantum Utility</strong>—running quantum circuits beyond the capabilities of exact classical brute-force simulation.
					</p>

					<p>
						Through the <strong className="font-black text-[#31135e]">IBM Quantum Network</strong>, IBM collaborates with premier universities, global research labs, and Fortune 500 enterprises to explore practical quantum applications across chemistry, material science, optimization, and computer science.
					</p>
				</div>
			</motion.div>

			{/* Subtle Section Divider */}
			<div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#31135e]/20 to-transparent" />

			{/* Section 4: About the Program */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={FAST_EASE}
				className="w-full flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
			>
				<h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#31135e] tracking-tight text-center">
					About the Program
				</h3>

				<p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#31135e]/90 leading-relaxed text-left sm:text-justify w-full">
					The <strong className="font-black text-[#31135e]">CIT - IBM Qiskit Fall Fest 2026</strong> (4th Edition) is a 100% online global quantum event running from <strong className="font-black text-[#31135e]">November 20 to November 30, 2026</strong>. Hosted by the Department of Computing, Coimbatore Institute of Technology in collaboration with <strong className="font-black text-[#31135e]">IBM Quantum</strong> and the <strong className="font-black text-[#31135e]">Institution's Innovation Council</strong>, the event features expert quantum lectures, hands-on algorithm coding on real IBM Quantum hardware, team hackathon challenges, and technical demonstrations.
				</p>
			</motion.div>
		</section>
	);
}
