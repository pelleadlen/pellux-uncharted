"use client";

import Image from "next/image";
import img from "../../../public/images/charwood.png";
import fishingCard from "../../../public/images/charlie/card.png";
import depositScreens from "../../../public/images/charlie/deposit.png";

import computer from "../../../public/images/charlie/computer.png";
import brand from "../../../public/images/charlie/brand2.png";
import signup from "../../../public/images/charlie/signup.png";
import transactions from "../../../public/images/charlie/transactions.png";
import fraud from "../../../public/images/charlie/fraud.png";
import Video from "next-video";
import fraudVideo from "/videos/fraudvideo.mp4";

export default function Charlie() {
  return (
    <>
      <main className='mx-4 md:mx-8 pt-32'>
        <section className=' mb-16'>
          <h1 className=' text-4xl mb-3 font-display'>Charlie</h1>
          <h1 className=' text-4xl font-display text-secondary max-w-sm  '>
            Rethinking banking in the U.S for the 62+
          </h1>
        </section>
        <div>
          <Image
            layout='responsive'
            className=' aspect-auto rounded-2xl object-cover'
            src={img}
            alt='charwood'
          />
        </div>
        <section className='flex flex-col items-end  py-16'>
          <div className=' max-w-3xl xl:text-2xl flex flex-col gap-6 text-2xl'>
            <p>
              Being the leading online publishers for everything street-wear,
              high-fashion and culture, Highsnobiety asked A Color Bright to
              design a mobile app delivering the very best selection of
              editorial and product.
            </p>
            <p>
              We partnered with their core team to deliver a seamless extension
              to their offering, refining their design language for the digital
              world along the way. I was overseeing the whole design and
              development process until a successful public launch in Fall 2022.
            </p>
          </div>
          <h3 className='self-start py-24 max-w-7xl text-6xl font-display '>
            With efficient smart logistics and refillable packaging, we’re
            currently working on På(fyll) – a new circular service in the
            Nordics that delivers everyday household items directly to people’s
            doorsteps.
          </h3>
        </section>

        <div>
          <Image
            layout='responsive'
            className=' rounded-2xl object-cover'
            src={depositScreens}
            alt='charwood'
          />
        </div>
        <div className='grid grid-cols-2 gap-6 py-6'>
          <Image
            className='object-cover rounded-2xl aspect-square'
            src={brand}
            alt='charwood'
          />
          <Image
            className='object-cover rounded-2xl aspect-square'
            src={fishingCard}
            alt='charwood'
          />
        </div>
        <div>
          <Image
            layout='responsive'
            className=' rounded-2xl object-cover'
            src={computer}
            alt='charwood'
          />
        </div>
        <div className='py-6'>
          <Image
            layout='responsive'
            className=' rounded-2xl object-cover'
            src={signup}
            alt='signup'
          />
        </div>
        <div className='pb-6'>
          <Image
            layout='responsive'
            className=' rounded-2xl object-cover'
            src={transactions}
            alt='signup'
          />
        </div>
        <div className='pb-6'>
          <Image
            layout='responsive'
            className=' rounded-2xl object-cover'
            src={fraud}
            alt='signup'
          />
        </div>
        <div className='pb-6'>
          <Video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            src={fraudVideo}
            className=' h-full rounded-2xl overflow-hidden aspect-square md:aspect-auto z-50 w-full object-cover'
          />
        </div>
      </main>
    </>
  );
}
3;
