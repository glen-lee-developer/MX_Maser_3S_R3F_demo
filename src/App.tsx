import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Experience } from "./components/experience";
import { Suspense } from "react";


function App() {

	
	
	return (
			<Canvas
			dpr={[1, 2]}
			camera={{
				fov: 64,
				position: [0, 0, 0],
			}}
			style={{
				position: "fixed",
				width: "100%",
				height: "100%",
				// zIndex: -1,
			}}
			>
			<ambientLight intensity={0.2} />
			<directionalLight position={[-3.3, -1.0, 4.4]} intensity={2} />
			<directionalLight position={[3.3, 1.0, -4.4]} intensity={2} />
			{/* <OrbitControls enableZoom /> */}
			<Suspense fallback={null}>
				<Experience />
			</Suspense>
		</Canvas>
	);
}

export default App;
