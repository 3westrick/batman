'use client'
import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"


function Loader() {
    const {progress, active} = useProgress()
    return <Html center>{progress.toFixed(1)}% loading</Html>
}

export default function Scene() {
    return (
        <div className="h-screen">
            <Canvas gl={{antialias: true}} dpr={[1,2]} className="relative h-svh">
                <directionalLight position={[-5,-5,5]} intensity={2}/>
                <Suspense fallback={<Loader/>}>
                    <ScrollControls damping={1} pages={3}>
                        <Model/>
                    </ScrollControls>
                    
                </Suspense>
            </Canvas>
        </div>
    )
}