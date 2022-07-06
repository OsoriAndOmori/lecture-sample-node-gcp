import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {MeshProps} from "@react-three/fiber/dist/declarations/src/three-types";

const name = (type : string) => `texture/PavingStones092_1K_${type}.jpg`;

interface RoadProps extends MeshProps {
    rotationSpeed: number
}

const Road = (props: RoadProps) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [
        colorMap,
        displacementMap,
        normalMap,
        roughnessMap,
        aoMap
    ] = useLoader(TextureLoader, [
        'texture/ground.jpg',
        name("Displacement"),
        name("Normal"),
        name("Roughness"),
        name("AmbientOcclusion")
    ]);

    useFrame((state, delta) => {
        ref.current.rotation.z += 0.01;
        // ref.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={ref}>
            <torusGeometry args={[0.76, 0.3, 100, 100]}/>
            <meshStandardMaterial
                displacementScale={0.2}
                map={colorMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap}
            />
        </mesh>
    )
}

export default Road;