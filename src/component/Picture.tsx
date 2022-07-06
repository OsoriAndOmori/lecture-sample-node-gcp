import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {TextureLoader} from "three";
import React, {useRef} from "react";

const Picture = (props: any) => {
    const {scene} = useThree();

    const testFolder = './images/';

    const colorMap = useLoader(TextureLoader, 'images/' + props.imageNumber + '.jpg');
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta, frame) => {
        ref!.current!.position.x -= 0.005
        if (ref!.current!.position.x < -3) {
            scene.remove(ref!.current!);
        }
    })

    return (
        <mesh
            {...props}
            ref={ref}>
            <boxGeometry args={[0.01, 0.5, 0.5]}/>
            <meshStandardMaterial map={colorMap}/>
        </mesh>
    )
}

export default Picture;