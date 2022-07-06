import React from 'react';
import '../App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Sky} from "@react-three/drei";
import PictureLauncher from "../component/PictureLauncher";
import Earth from "../scene/Earth";
import CameraController from "../scene/CameraController";
import Road from "../scene/Road";

const Level2 = () => {
    const rotationSpeed = 0.005;
    const cameraHeight = 1.35;

    return (
        <div style={{height: '100vh'}}>
            <Canvas>
                <OrbitControls/>
                <ambientLight position={[2, 2, 2]}/>
                <Earth position={[0, -0.7, 0]} rotationSpeed={rotationSpeed}/>
                <Road position={[0, 0, 0]} rotation={[0, 0, 0]} rotationSpeed={rotationSpeed}/>
                <Sky rayleigh={0.5} turbidity={2} distance={10} sunPosition={300}/>
            </Canvas>
        </div>
    );
}

export default Level2;
