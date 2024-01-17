"use client";
import About from "@/components/about";
import CaseGrid from "@/components/caseGrid";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <>
      <main className='flex  min-h-screen flex-col mx-4 md:mx-8 '>
        <h1 className='font-display text-2xl max-w-[500px]    '>
          Hi, I'm Pelle Adlén, a product designer focused on creating
          user-friendly experiences through aesthetic and functional design.
        </h1>
        <CaseGrid />
        <About />
        <ContactSection />
      </main>
    </>
  );
}
