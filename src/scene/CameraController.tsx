import {useFrame} from "@react-three/fiber";
import {Vector3} from "three";

const CameraController = () => {
    const cameraHeight = 1;

    useFrame((state) => {
        state.camera.lookAt(new Vector3(cameraHeight, cameraHeight, 0));
        state.camera.position.x = cameraHeight * -1;
        state.camera.position.y = cameraHeight;
        state.camera.position.z = 0;
    });

    return null;
}

export default CameraController;