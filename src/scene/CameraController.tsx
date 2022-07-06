import {useFrame} from "@react-three/fiber";
import {Vector3} from "three";

interface CameraInterface {
    cameraHeight: number
}

const CameraController = (props : CameraInterface) => {
    useFrame((state) => {
        state.camera.lookAt(new Vector3(props.cameraHeight, props.cameraHeight, 0));
        state.camera.position.x = props.cameraHeight * -1;
        state.camera.position.y = props.cameraHeight;
        state.camera.position.z = 0;
    });

    return null;
}

export default CameraController;