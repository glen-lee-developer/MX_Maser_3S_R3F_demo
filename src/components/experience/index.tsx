import { ScrollControls } from "@react-three/drei";
import Overlay from "../overlay";
import Mouse from "../mouse";
import { ConfigColoursType } from "../../types/configColoursType";

type ExperienceProps = {
	configuration:ConfigColoursType;
}

export const Experience = ({ configuration }:ExperienceProps) => {
		return (
			<>
			<ScrollControls pages={9} >
					<Overlay  />
					<Mouse configuration={configuration} />
				</ScrollControls>
			</>
	)
};




