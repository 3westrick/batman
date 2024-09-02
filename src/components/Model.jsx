import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react"

useGLTF.preload('/batman.glb')

export default function Model(){
    const group = useRef(null);
    const {animations, scene} = useGLTF('/batman.glb')
    const {actions, clips} = useAnimations(animations, scene)
    const scroll = useScroll()

    useEffect(() => {
        // console.log(actions)
        if (actions['IDLE001_1']){
            actions['IDLE001_1'].play().paused = true
        }
        
    }, [])

    useFrame(
        () => 
            (actions['IDLE001_1'].time = 
                (actions['IDLE001_1']?.getClip().duration * scroll.offset) / 1.5)
    )

    return (
        <group ref={group}>
            <primitive object={scene}/>
        </group>
    )
}