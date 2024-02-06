"use client";
import CaseGrid from "@/components/caseGrid";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <>
      <main className='flex  min-h-screen flex-col mx-4 md:mx-8 '>
        <div className=' pt-96 pb-6  gap-4    '>
          <h1 className=' max-w-4xl text-2xl  md:text-4xl font-normal tracking-[-0.055em]    '>
            A Product Designer from Sweden, committed to creating meaningful
            products and user-friendly experiences that speak to both heart and
            mind.
          </h1>
        </div>
        <CaseGrid />
        <ContactSection />
      </main>
    </>
  );
}
