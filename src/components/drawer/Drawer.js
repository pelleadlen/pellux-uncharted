"use client";
import { Drawer } from "vaul";
import { motion, useScroll, useTransform } from "framer-motion";
const Sheet = () => {
  return (
    <Drawer.Root shouldScaleBackground={true}>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0  bg-black/40" />

        <Drawer.Content className=" fixed bottom-0 left-0 right-0  flex h-[96%] flex-col overflow-hidden rounded-t-[16px] bg-zinc-100">
          <Drawer.Handle className="my-4 h-8 bg-black" />
          <Drawer.Close>Close</Drawer.Close>
          <div data-lenis-prevent className=" z-50 flex-1 overflow-y-auto ">
            <div className="mx-auto mt-12 h-full px-4  text-9xl     font-bold">
              {" "}
              Pelle, a seasoned product designer, dedicates his career to
              creating intuitive and aesthetically pleasing user interfaces.
              With a keen eye for detail, he transforms complex user
              requirements into simple and functional designs. Often
              collaborating with cross-functional teams, Pelle ensures that
              every product not only meets business goals but also provides an
              exceptional user experience. His approach blends creativity with
              strategic thinking, continuously pushing the boundaries of design
              innovation. Whether working on web platforms or mobile
              applications, Pelle's commitment to excellence and passion for
              design shine through in every project he undertakes.
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default Sheet;
