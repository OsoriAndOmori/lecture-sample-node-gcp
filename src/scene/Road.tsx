import React, {useRef} from "react";

const Road = (props: JSX.IntrinsicElements['mesh']) => {
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

export default Road;