import { Atom, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroBadgeProps {
	text?: string;
	icon?: "atom" | "sparkles";
}

export default function HeroBadge({ text = "Department of Computing", icon = "atom" }: HeroBadgeProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="inline-flex items-center gap-2 text-[#31135e] font-black text-base sm:text-xl md:text-2xl tracking-wide"
		>
			{icon === "atom" ? (
				<Atom className="w-5 h-5 sm:w-6 sm:h-6 text-[#31135e] animate-spin-slow shrink-0" />
			) : (
				<Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#31135e] shrink-0" />
			)}
			<span>{text}</span>
		</motion.div>
	);
}


