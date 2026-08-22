import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";

const IMG_URL = `${import.meta.env.BASE_URL}assets/Untitled design.png`;
const LOGO1_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const LOGO2_URL = `${import.meta.env.BASE_URL}assets/images-removebg-preview(1)(1).png`;

export default function Hero() {
	return (
		<div className="w-full h-screen flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 bg-[#f0f0f0] box-border">
			<section className="relative w-full h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center justify-center bg-white/10 group">
				<img
					src={IMG_URL}
					alt="herobg"
					className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
				/>

				<div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center">
					<div className="w-full flex flex-col items-center text-center max-w-4xl">
						{/* Transparent glass container holding both logos + X, centered & responsive */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="mx-auto mb-6 sm:mb-8 w-fit max-w-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl sm:rounded-3xl md:rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex items-center justify-center gap-3 sm:gap-5 md:gap-7"
						>
							<img
								src={LOGO1_URL}
								alt="CIT Logo"
								className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[35vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
							<span className="text-lg sm:text-2xl md:text-3xl font-light text-[#5E6470] opacity-70 leading-none select-none px-1">
								×
							</span>
							<img
								src={LOGO2_URL}
								alt="IBM Logo"
								className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[35vw] sm:max-w-none object-contain drop-shadow-sm"
							/>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-bold text-[#5E6470] mb-4 tracking-tight leading-[1.1] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
						>
							<span>CIT</span>
							<span className="bg-[#31135e] text-white px-5 py-1.5 md:px-8 md:py-2.5 rounded-full shadow-md inline-block font-mono font-light tracking-widest">
								Quantum
							</span>
							<span>CHALLENGE</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
						>
							IBM Fall Fest - 2k26
						</motion.p>

						{/* Action buttons styled like BottomLeftCard */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6"
						>
							{/* Registration Button */}
							<motion.button
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								className="p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex items-center gap-3 border border-white/40 shadow-sm hover:bg-white/40 transition-all cursor-pointer group min-w-[160px] md:min-w-[180px] justify-center"
							>
								<div className="bg-[rgba(30,50,90,0.1)] p-1.5 rounded-full flex items-center justify-center">
									<ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</div>
								<span className="text-base md:text-lg font-medium text-[rgba(30,50,90,0.9)]">
									Registration
								</span>
							</motion.button>

							{/* Timeline Button */}
							<motion.button
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								className="p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex items-center gap-3 border border-white/40 shadow-sm hover:bg-white/40 transition-all cursor-pointer group min-w-[160px] md:min-w-[180px] justify-center"
							>
								<div className="bg-[rgba(30,50,90,0.1)] p-1.5 rounded-full flex items-center justify-center">
									<ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</div>
								<span className="text-base md:text-lg font-medium text-[rgba(30,50,90,0.9)]">
									Timeline
								</span>
							</motion.button>
						</motion.div>
					</div>

					<BottomLeftCard />
					<BottomRightCorner />
				</div>
			</section>
		</div>
	);
}
