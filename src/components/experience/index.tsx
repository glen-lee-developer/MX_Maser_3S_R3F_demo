import { ScrollControls } from "@react-three/drei";
import { ConfigColoursType } from "../../types/configColoursType";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import Overlay from "../overlay";
import Mouse from "../mouse";

type ExperienceProps = {
  configuration: ConfigColoursType;
};

export const Experience = ({ configuration }: ExperienceProps) => {
  const { scene } = useThree();
  const loader = new THREE.TextureLoader();
  const texture = loader.load("./backgrounds/darkBackground.jpg");
  scene.background = texture;
  scene.background.encoding = THREE.sRGBEncoding;

  return (
    <>
      <ScrollControls pages={18}>
        <Overlay />
        <Mouse configuration={configuration} />
      </ScrollControls>
    </>
  );
};
