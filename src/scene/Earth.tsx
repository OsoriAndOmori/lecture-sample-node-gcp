import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Earth = (props: JSX.IntrinsicElements['mesh']) => {
    const boxRef = useRef<THREE.Mesh>(null!)
    const sphereRef = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {
        boxRef.current.rotation.z += 0.02;
        sphereRef.current.rotation.z += 0.02;
        // ref.current.rotation.y += 0.01
    })
    return (
        <>
            <mesh
                position={[0, 0, 0]}
                ref={boxRef}>
                <boxGeometry args={[0.1, 3, 0.1]}/>
                <meshStandardMaterial color={'brown'}/>
            </mesh>
            <mesh
                {...props}
                ref={sphereRef}>
                <sphereGeometry args={[1, 100, 100]}/>
                <meshStandardMaterial color={'green'}/>
            </mesh>
        </>

    )
}

export default Earth;