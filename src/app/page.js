"use client";
import About from "@/app/information/about";
import CaseGrid from "@/components/caseGrid";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <>
      <main className='flex  min-h-screen flex-col mx-4 md:mx-8 '>
        <h1 className=' font-display text-2xl py-12  tracking-[ -0.0225rem] text-gray-900 max-w-[500px] leading-tight    '>
          Hi, I'm Pelle Adlén, a Product Designer creating user-friendly
          experiences & systems with a focus on aesthetics and functionality.
        </h1>
        <CaseGrid />
        <ContactSection />
      </main>
    </>
  );
}
