import { Html, Scroll, useScroll } from "@react-three/drei";
import { CardType } from "../../types/cardType";
import ContactText from "./contactText";
import IntroText from "./introText";
import {Card} from "./card";
import ConfigurationButtons from "./configurationButtons";
import { ConfigColoursType } from "../../types/configColoursType";
import { useThree } from "@react-three/fiber";

type OverlayProps = {
	configuration:ConfigColoursType;
	setConfiguration: React.Dispatch<React.SetStateAction<ConfigColoursType>>;
}

export const Overlay = ({configuration, setConfiguration}:OverlayProps) => {
	
	
	return (
		<>
		<Html>
			<ConfigurationButtons configuration={configuration} setConfiguration={setConfiguration}  />
			<IntroText />
			{cardData.map((card,i) => {
				return <Card key={i} {...card} />
			})}
				
			<ContactText />
		</Html>
		</>
	)
}

export default Overlay;

const cardData:CardType[] = [
	{
	title: "10 Billion",
	subtitle: "Lifetime Clicks",
	bullet1: "Queit Clicks: Tactile Feedback and enhanced experience",
	bullet2: "Ergonomic Design: Health is paramount, safety is guaranteed",
	bullet3 : "Optimal Sensitivity: Tailored to your preferences"	
	},
	{
	title: "SCROLL 1,000 ",
	subtitle: "Lines per Second",
	bullet1: "MagSpeed Electromagnetic scrolling: 90% Faster experience",
	bullet2: "Dynamic Intertia: 87% More Precise and tactile",
	bullet3 : "Precision Machined steel: Durable and ULTRA Quiet"	
	},
	{
	title: "Side Scroll",
	subtitle: "Horizontal Control",
	bullet1: "Horizontal scrolling: No need to drag",
	bullet2: "Seamless navigation of wide documents",
	bullet3 : "Perfect for timelines and spreadsheets"	
	},
	{
	title: "Programmable",
	subtitle: "Custom Commands",
	bullet1: "Personalize commands and shortcuts",
	bullet2: "Streamline workflow for efficiency",
	bullet3 : "Execute complex macros effortlessly"	
	},
	{
	title: "USB-C",
	subtitle: "70 Day Battery",
	bullet1: "70 Day battery life: Almost always wireless",
	bullet2: "USB-C: Latest version USB technology",
	bullet3: "3 hours to fully charge: Plus 3 hours of use for a 1 minute charge"	
	},
	{
	title: "8K DPI",
	subtitle: "Any Surface Tracking",
	bullet1: "Most accurate sensor ever: Next-Gen 8,000 DPI optical sensor",
	bullet2: "Connect multiple devices: Switch on the go",
	bullet3: "Set own sensitivity: How you like it; everywhere"	
	},
	{
	title: "Ergonomic Design",
	subtitle: "Comfortable Control",
	bullet1: "Designed for optimal comfort: reduced strain",
	bullet2: "All-day usability:  No discomfort",
	bullet3: "Set own sensitivity: How you like it; everywhere"	
	},
]

