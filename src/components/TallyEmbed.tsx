import { useEffect, useState } from "react";

interface TallyEmbedProps {
	formUrlOrId?: string;
	title?: string;
	hideTitle?: boolean;
	transparentBackground?: boolean;
	minHeight?: string;
	className?: string;
}

export function extractTallyFormId(input?: string): string {
	if (!input) return "dWMdMK";
	const trimmed = input.trim();
	const urlMatch = trimmed.match(/tally\.so\/(?:r|embed)\/([a-zA-Z0-9_-]+)/i);
	if (urlMatch && urlMatch[1]) {
		return urlMatch[1];
	}
	const directIdMatch = trimmed.match(/^[a-zA-Z0-9_-]{5,12}$/);
	if (directIdMatch) {
		return directIdMatch[0];
	}
	return "dWMdMK";
}

export default function TallyEmbed({
	formUrlOrId = "dWMdMK",
	title = "CIT Qiskit Fall Fest 2026 Inquiry form",
	hideTitle = false,
	transparentBackground = true,
	minHeight = "600px",
	className = "",
}: TallyEmbedProps) {
	const [isLoading, setIsLoading] = useState(true);

	const formId = extractTallyFormId(formUrlOrId);
	const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=${
		hideTitle ? "1" : "0"
	}&transparentBackground=${
		transparentBackground ? "1" : "0"
	}&dynamicHeight=1`;

	useEffect(() => {
		const scriptUrl = "https://tally.so/widgets/embed.js";

		const triggerTallyLoad = () => {
			if (typeof window.Tally !== "undefined") {
				window.Tally.loadEmbeds();
			} else {
				document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
					const iframe = e as HTMLIFrameElement;
					if (iframe.dataset.tallySrc) {
						iframe.src = iframe.dataset.tallySrc;
					}
				});
			}
		};

		let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

		if (!script) {
			script = document.createElement("script");
			script.src = scriptUrl;
			script.async = true;
			script.onload = triggerTallyLoad;
			script.onerror = triggerTallyLoad;
			document.body.appendChild(script);
		} else {
			triggerTallyLoad();
		}
	}, [embedUrl]);

	return (
		<div className={`w-full relative overflow-visible rounded-2xl ${className}`}>
			{isLoading && (
				<div className="absolute inset-0 bg-white/70 backdrop-blur-xs z-10 flex items-center justify-center p-6 text-center">
					<div className="w-8 h-8 border-3 border-[#31135e]/20 border-t-[#31135e] rounded-full animate-spin" />
				</div>
			)}

			<iframe
				data-tally-src={embedUrl}
				src={embedUrl}
				loading="lazy"
				width="100%"
				height="1149"
				frameBorder="0"
				marginHeight={0}
				marginWidth={0}
				className="no-scrollbar"
				style={{
					minHeight,
					border: "none",
					width: "100%",
					display: "block",
				}}
				title={title}
				onLoad={() => {
					setIsLoading(false);
					if (typeof window.Tally !== "undefined") {
						window.Tally.loadEmbeds();
					}
				}}
			/>
		</div>
	);
}

declare global {
	interface Window {
		Tally?: {
			loadEmbeds: () => void;
		};
	}
}
