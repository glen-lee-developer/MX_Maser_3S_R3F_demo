import { ScrollControls, SpotLight } from "@react-three/drei";
import Overlay from "../overlay";
import Mouse from "../mouse";
import { useState } from "react";
import { ConfigColoursType } from "../../types/configColoursType";
import { useThree } from "@react-three/fiber";



export const Experience = () => {
	const [configuration, setConfiguration] = useState<ConfigColoursType>("black")
	// const { viewport } = useThree()
	// console.log(viewport)
		return (
			<ScrollControls pages={18} >
				<Overlay configuration={configuration} setConfiguration={setConfiguration}/>
				<Mouse configuration={configuration} />
			</ScrollControls>
	)
};




