'use client'  
import CaseGrid from "@/components/caseGrid";
import { Pellux } from "@/components/rive";
import Rive from "@rive-app/react-canvas";





export default function Home() {
  return (
    <>
    
    <main className="flex  min-h-screen flex-col mx-4 md:mx-8 ">
<Pellux />
<CaseGrid />
    </main>
</>
  )
}

