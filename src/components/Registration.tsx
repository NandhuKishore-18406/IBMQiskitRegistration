import TallyEmbed from "./TallyEmbed";

interface RegistrationProps {
	/** Set to true to show the top header and icon badge */
	showHeader?: boolean;
	/** Set to true to hide Tally's internal form title */
	hideTallyTitle?: boolean;
}

// Toggle this constant to true to recover the header & icon anytime
const SHOW_HEADER_DEFAULT = true;

export default function Registration({
	showHeader = SHOW_HEADER_DEFAULT,
	hideTallyTitle = true,
}: RegistrationProps) {
	return (
		<div className="w-full flex flex-col gap-4 sm:gap-6 py-1 px-0.5 sm:px-1 text-left max-w-7xl mx-auto pb-16 sm:pb-20">
			{showHeader && (
				<div className="flex flex-col items-center text-center space-y-2 mb-2 sm:mb-4">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#31135e] tracking-tight">
						Inquiry Form
					</h2>

					<p className="text-xs sm:text-sm text-[#5E6470] max-w-xl font-normal leading-relaxed">
						Fill this inquiry form to get complete details about CIT - IBM Qiskit Fall Fest 2026.
					</p>
				</div>
			)}

			{/* Main Tally Embed Container */}
			<TallyEmbed
				formUrlOrId="dWMdMK"
				title="CIT - IBM Qiskit Fall Fest 2026 Inquiry form"
				hideTitle={hideTallyTitle}
				transparentBackground={true}
				minHeight="720px"
			/>

			{/* Extra bottom scroll buffer to ensure full visibility of next/submit buttons */}
			<div className="h-10 sm:h-16 w-full shrink-0" />
		</div>
	);
}
