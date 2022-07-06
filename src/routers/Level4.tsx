import React from 'react';
import '../App.css';
import {Canvas} from "@react-three/fiber";
import {Sky} from "@react-three/drei";
import PictureLauncher from "../component/PictureLauncher";
import Earth from "../scene/Earth";
import CameraController from "../scene/CameraController";
import Road from "../scene/Road";

//완성
const Level5 = () => {
    const rotationSpeed = 0.005;
    const cameraHeight = 1.35;

    return (
        <div style={{height: '100vh'}}>
            <Canvas>
                <CameraController cameraHeight={cameraHeight}/>
                {/*<OrbitControls/>*/}
                <ambientLight position={[2, 2, 2]}/>
                <Earth position={[0, -0.7, 0]} rotationSpeed={rotationSpeed}/>
                <Road position={[0, 0, 0]} rotation={[0, 0, 0]} rotationSpeed={rotationSpeed}/>
                <PictureLauncher/>
                <Sky rayleigh={0.5} turbidity={2} distance={10} sunPosition={300}/>
            </Canvas>
        </div>
    );
}

export default Level5;
