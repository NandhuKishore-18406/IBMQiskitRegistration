import { Sparkles } from "lucide-react";
import TallyEmbed from "./TallyEmbed";

export default function Registration() {
	return (
		<div className="w-full flex flex-col gap-6 py-2 px-1 text-left max-w-6xl mx-auto">
			{/* Header */}
			<div className="flex flex-col items-center text-center space-y-3">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#31135e]/15 border border-[#31135e]/25 text-[#31135e] text-xs font-semibold uppercase tracking-wider">
					<Sparkles className="w-3.5 h-3.5" />
					<span>Registration Open</span>
				</div>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#31135e] tracking-tight">
					Register for CIT Qiskit Fall Fest 2026
				</h2>

				<p className="text-xs sm:text-sm text-[#5E6470] max-w-xl font-normal leading-relaxed">
					Fill out the embedded inquiry form below to register for the CIT Qiskit Fall Fest 2026.
				</p>
			</div>

			{/* Main Tally Embed Container */}
			<TallyEmbed
				formUrlOrId="dWMdMK"
				title="CIT Qiskit Fall Fest 2026 Inquiry form"
				hideTitle={false}
				transparentBackground={true}
				minHeight="650px"
			/>
		</div>
	);
}
