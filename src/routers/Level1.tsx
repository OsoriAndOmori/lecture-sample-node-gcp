import React from 'react';
import '../App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Sky} from "@react-three/drei";
import PictureLauncher from "../component/PictureLauncher";
import Earth from "../scene/Earth";
import CameraController from "../scene/CameraController";
import Road from "../scene/Road";

//공 하나 만들고 길 만들어서 굴리기
const Level1 = () => {
    return (
        <div style={{height: '100vh'}}>
            <Canvas>
                <OrbitControls/>
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

export default Level1;
