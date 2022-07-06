import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {MeshProps} from "@react-three/fiber/dist/declarations/src/three-types";

const name = (type: string) => `texture/PavingStones092_1K_${type}.jpg`;

interface EarthProps extends MeshProps {
    rotationSpeed: number
}

const Earth = (props: EarthProps) => {
    const sphereRef = useRef<THREE.Mesh>(null!)

    const [
        colorMap,
        displacementMap,
        normalMap,
        roughnessMap,
        aoMap
    ] = useLoader(TextureLoader, [
        'texture/green_texture.jpg',
        name("Displacement"),
        name("Normal"),
        name("Roughness"),
        name("AmbientOcclusion")
    ]);

    useFrame((state, delta) => {
        sphereRef.current.rotation.z += 0.01;
        // ref.current.rotation.y += 0.01
    })
    return (
        <>
            <mesh
                {...props}
                ref={sphereRef}>
                <sphereGeometry args={[1.6, 100, 100]}/>
                <meshStandardMaterial
                    displacementScale={0.2}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />
            </mesh>
        </>

    )
}

export default Earth;