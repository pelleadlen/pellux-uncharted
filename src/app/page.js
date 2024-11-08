"use client";
import { useState, useEffect, useCallback } from "react";
import Charlie from "../../public/images/charwood.png";
import Ft from "../../public/images/ftrack.png";
import CaseThumbnail from "@/components/layout/caseThumbnail";
import { Pellux } from "@/components/rive";
import Clavier from "@/components/clavier/clavier";
import HeroText from "@/components/layout/heroText";
import ContactStatic from "@/components/contact/contactStatic";
import CueFullscreen from "@/components/cue/CueFullscreen";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";
import Sheet from "@/components/drawer/Drawer";

export default function Home() {
  const [isCueShowed, setIsCueShowed] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const closeCue = useCallback(() => {
    setIsCueShowed(false);
  }, [setIsCueShowed]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCue();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeCue]);

  return (
    <>
      <main className="md:mx-2  ">
        <section className=" mt-14 pt-6">
          <HeroText />
        </section>

        <div className="mt-24 grid  grid-cols-1 items-stretch gap-2  lg:grid-cols-3 lg:gap-2">
          <div className="col-span-1 flex items-center justify-center rounded-lg bg-[#8EC9FF] ">
            <Clavier />
          </div>
          <CaseThumbnail
            src={Charlie}
            path="/charlie"
            className="col-span-full lg:col-span-2"
          />
          <CaseThumbnail
            project="Fourtrack"
            description="Product Design"
            src={Ft}
            path="/fourtrack"
            className="col-span-full lg:col-span-2"
          />
          <div className=" col-span-1 flex items-center justify-center rounded-lg bg-surface ">
            <ContactStatic />
          </div>
          <div className="col-span-1 flex items-center justify-center rounded-lg bg-surface  ">
            <Pellux className=" h-full w-60" />
            <Sheet />
          </div>

          <AnimatePresence>
            {isCueShowed && <CueFullscreen closeCue={closeCue} />}
          </AnimatePresence>
          <motion.div
            onClick={() => setIsCueShowed(true)}
            className="col-span-full flex items-center justify-center rounded-lg bg-surface lg:col-span-2 "
          >
            <motion.div
              layoutId="cue"
              transition={{
                type: "spring",
                damping: 20,
                mass: 0.75,
                stiffness: 100,
              }}
            >
              <Image src="/images/cue/cue1.png" height={200} width={250} />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
