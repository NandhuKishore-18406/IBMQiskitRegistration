import type { CarouselItem } from "@/components/ui/connected-carousel";
import { CalendlyCarousel } from "@/components/ui/connected-carousel";


const BASE_URL = import.meta.env.BASE_URL;

const STORIES_DATA: CarouselItem[] = [
	{
		id: "manjula",
		stat: "Constructing Reversible Circuits using IBM Qiskit",
		quote: "Mastering reversible logic synthesis and quantum circuit design principles using Qiskit SDK.",
		author: "Dr. S. Manjula Gandhi",
		role: "Associate Professor, CIT & Qiskit Advocate",
		defaultImage: `${BASE_URL}assets/speakers/manjulagandhi.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/manjulagandhi.jpg`,
		alt: "Dr. S. Manjula Gandhi presenting Quantum Computing",
	},
	{
		id: "karthick",
		stat: "Quantum Machine Learning (QML)",
		quote: "Deploying parameterized quantum circuits (PQC) and variational algorithms for real-world data.",
		author: "Mr. Karthickganesh Durai",
		role: "Chief Quantum Architect, BosonQ Psi",
		defaultImage: `${BASE_URL}assets/speakers/karthiganeshdurai.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/karthiganeshdurai.jpg`,
		alt: "Mr. Karthickganesh Durai - BosonQ Psi",
	},
	{
		id: "venkata",
		stat: "Are You Ready for the Quantum Computing Revolution?",
		quote: "Keynote on IBM Quantum roadmap, hardware scaling, and ecosystem developments in India.",
		author: "Dr. L Venkata Subramaniam",
		role: "IBM Fellow & IBM Quantum India Lead",
		defaultImage: `${BASE_URL}assets/speakers/lvenkatasubramaniyam.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/lvenkatasubramaniyam.jpg`,
		alt: "Dr. L Venkata Subramaniam - IBM Quantum Lead",
	},
	{
		id: "alain",
		stat: "Interferometric Sensing with Qiskit Code",
		quote: "Simulating quantum superposition of enantiomer states on superconducting quantum hardware.",
		author: "Mr. Alain Chance",
		role: "Qiskit Advocate & Global Quantum Author",
		defaultImage: `${BASE_URL}assets/speakers/alainchance.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/alainchance.jpg`,
		alt: "Mr. Alain Chance - Global Quantum Author",
	},
	{
		id: "shesha",
		stat: "Quantum Algorithms in Near-Term Quantum Computers",
		quote: "Exploring NISQ algorithms, noise mitigation techniques, and error mitigation strategies.",
		author: "Dr. Shesha Raghunathan",
		role: "IBM Research & Quantum Educator",
		defaultImage: `${BASE_URL}assets/speakers/SheshaRaghunathan.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/SheshaRaghunathan.jpg`,
		alt: "Dr. Shesha Raghunathan - IBM Research",
	},
	{
		id: "rohini",
		stat: "Quantum Key Distribution (QKD)",
		quote: "Implementing BB84 protocol and quantum safe encryption algorithms on Qiskit backends.",
		author: "Ms. V. Rohini",
		role: "IBM Certified Developer & Qiskit Advocate",
		defaultImage: `${BASE_URL}assets/speakers/rohiniv.jpg`,
		selectedImage: `${BASE_URL}assets/speakers/rohiniv.jpg`,
		alt: "Ms. V. Rohini - Qiskit Advocate",
	},
];

export default function CarouselDemo() {
	return (
		<div className="w-full py-8 flex flex-col items-center justify-center">
			<CalendlyCarousel
				items={STORIES_DATA}
				autoPlayInterval={6000}
				pauseOnHover={true}
			/>
		</div>
	);
}
