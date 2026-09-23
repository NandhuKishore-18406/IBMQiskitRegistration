import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";

export type YearEdition = "2023" | "2022" | "2021";

export interface SpeakerData {
	id: string;
	name: string;
	designation: string;
	topic: string;
	image?: string;
}

const BASE_URL = import.meta.env.BASE_URL;

const DEFAULT_AVATAR = `${BASE_URL}assets/speakers/manjulagandhi.jpg`;

export const SPEAKERS_BY_YEAR: Record<YearEdition, SpeakerData[]> = {
	"2023": [
		{
			id: "manjula-2023",
			name: "Dr. S. Manjula Gandhi",
			designation: "Associate Professor, CIT & Qiskit Advocate",
			topic: "Constructing Reversible Circuits using IBM Qiskit",
			image: `${BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
		{
			id: "ajhay-2023",
			name: "Mr. Ajhay V",
			designation: "Quantum Computing Workshop Lead",
			topic: "Working with Quantum Entanglement",
			image: `${BASE_URL}assets/speakers/aghayv.jpeg`,
		},
		{
			id: "gayathri-2023",
			name: "Dr. S. Gayathri Devi",
			designation: "Associate Professor, CIT",
			topic: "Exploring IBMQ & Qiskit Developer Certification Exam",
			image: `${BASE_URL}assets/speakers/gayathri.png`,
		},
		{
			id: "midhun-2023",
			name: "Mr. K Midhun Chakkaravarthy",
			designation: "Quantum Software Educator",
			topic: "Deutsch's Algorithm & Deutsch Jozsa Algorithm",
			image: `${BASE_URL}assets/speakers/mithunchakravarthy.jpg`,
		},
		{
			id: "pooja-2023",
			name: "Ms. M S Pooja Shri",
			designation: "Quantum Algorithms Mentor",
			topic: "Quantum Teleportation & Grover's Algorithm",
			image: `${BASE_URL}assets/speakers/poojashri.jpeg`,
		},
		{
			id: "karthick-2023",
			name: "Mr. Karthickganesh Durai",
			designation: "Chief Quantum Architect, BosonQ Psi",
			topic: "Quantum Machine Learning (QML)",
			image: `${BASE_URL}assets/speakers/karthiganeshdurai.jpg`,
		},
		{
			id: "rohini-2023",
			name: "Ms. V. Rohini",
			designation: "IBM Certified Developer & Qiskit Advocate",
			topic: "Quantum Key Distribution (QKD)",
			image: `${BASE_URL}assets/speakers/rohiniv.jpg`,
		},
		{
			id: "srinithi-2023",
			name: "Ms. B Srinithi",
			designation: "Quantum Computing Researcher",
			topic: "Shor's Factoring Algorithm",
			image: `${BASE_URL}assets/speakers/srinithi.jpeg`,
		},
		{
			id: "raghavendra-2023",
			name: "Dr. Raghavendra V",
			designation: "PhD Computational Chemistry, Quantum Researcher",
			topic: "Quantum Finance",
			image: `${BASE_URL}assets/speakers/ragavendrav.jpg`,
		},
	],
	"2022": [
		{
			id: "venkata-2022",
			name: "Dr. L Venkata Subramaniam",
			designation: "IBM Fellow & IBM Quantum India Lead",
			topic: "Are You Ready for the Quantum Computing Revolution?",
			image: `${BASE_URL}assets/speakers/venkatasubramaniyam.jpg`,
		},
		{
			id: "lorraine-2022",
			name: "Ms. Lorraine Tsitsi Majjri",
			designation: "Quantum Education Specialist",
			topic: "Quantum States and Qubits",
			image: `${BASE_URL}assets/speakers/LorraineTsitsiMajjri.jpg`,
		},
		{
			id: "raghavendra-2022",
			name: "Dr. Raghavendra V",
			designation: "PhD Computational Chemistry, Quantum Researcher",
			topic: "Quantum Gates",
			image: `${BASE_URL}assets/speakers/ragavendrav.jpg`,
		},
		{
			id: "shesha-2022",
			name: "Dr. Shesha Raghunathan",
			designation: "IBM Research & Quantum Educator",
			topic: "Quantum Algorithms in Near-Term Quantum Computers",
			image: `${BASE_URL}assets/speakers/SheshaRaghunathan.jpg`,
		},
		{
			id: "gayathri-2022",
			name: "Dr. S. Gayathri Devi",
			designation: "Associate Professor, CIT",
			topic: "Qiskit Backends",
			image: `${BASE_URL}assets/speakers/gayathri.png`,
		},
		{
			id: "alain-2022",
			name: "Mr. Alain Chance",
			designation: "Qiskit Advocate & Global Quantum Author",
			topic: "Simulating Interferometric Sensing of Enantiomer States with Qiskit Code",
			image: `${BASE_URL}assets/speakers/alainchance.jpg`,
		},
		{
			id: "rohini-2022",
			name: "Ms. V. Rohini",
			designation: "IBM Certified Developer & Qiskit Advocate",
			topic: "Quantum Entanglement",
			image: `${BASE_URL}assets/speakers/rohiniv.jpg`,
		},
		{
			id: "prajjwal-2022",
			name: "Mr. Prajjwal Vijaywargiya",
			designation: "Quantum Software Engineer, IBM Qiskit Developer",
			topic: "Quantum Teleportation",
			image: `${BASE_URL}assets/speakers/prajjwal.jpg`,
		},
		{
			id: "reshma-2022",
			name: "Ms. Reshma",
			designation: "Quantum Circuits Workshop Lead",
			topic: "Implementing Classical Logic Gates using Quantum Gates",
			image: `${BASE_URL}assets/speakers/reshma.jpg`,
		},
		{
			id: "guncha-2022",
			name: "Ms. Guncha Malik",
			designation: "IBM & Qiskit Advocate",
			topic: "Factoring Integers - The Shor's Way",
			image: `${BASE_URL}assets/speakers/gunchamalik.jpg`,
		},
		{
			id: "vishnu-2022",
			name: "Mr. Vishnu",
			designation: "Qiskit Advocate & Quantum Mentor",
			topic: "Variational Quantum Methods (VQE)",
			image: `${BASE_URL}assets/speakers/vishnuAjith.jpg`,
		},
		{
			id: "jayesh-2022",
			name: "Mr. Jayesh",
			designation: "Qiskit Advocate & Workshop Lead",
			topic: "Qiskit Simulators",
			image: `${BASE_URL}assets/speakers/jayeshparashar.jpg`,
		},
		{
			id: "soyoung-2022",
			name: "Ms. Soyoung Shin (Sophy)",
			designation: "IBM Quantum Developer & Educator",
			topic: "Qiskit Pulse Tutorial",
			image: `${BASE_URL}assets/speakers/soyoungshin.jpg`,
		},
		{
			id: "sabhyata-2022",
			name: "Ms. Sabhyata Gupta",
			designation: "Youth Quantum Educator",
			topic: "An Essay from Grade 5 and Quantum Computing",
			image: `${BASE_URL}assets/speakers/sabhyataGupta.jpg`,
		},
		{
			id: "kaushal-2022",
			name: "Mr. Kaushal",
			designation: "Quantum Security Specialist",
			topic: "Quantum Cryptography",
			image: `${BASE_URL}assets/speakers/kaushalkishorgagan.jpg`,
		},
		{
			id: "kavitha-2022",
			name: "Ms. Kavitha S S",
			designation: "Machine Learning Researcher",
			topic: "Quantum Computing Demystification in Machine Learning",
			image: `${BASE_URL}assets/speakers/KavithaSS.jpg`,
		},
		{
			id: "balaji-2022",
			name: "Mr. Balaji Seetharaman",
			designation: "Quantum Computing Researcher & Qiskit Advocate",
			topic: "Deploying a QML Model on Web",
			image: `${BASE_URL}assets/speakers/balajiseetaraman.jpg`,
		},
		{
			id: "jayakumar-2022",
			name: "Dr. Jayakumar V",
			designation: "Interactive Quantum Applications Lead",
			topic: "Quantum Games",
			image: `${BASE_URL}assets/speakers/Jayakumar-Vaithiyashankar.jpg`,
		},
		{
			id: "manan-2022",
			name: "Mr. Manan",
			designation: "Quantum Systems & Error Mitigation Researcher",
			topic: "Fault Tolerant Quantum Computing",
			image: `${BASE_URL}assets/speakers/manan Narang.jpg`,
		},
		{
			id: "rupesh-2022",
			name: "Mr. R K Rupesh",
			designation: "Quantitative Quantum Developer",
			topic: "Finding Currency Arbitrage using Quantum Computers",
			image: `${BASE_URL}assets/speakers/rupeshrk.jpg`,
		},
		{
			id: "manjula-2022",
			name: "Dr. S. Manjula Gandhi",
			designation: "Associate Professor, CIT & Qiskit Advocate",
			topic: "How to Become a Qiskit Advocate?",
			image: `${BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
	],
	"2021": [
		{
			id: "venkata-2021",
			name: "Dr. L. Venkata Subramaniam",
			designation: "IBM Fellow & IBM Quantum India Lead",
			topic: "Preparing for the Quantum Era",
			image: `${BASE_URL}assets/speakers/venkatasubramaniyam.jpg`,
		},
		{
			id: "manjula-2021",
			name: "Dr. S. Manjula Gandhi",
			designation: "Associate Professor, CIT & Qiskit Advocate",
			topic: "Quantum Circuits and Quantum Gates",
			image: `${BASE_URL}assets/speakers/manjulagandhi.jpg`,
		},
		{
			id: "jayesh-2021",
			name: "Mr. Jayesh Parashar",
			designation: "Qiskit Advocate & Workshop Lead",
			topic: "Uncertainty Principle",
			image: `${BASE_URL}assets/speakers/jayeshparashar.jpg`,
		},
		{
			id: "guncha-2021",
			name: "Ms. Guncha Malik",
			designation: "IBM & Qiskit Advocate",
			topic: "Quantum Cryptography",
			image: `${BASE_URL}assets/speakers/gunchamalik.jpg`,
		},
		{
			id: "vishnu-2021",
			name: "Mr. Vishnu",
			designation: "Qiskit Advocate & Quantum Mentor",
			topic: "Quantum Cryptography Protocols – QKD and BB84",
			image: `${BASE_URL}assets/speakers/vishnuAjith.jpg`,
		},
		{
			id: "rajesh-2021",
			name: "Mr. Rajesh K. Jeyapaul",
			designation: "IBM Research & AI Technical Leader",
			topic: "What makes Machine Learning Quantum?",
			image: `${BASE_URL}assets/speakers/Rageshjayapal.jpg`,
		},
		
	],
};

interface SpeakerCarouselProps {
	year: YearEdition;
}

export default function SpeakerCarousel({ year }: SpeakerCarouselProps) {
	const rawSpeakers = SPEAKERS_BY_YEAR[year] || SPEAKERS_BY_YEAR["2023"];

	const items: CarouselItem[] = rawSpeakers.map((sp) => {
		const imgSrc = sp.image || DEFAULT_AVATAR;
		return {
			id: sp.id,
			stat: sp.topic,
			quote: `Special technical workshop session delivered during CIT Quantum Fall Fest ${year}.`,
			author: sp.name,
			role: sp.designation,
			defaultImage: imgSrc,
			selectedImage: imgSrc,
			alt: `${sp.name} - ${sp.designation}`,
		};
	});

	return (
		<div className="w-full flex flex-col items-center justify-center py-2">
			<CalendlyCarousel
				items={items}
				autoPlayInterval={5000}
				pauseOnHover={true}
			/>
		</div>
	);
}
