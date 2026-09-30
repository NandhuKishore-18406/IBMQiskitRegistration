import {
	Award,
	ChevronDown,
	Code2,
	Cpu,
	GraduationCap,
	X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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

const FAST_EASE = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function AboutProgram({ onClose }: AboutProgramProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleAccordion = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section className="w-full h-full overflow-y-auto custom-scrollbar p-3 sm:p-6 select-text relative bg-transparent flex flex-col items-center justify-between space-y-8 max-w-6xl mx-auto">
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

			{/* Main Title & Justified Summary */}
			<div className="space-y-4 w-full text-center">
				<motion.h3
					initial={{ opacity: 0, y: -15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={FAST_EASE}
					className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#31135e] tracking-tight leading-tight text-center"
				>
					About the Program
				</motion.h3>

				{/* Wider & Justified Summary Paragraphs */}
				<div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#31135e]/95 leading-relaxed text-justify max-w-5xl mx-auto">
					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...FAST_EASE, delay: 0.05 }}
					>
						The <strong className="font-bold text-[#31135e]">Qiskit Fall Fest</strong> is a global quantum computing initiative supported by <strong className="font-bold text-[#31135e]">IBM Quantum</strong> and hosted for the 4th year by the <strong className="font-bold text-[#31135e]">Department of Computing, CIT</strong> in collaboration with <strong className="font-bold text-[#31135e]">IBM Quantum</strong> and <strong className="font-bold text-[#31135e]">IIC</strong>. It empowers students and researchers to master quantum software engineering with IBM's open-source Qiskit SDK.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...FAST_EASE, delay: 0.1 }}
					>
						Celebrating ten years of cloud quantum access, this 100% online event features hands-on workshops, expert mentorship from certified IBM Advocates, and direct algorithm execution on utility-scale IBM Quantum hardware.
					</motion.p>
				</div>
			</div>

			{/* Wider Accordion Section */}
			<div className="mt-auto pt-4 flex flex-col items-center space-y-2.5 w-full max-w-5xl mx-auto">
				{PROGRAM_ITEMS.map((item, idx) => {
					const Icon = item.icon;
					const isOpen = openIndex === idx;
					return (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ...FAST_EASE, delay: 0.12 + idx * 0.05 }}
							className="w-full bg-transparent border-b border-[#31135e]/20 px-2 sm:px-4 overflow-hidden transition-colors"
						>
							{/* Accordion Header Button */}
							<button
								type="button"
								onClick={() => toggleAccordion(idx)}
								className="w-full py-3.5 flex items-center justify-between gap-3 cursor-pointer hover:opacity-85 transition-opacity"
							>
								<div className="flex items-center justify-start gap-3 flex-1">
									<div className="p-1.5 sm:p-2 rounded-xl bg-[#31135e] text-white shrink-0 shadow-2xs">
										<Icon className="w-4 h-4 sm:w-5 sm:h-5" />
									</div>
									<h4 className="text-base sm:text-lg md:text-xl font-bold text-[#31135e] tracking-tight text-left">
										{item.title}
									</h4>
								</div>

								<motion.div
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={FAST_EASE}
									className="p-1 rounded-full text-[#31135e]/70 shrink-0"
								>
									<ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
								</motion.div>
							</button>

							{/* Accordion Content Body (Justified Text) */}
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										key="content"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={FAST_EASE}
										className="overflow-hidden"
									>
										<div className="pb-3.5 pt-0.5">
											<p className="text-xs sm:text-sm md:text-base text-[#31135e]/90 font-normal leading-relaxed text-justify max-w-4xl">
												{item.desc}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
