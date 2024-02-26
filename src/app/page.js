"use client";
import Charlie from "../../public/images/charwood.png";
import Fourtrack from "../../public/images/130.png";
import system from "../../public/images/3.png";
import Designsystem from "../../public/images/Designsystem.png";
import Shortcuts from "@/components/shortcuts";
import CaseThumbnail from "@/components/caseThumbnail";
import { Pellux } from "@/components/rive";

export default function Home() {
  return (
    <>
      <main className='flex  min-h-screen flex-col mx-4 md:mx-8 '>
        <div className=' pt-96 pb-12  gap-4 '>
          <h1 className=' max-w-4xl text-2xl  md:text-4xl font-normal tracking-tight    '>
            A Product Designer from Sweden, committed to creating meaningful
            products and user-friendly experiences that speak to both heart and
            mind.
          </h1>
        </div>

        <div className='grid grid-cols-1 items-stretch lg:grid-cols-3 gap-4 lg:gap-6 mt-6'>
          <Shortcuts className='lg:col-span-1 col-span-full' />
          <CaseThumbnail
            project='Charlie'
            description='Product Design'
            src={Charlie}
            path='/charlie'
            className='col-span-full lg:col-span-2'
          />
          <CaseThumbnail
            project='Fourtrack'
            description='Product Design'
            path='/fourtrack'
            src={Fourtrack}
            className='col-span-full lg:col-span-2'
          />
          <CaseThumbnail
            project='Charlie'
            description='Design System'
            path='/designsystem'
            src={system}
            className='lg:col-span-1 col-span-full'
          />
        </div>
        <Pellux className='h-80 my-12' />
      </main>
    </>
  );
}
