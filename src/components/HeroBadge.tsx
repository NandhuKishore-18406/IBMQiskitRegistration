import { motion } from "motion/react";

interface HeroBadgeProps {
	text?: string;
}

export default function HeroBadge({ text = "Department of Computing" }: HeroBadgeProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="inline-flex items-center justify-center text-[#31135e] font-black text-base sm:text-xl md:text-2xl tracking-wide"
		>
			<span>{text}</span>
		</motion.div>
	);
}



