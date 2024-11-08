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

export default function Charlie() {
  return (
    <>
      <main className="mx-4 pt-32 md:mx-8">
        <section className=" mb-16">
          <h1 className=" mb-3 font-display text-4xl">Charlie</h1>
          <h1 className=" max-w-sm font-display text-4xl text-secondary  ">
            Rethinking banking in the U.S for the 62+
          </h1>
        </section>
        <div>
          <Image
            layout="responsive"
            className=" aspect-auto rounded-2xl object-cover"
            src={img}
            alt="charwood"
          />
        </div>
        <section className="flex flex-col items-end  py-16">
          <div className=" flex max-w-3xl flex-col gap-6 text-2xl xl:text-2xl">
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
          <h3 className="max-w-7xl self-start py-24 font-display text-6xl ">
            With efficient smart logistics and refillable packaging, we’re
            currently working on På(fyll) – a new circular service in the
            Nordics that delivers everyday household items directly to people’s
            doorsteps.
          </h3>
        </section>

        <div>
          <Image
            layout="responsive"
            className=" rounded-2xl object-cover"
            src={depositScreens}
            alt="charwood"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 py-6">
          <Image
            className="aspect-square rounded-2xl object-cover"
            src={brand}
            alt="charwood"
          />
          <Image
            className="aspect-square rounded-2xl object-cover"
            src={fishingCard}
            alt="charwood"
          />
        </div>
        <div>
          <Image
            layout="responsive"
            className=" rounded-2xl object-cover"
            src={computer}
            alt="charwood"
          />
        </div>
        <div className="py-6">
          <Image
            layout="responsive"
            className=" rounded-2xl object-cover"
            src={signup}
            alt="signup"
          />
        </div>
        <div className="pb-6">
          <Image
            layout="responsive"
            className=" rounded-2xl object-cover"
            src={transactions}
            alt="signup"
          />
        </div>
        <div className="pb-6">
          <Image
            layout="responsive"
            className=" rounded-2xl object-cover"
            src={fraud}
            alt="signup"
          />
        </div>
        <div className="pb-6">
          <Video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            src={fraudVideo}
            className=" z-50 aspect-square h-full w-full overflow-hidden rounded-2xl object-cover md:aspect-auto"
          />
        </div>
      </main>
    </>
  );
}
3;
