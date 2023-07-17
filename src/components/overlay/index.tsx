import { Html } from "@react-three/drei";
import { CardType } from "../../types/cardType";
import ContactText from "./contactText";
import IntroText from "./introText";
import { Card } from "./card";

export const Overlay = () => {
  return (
    <>
      <Html>
        <IntroText />
        {cardData.map((card, i) => {
          return <Card key={i} {...card} />;
        })}

        <ContactText />
      </Html>
    </>
  );
};

export default Overlay;

const cardData: CardType[] = [
  {
    title: "10 Billion",
    subtitle: "Lifetime Clicks",
    bullet1: "Quiet clicks",
    bullet2: "Comfortable",
    bullet3: "Optimal sensitivity",
  },
  {
    title: "SCROLL 1,000 ",
    subtitle: "Lines per Second",
    bullet1: "Adjustable electromagnetic scroll",
    bullet2: "Dynamic Intertia is 87% more precise",
    bullet3: "90% Faster experience",
  },
  {
    title: "Side Scroll",
    subtitle: "Horizontal Control",
    bullet1: "No need to drag",
    bullet2: "Seamless navigation of wide documents",
    bullet3: "Perfect for timelines and spreadsheets",
  },
  {
    title: "Programmable",
    subtitle: "Custom Commands",
    bullet1: "Personalize commands",
    bullet2: "Streamline workflow",
    bullet3: "Efortless macros",
  },
  {
    title: "USB-C",
    subtitle: "70 Day Battery",
    bullet1: "Almost always wireless",
    bullet2: "3 hours to fully charge",
    bullet3: "3 hours use from a 1 minute charge",
  },
  {
    title: "8K DPI",
    subtitle: "Any Surface Tracking",
    bullet1: "Our most accurate sensor",
    bullet2: "Switch between devices easily",
    bullet3: "Customisable sensitivity",
  },
  {
    title: "Ergonomic Design",
    subtitle: "Comfortable Control",
    bullet1: "Reduced strain",
    bullet2: "No discomfort",
    bullet3: "Durable materials",
  },
];
