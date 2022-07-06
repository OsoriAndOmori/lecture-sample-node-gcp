import React, {useState} from "react";
import useInterval from "../hooks/useInterval";
import {Vector3} from "three";
import Picture from "./Picture";

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
                <Picture key={'rendering-queue-' + index} position={value.initPosition}
                         imageNumber={value.imageNumber}/>
            ))}
        </>
    );
}

export default PictureLauncher;