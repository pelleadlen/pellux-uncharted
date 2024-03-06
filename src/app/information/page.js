"use client";
import Image from "next/image";
import img from "../../../public/images/myself.jpg";

import { RxCircle } from "react-icons/rx";
import LocalTime from "./localTime";

export default function Information() {
  return (
    <>
      <section className=" mx-4  ">
        <div className=" mt-16 flex flex-col items-center justify-center py-36">
          <h1 className="mb-12 max-w-3xl text-center font-display text-2xl tracking-tight md:text-4xl">
            I'm Pelle Adlén. Based in Malmö, Sweden. Happiest when collaborating
            with great people to design purposeful digital products.
          </h1>
          <LocalTime />
        </div>
        <Image
          className="max-h-screen w-full rounded-2xl object-cover "
          src={img}
        />
        <div className="font-text container mx-auto flex flex-col items-end py-16 text-lg md:text-xl">
          <div className="flex max-w-3xl flex-1 flex-col gap-6">
            <div className="font-medium">Information</div>
            <div className="text-normal flex max-w-3xl flex-col gap-6 text-secondary">
              <p>
                Driven by my curiosity, I have become a well-rounded designer
                who feels comfortable throughout the entire process of creating
                digital products, from start to finish. Currently working as an
                independent product designer. Previously at EY Doberman.
              </p>
              <p>
                I believe in the power of collaboration. I want to help make
                products that help people, are more beautiful, and more fun. I’m
                passionate about combining research, technology, and aesthetics
                to produce compelling stories, products, and digital
                experiences.
              </p>
              <p>
                I'm a lifelong learner, consistently updating my skills with the
                latest design technologies and tools. When I'm not working, you
                can find me signing up for new product waitlists, appreciating
                South American food, tinkering with development, teaching
                design, and creating music
              </p>
            </div>
            <p className="text-base font-medium">
              For more information or collaborations - please email
              <a href="mailto:pelleadlen@gmail.com" className="ml-1 underline">
                pelleadlen@gmail.com
              </a>
            </p>
            <div className="flex flex-1 flex-col gap-6 py-12">
              <div className="font-medium">Services</div>
              <div className="text-normal flex flex-col gap-6 text-secondary">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    User Experience Design
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    Interactive Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    User Research & Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    UI Development
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    Design Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    Interface Design
                  </li>
                  <li className="flex items-center gap-2">
                    <RxCircle />
                    Product Strategy
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="font-medium">Colophon</div>
              <div className="text-normal flex flex-col gap-6 text-secondary">
                <p>
                  Built with Next.js and Tailwind CSS. Hosted on Vercel.
                  Portfolio contains both commissioned and studio projects.
                  Studio ones includes project team with different talents and
                  responsibilities. Projects including an agency name were
                  designed and created during my employment there → It’s not a
                  one man show.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
