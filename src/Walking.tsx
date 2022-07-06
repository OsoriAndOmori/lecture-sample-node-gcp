import React, {useRef, useState} from 'react';
import './App.css';
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {TextureLoader, Vector3} from "three";
import {OrbitControls, Sky} from "@react-three/drei";
import useInterval from "./useInterval";

function Road(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    return (
        <mesh
            {...props}
            ref={ref}>
            <torusGeometry args={[0.8, 0.3, 100, 100]}/>
            <meshStandardMaterial color={'brown'}/>
        </mesh>
    )
}

function CameraController() {
    const cameraHeight = 1;

    useFrame((state) => {
        state.camera.lookAt(new Vector3(cameraHeight, cameraHeight, 0));
        state.camera.position.x = cameraHeight * -1;
        state.camera.position.y = cameraHeight;
        state.camera.position.z = 0;
    });

    return null;
}

function Earth(props: JSX.IntrinsicElements['mesh']) {
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

const Picture = (props: any) => {
    const {scene} = useThree();

    const colorMap = useLoader(TextureLoader, props.imageNumber + ".jpg");
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

interface PictureProps {
    imageNumber: number
    initPosition: Vector3
}

const PictureLauncher = () => {
    const [renderingQueue, setRenderingQueue] = useState<PictureProps[]>([]);

    //주기적으로 vector 하나씩 집어넣음.
    useInterval(() => {
        let number = (Math.random() - 0.5) * 2;
        setRenderingQueue([...renderingQueue, {
            imageNumber: Math.floor(Math.random() * 100) % 5 + 1,
            initPosition: new Vector3(2, 1.5, number)
        }]);
    }, 2000)

    return (
        <>
            {renderingQueue.map((value, index) => (
                <Picture key={'rendering-queue-' + index} position={value.initPosition} imageNumber={value.imageNumber}/>
            ))}
        </>
    );
}

const Walking = () => {
    return (
        <div style={{height: '100vh'}}>
            <Canvas>
                <CameraController/>
                {/*<OrbitControls/>*/}
                <ambientLight position={[2, 2, 2]}/>
                <pointLight position={[10, 10, 10]}/>
                <Earth position={[0, 0, 0]}/>
                <Road position={[0, 0, 0]} rotation={[0, 0, 0]}/>
                {/*<Box position={[-1.2, 0, 0]} />*/}
                {/*<Box position={[1.2, 0, 0]} />*/}
                <PictureLauncher/>
                <Sky distance={10} sunPosition={300}/>
            </Canvas>
        </div>
    );
}

export default Walking;
