import {
	Award,
	Code2,
	Cpu,
	Globe,
	GraduationCap,
	X,
} from "lucide-react";
import { HeroView } from "./Navbar";

interface AboutProgramProps {
	onViewChange?: (view: HeroView) => void;
	onClose?: () => void;
}

const HIGHLIGHT_CARDS = [
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
		desc: "Interactive keynotes & live guidance from certified IBM Qiskit experts & faculty.",
	},
	{
		icon: Award,
		title: "Certificates & Badges",
		desc: "Earn official completion certificates & digital IBM Quantum credentials.",
	},
];

export default function AboutProgram({ onClose }: AboutProgramProps) {
	return (
		<section className="w-full h-full overflow-y-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-1 sm:p-2 space-y-3 sm:space-y-4 text-left select-text relative bg-transparent">
			{/* Close Button if rendered inside right panel */}
			{onClose && (
				<button
					type="button"
					onClick={onClose}
					className="absolute top-2 right-2 p-1.5 rounded-full bg-[#31135e]/15 text-[#31135e] hover:bg-[#31135e] hover:text-white transition-colors cursor-pointer z-20 shadow-2xs"
					aria-label="Close About Section"
				>
					<X className="w-4 h-4" />
				</button>
			)}

			{/* Section Title */}
			<div className="flex flex-col items-start space-y-1 pr-6">
				<h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#31135e] tracking-tight leading-snug">
					CIT - IBM Qiskit Fall Fest 2026
				</h3>

				<p className="text-xs sm:text-sm text-[#31135e]/90 font-semibold leading-relaxed">
					An intensive online quantum computing initiative hosted by the Department of Computing, CIT, in collaboration with IIC and IBM Qiskit.
				</p>
			</div>

			{/* Format Indicator (Large & Transparent) */}
			<div className="flex items-center gap-3 py-1 bg-transparent">
				<div className="flex items-center gap-3 bg-transparent p-0">
					<div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-800 shrink-0">
						<Globe className="w-6 h-6 sm:w-7 sm:h-7" />
					</div>
					<div>
						<div className="text-xs font-black text-[#31135e]/70 uppercase tracking-wider">Format</div>
						<div className="text-lg sm:text-xl md:text-2xl font-black text-[#31135e]">100% Online</div>
					</div>
				</div>
			</div>

			{/* Core Highlights Cards (Clean, transparent, no outline or hover effects) */}
			<div className="flex flex-col gap-3 sm:gap-4 pt-2 w-full">
				{HIGHLIGHT_CARDS.map((card, idx) => {
					const Icon = card.icon;
					return (
						<div
							key={idx}
							className="p-2 sm:p-3 bg-transparent flex items-start gap-4"
						>
							<div className="p-2.5 sm:p-3 rounded-2xl bg-[#31135e] text-white shrink-0 shadow-xs mt-0.5">
								<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
							</div>
							<div className="space-y-1">
								<h4 className="text-base sm:text-lg md:text-xl font-black text-[#31135e] tracking-tight">
									{card.title}
								</h4>
								<p className="text-xs sm:text-sm md:text-base text-[#31135e]/90 font-medium leading-relaxed">
									{card.desc}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
