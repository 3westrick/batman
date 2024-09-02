// import Scene from "@/components/Scene";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Scene'), {ssr: false})

export default function Home() {
  return (
    <main className="h-dvh bg-gradient-to-bl from-stone-900 to-slate-950 text-stone-100">
      <Scene/>
    </main>
    
  );
}
