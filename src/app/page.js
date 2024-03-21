"use client";
import Charlie from "../../public/images/charwood.png";
import Fourtrack from "../../public/images/130.png";
import system from "../../public/images/3.png";
import Shortcuts from "@/components/shortcuts";
import CaseThumbnail from "@/components/caseThumbnail";
import { Pellux } from "@/components/rive";
import Clavier from "@/components/clavier/clavier";
import HeroText from "@/components/heroText";

export default function Home() {
  return (
    <>
      <main className="md:mx-2  ">
        <section className=" mt-14 pt-6">
        <HeroText />
        </section>
      <div className="mt-24 grid grid-cols-1 items-stretch gap-2 lg:grid-cols-3 lg:gap-2">
      <div className="bg-[#8EC9FF] col-span-1 rounded-lg flex items-center justify-center ">
        <Clavier />
        </div>
        <CaseThumbnail
            project="Charlie"
            description="Product Design"
            src={Charlie}
            path="/charlie"
            className="col-span-full lg:col-span-2"
          />
          </div>
        {/* <div className=" gap-4 pb-12  mt-96 ">
          <h1 className=" max-w-5xl text-2xl pt-52 font-normal tracking-tight md:text-[3rem] leading-[1.2]   ">
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
        <Pellux className="my-12 h-80" /> */}
      </main>
    </>
  );
}
