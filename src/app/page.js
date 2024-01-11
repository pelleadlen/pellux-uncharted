'use client'  
import CaseGrid from "@/components/caseGrid";
import ContactSection from "@/components/contactSection";







export default function Home() {
  return (
    <>
    
    <main className="flex  min-h-screen flex-col mx-4 md:mx-8 ">
 <CaseGrid /> 

<ContactSection />
    </main>
</>
  )
}

