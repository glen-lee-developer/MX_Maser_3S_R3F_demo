import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/experience";
import { Suspense, useState } from "react";
import { ConfigColoursType } from "./types/configColoursType";
import ConfigurationButtons from "./components/configurationButtons";

function App() {
  const [configuration, setConfiguration] =
    useState<ConfigColoursType>("black");

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{
          fov: 64,
          position: [0, 0, 0],
        }}
        style={{
          background: "no-repeat center center fixed",
          // position: "fixed",
          // width: "100%",
          // height: "100%",
          // zIndex: -1,
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[-3.3, -1.0, 4.4]} intensity={2} />
        <directionalLight position={[3.3, 1.0, -4.4]} intensity={2} />
        {/* <OrbitControls enableZoom /> */}
        <Suspense fallback={null}>
          <Experience configuration={configuration} />
        </Suspense>
      </Canvas>

      <ConfigurationButtons
        configuration={configuration}
        setConfiguration={setConfiguration}
      />
    </>
  );
}

export default App;
