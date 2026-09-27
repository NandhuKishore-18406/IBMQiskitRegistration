import {
	Award,
	Code2,
	Cpu,
	GraduationCap,
	X,
} from "lucide-react";
import { motion } from "motion/react";

interface AboutProgramProps {
	onClose?: () => void;
}

const PROGRAM_ITEMS = [
	{
		icon: Cpu,
		title: "Quantum Fundamentals",
		desc: "Understand qubits, superposition, entanglement & quantum hardware architectures.",
	},
	{
		icon: Code2,
		title: "Hands-on Qiskit SDK",
		desc: "Build & simulate quantum circuits in Python with Qiskit Runtime primitives.",
	},
	{
		icon: GraduationCap,
		title: "IBM Advocate Mentorship",
		desc: "Live keynotes, interactive Q&A & guidance from certified IBM Qiskit experts.",
	},
	{
		icon: Award,
		title: "Certificates & Badges",
		desc: "Earn official completion certificates & verifiable IBM Quantum digital credentials.",
	},
];

const SMOOTH_EASE = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export default function AboutProgram({ onClose }: AboutProgramProps) {
	return (
		<section className="w-full h-full overflow-y-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-3 sm:p-5 text-left select-text relative bg-transparent flex flex-col justify-between space-y-6">
			{/* Top Bar Close Button (if present) */}
			{onClose && (
				<div className="flex items-center justify-end w-full">
					<motion.button
						type="button"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.9 }}
						transition={SMOOTH_EASE}
						onClick={onClose}
						className="p-2 rounded-full bg-[#31135e]/15 text-[#31135e] hover:bg-[#31135e] hover:text-white transition-colors cursor-pointer z-20 shadow-2xs"
						aria-label="Close About Section"
					>
						<X className="w-4 h-4" />
					</motion.button>
				</div>
			)}

			{/* Main Title & Sliding Summary */}
			<div className="space-y-4">
				<motion.h3
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={SMOOTH_EASE}
					className="text-3xl sm:text-4xl md:text-5xl font-black text-[#31135e] tracking-tight leading-tight"
				>
					About the Program
				</motion.h3>

				{/* Smooth Sliding Summary Paragraphs */}
				<div className="space-y-4 text-lg sm:text-xl md:text-2xl font-extrabold text-[#31135e]/95 leading-relaxed tracking-tight">
					<motion.p
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ...SMOOTH_EASE, delay: 0.1 }}
					>
						The <strong className="font-black text-[#31135e]">Qiskit Fall Fest</strong> is a global quantum computing initiative supported by <strong className="font-black text-[#31135e]">IBM Quantum</strong> and hosted for the 4th year by the <strong className="font-black text-[#31135e]">Department of Computing, CIT</strong> in collaboration with <strong className="font-black text-[#31135e]">IIC</strong>. It empowers students and researchers to master quantum software engineering with IBM's open-source Qiskit SDK.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ...SMOOTH_EASE, delay: 0.2 }}
					>
						Celebrating ten years of cloud quantum access, this 100% online event features hands-on workshops, expert mentorship from certified IBM Advocates, and direct algorithm execution on utility-scale IBM Quantum hardware.
					</motion.p>
				</div>
			</div>

			{/* Program Points Moved to Bottom Right with Smooth Sliding Animation */}
			<div className="mt-auto pt-6 flex flex-col items-end text-right space-y-4 ml-auto max-w-2xl w-full">
				{PROGRAM_ITEMS.map((item, idx) => {
					const Icon = item.icon;
					return (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ ...SMOOTH_EASE, delay: 0.25 + idx * 0.08 }}
							whileHover={{ x: -6 }}
							className="flex items-start justify-end gap-3.5 text-right w-full cursor-default"
						>
							<div className="space-y-1 flex-1 text-right">
								<h5 className="text-base sm:text-lg font-black text-[#31135e] tracking-tight">
									{item.title}
								</h5>
								<p className="text-sm sm:text-base text-[#31135e]/90 font-semibold leading-relaxed">
									{item.desc}
								</p>
							</div>

							<div className="p-2.5 sm:p-3 rounded-xl bg-[#31135e] text-white shrink-0 shadow-xs mt-0.5">
								<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
