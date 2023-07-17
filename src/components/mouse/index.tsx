import { Group } from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
// import { MouseGLTFType } from "../../types/MouseGLTFType";
import { ConfigColoursType } from "../../types/configColoursType";

type MouseProps = {
  configuration: ConfigColoursType;
};

const Mouse = ({ configuration }: MouseProps) => {
  const model = useGLTF("./models/mouse.gltf") as any;
  const { nodes, materials } = model;
  const mouseRef = useRef<Group>(null);
  const tl = useRef<gsap.core.Timeline | undefined>(gsap.timeline());
  const scroll = useScroll();

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    if (
      tl.current === undefined ||
      mouseRef.current === undefined ||
      !mouseRef.current
    )
      return;

    tl.current
      // Tilt down
      .to(
        mouseRef.current.rotation,
        {
          duration: 1,
          x: Math.PI * 0.2,
        },
        0.5
      )
      //  Left Click
      .to(
        mouseRef.current.rotation,
        {
          duration: 0.5,
          z: 0.1,
        },
        3
      )
      .to(
        mouseRef.current.rotation,
        {
          duration: 0.5,
          z: 0,
        },
        3.5
      )
      //  Rght Click
      .to(
        mouseRef.current.rotation,
        {
          duration: 0.5,
          z: -0.1,
        },
        4
      )
      .to(
        mouseRef.current.rotation,
        {
          duration: 0.5,
          z: 0,
        },
        4.5
      )
      //  Closeup pan of wheel
      .to(
        mouseRef.current.position,
        {
          duration: 2,

          x: -0.05,
          y: 0.1,
          z: -0.3,
        },
        5
      )
      .to(
        mouseRef.current.rotation,
        {
          duration: 3,
          y: Math.PI + 1,
        },
        5
      )
      //  Quick Closeup  of wheel adjustor
      .to(
        mouseRef.current.rotation,
        {
          duration: 1,
          z: 0,
          y: Math.PI,
        },
        8
      )
      .to(
        mouseRef.current.position,
        {
          duration: 2,
          x: 0,
          y: -0.06,
          z: -0.2,
        },
        8
      )

      //  Showcase side scroll
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          x: 0,
          y: Math.PI - 2,
        },
        10
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          x: 0,
          y: 0,
          z: -0.35,
        },
        10
      )

      // //  Showcase mappable butons
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          x: 0,
          y: Math.PI - 1.5,
          z: 0.6,
        },
        15
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          y: 0.1,
          x: -0.14,
        },
        15
      )
      // //  Showcase Connector
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          x: -0.35,
          y: Math.PI,
          z: 0,
        },
        20
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          x: 0,
          y: 0.08,
          z: -0.3,
        },
        20
      )
      // //  Pan to bottom
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          x: -Math.PI * 0.5,
          y: Math.PI,
          z: 0,
        },
        25
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          x: 0,
          y: 0.1,
          z: -0.75,
        },
        25
      )
      // //  Pan around the other way to view back top
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          z: -Math.PI,
          x: -Math.PI * 0.6,
          y: Math.PI * 1.1,
        },
        30
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          x: 0.05,
          y: 0.15,
          z: -0.4,
        },
        30
      )
      // //  Finish back at start but upside down
      .to(
        mouseRef.current.rotation,
        {
          duration: 5,
          x: -Math.PI * 0.5,
          y: Math.PI,
        },
        35
      )
      .to(
        mouseRef.current.position,
        {
          duration: 5,
          x: 0,
          y: 0,
          z: -1,
        },
        35
      );
  }, []);

  return (
    <group
      ref={mouseRef}
      dispose={null}
      position={[0, 0, -1]}
      rotation={[0, Math.PI, 0]}
    >
      <group rotation={[-1.57, 0, 0.013]} scale={0.0004}>
        <mesh
          name="details"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.Plastic}
        />
        <mesh
          name="top_side_main_color" // Grey | Black | White
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
        >
          <meshStandardMaterial
            color={configuration === "white" ? "white" : "black"}
          />
        </mesh>
        <mesh
          name="bottom_side_second_color" // Black | Silver
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.Aluminium}
        >
          <meshStandardMaterial
            color={configuration === "black" ? "black" : "grey"}
          />
        </mesh>
        <mesh
          name="side_top_buttons" // Grey | Black | White
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials.Base2}
        >
          <meshStandardMaterial
            color={configuration === "white" ? "white" : "black"}
          />
        </mesh>
        <mesh
          name="logi_logo"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.Logo}
        />
        <mesh
          name="side_power_light"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials.Green_button}
        />

        <mesh
          name="underside_middle_underside_button_color"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials.Green_button}
        />
        <mesh
          name="connections"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials.USB_ss}
        />
        <mesh
          name="random_detail"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_8.geometry}
          material={materials.Glass}
        />
        <mesh
          name="scroll_wheels" //Silver
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_9.geometry}
          material={materials.Chrome}
        />
        <mesh
          name="upper_shell"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_10.geometry}
          material={materials.Black}
        />
        <mesh
          name="bottom_sensors"
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_11.geometry}
          material={materials.Plastic_panel}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./models/mouse.gltf");
export default Mouse;
