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

const SMOOTH_EASE = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export default function AboutProgram({ onClose }: AboutProgramProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleAccordion = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

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
						The <strong className="font-black text-[#31135e]">Qiskit Fall Fest</strong> is a global quantum computing initiative supported by <strong className="font-black text-[#31135e]">IBM Quantum</strong> and hosted for the 4th year by the <strong className="font-black text-[#31135e]">Department of Computing, CIT</strong> in collaboration with <strong className="font-black text-[#31135e]">IBM Quantum</strong> and <strong className="font-black text-[#31135e]">IIC</strong>. It empowers students and researchers to master quantum software engineering with IBM's open-source Qiskit SDK.
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

			{/* Program Points Accordion: Left aligned on mobile, right aligned on desktop */}
			<div className="mt-auto pt-6 flex flex-col items-start sm:items-end text-left sm:text-right space-y-3 w-full sm:max-w-2xl sm:ml-auto">
				{PROGRAM_ITEMS.map((item, idx) => {
					const Icon = item.icon;
					const isOpen = openIndex === idx;
					return (
						<motion.div
							layout
							key={idx}
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ ...SMOOTH_EASE, delay: 0.25 + idx * 0.08 }}
							className="w-full bg-transparent border-b border-[#31135e]/15 overflow-hidden transition-colors"
						>
							{/* Accordion Header Button */}
							<button
								type="button"
								onClick={() => toggleAccordion(idx)}
								className="w-full py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left sm:text-right cursor-pointer hover:opacity-85 transition-opacity"
							>
								<div className="flex items-center justify-start sm:justify-end gap-3 text-left sm:text-right flex-1">
									<div className="p-2 sm:p-2.5 rounded-xl bg-[#31135e] text-white shrink-0 shadow-2xs order-first sm:order-last">
										<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
									</div>
									<h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#31135e] tracking-tight text-left sm:text-right">
										{item.title}
									</h4>
								</div>

								<motion.div
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
									className="p-1 rounded-full text-[#31135e]/70 shrink-0 order-last sm:order-first"
								>
									<ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
								</motion.div>
							</button>

							{/* Accordion Content Body */}
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										key="content"
										initial={{ height: 0, opacity: 0, y: -4 }}
										animate={{ height: "auto", opacity: 1, y: 0 }}
										exit={{ height: 0, opacity: 0, y: -4 }}
										transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
										className="overflow-hidden"
									>
										<div className="pb-4 pt-1 text-left sm:text-right">
											<p className="text-base sm:text-lg text-[#31135e]/90 font-semibold leading-relaxed text-left sm:text-right">
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
