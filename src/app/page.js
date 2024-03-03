"use client";
import Charlie from "../../public/images/charwood.png";
import Fourtrack from "../../public/images/130.png";
import system from "../../public/images/3.png";
import Designsystem from "../../public/images/Designsystem.png";
import Shortcuts from "@/components/shortcuts";
import CaseThumbnail from "@/components/caseThumbnail";
import { Pellux } from "@/components/rive";
import ContactForm from "../components/contactForm";

export default function Home() {
  return (
    <>
      {/* <div className="h-screen bg-black bg-opacity-50">
        <ContactForm />
      </div> */}
      <main className="mx-4  flex min-h-screen flex-col md:mx-8 ">
        <div className=" gap-4 pb-12  pt-96 ">
          <h1 className=" max-w-4xl text-2xl  font-normal tracking-tight md:text-4xl    ">
            A Product Designer from Sweden, committed to creating meaningful
            products and user-friendly experiences that speak to both heart and
            mind.
          </h1>
        </div>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3 lg:gap-6">
          <Shortcuts className="col-span-full lg:col-span-1" />
          <CaseThumbnail
            project="Charlie"
            description="Product Design"
            src={Charlie}
            path="/charlie"
            className="col-span-full lg:col-span-2"
          />
          <CaseThumbnail
            project="Fourtrack"
            description="Product Design"
            path="/fourtrack"
            src={Fourtrack}
            className="col-span-full lg:col-span-2"
          />
          <CaseThumbnail
            project="Charlie"
            description="Design System"
            path="/designsystem"
            src={system}
            className="col-span-full lg:col-span-1"
          />
        </div>
        <Pellux className="my-12 h-80" />
      </main>
    </>
  );
}
