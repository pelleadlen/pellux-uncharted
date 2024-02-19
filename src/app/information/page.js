import Image from "next/image";
import img from "../../../public/images/myself.jpg";
import Footer from "@/components/layout/footer";
import { RxCircle } from "react-icons/rx";
import LocalTime from "./localTime";

export default function Information() {
  return (
    <>
      <section className=' mx-4  '>
        <div className=' mt-16 py-36 flex flex-col justify-center items-center'>
          <h1 className='max-w-3xl mb-12 text-2xl md:text-4xl font-display text-center tracking-tight'>
            I'm Pelle Adlén. Based in Malmö, Sweden. Happiest when collaborating
            with great people to design purposeful digital products.
          </h1>
          <LocalTime />
        </div>
        <Image
          className='w-full max-h-screen object-cover rounded-2xl '
          src={img}
        />
        {/* <div className='flex flex-col gap-6'>
          
          <div className=' py-12 border-b border-black flex flex-col md:flex-row justify-between items-start gap-6  w-full font-display text-lg'>
            <div className='text-secondary'>Information</div>
            <div className='flex flex-1 flex-col gap-6 max-w-full md:max-w-xl'>
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
              <p className='text-base'>
                For more information or collaborations - please email
                <a
                  href='mailto:pelleadlen@gmail.com'
                  className='underline ml-1'>
                  pelleadlen@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className=' py-12 flex flex-col md:flex-row justify-between items-start gap-6  w-full font-display text-lg'>
            <div className='text-secondary'>Colophon</div>
            <div className='flex flex-1 flex-col gap-6 max-w-full md:max-w-xl'>
              <p>
                Built with Next.js and Tailwind CSS. Hosted on Vercel. Portfolio
                contains both commissioned and studio projects. Studio ones
                includes project team with different talents and
                responsibilities. Projects including an agency name were
                designed and created during my employment there → It’s not a one
                man show.
              </p>
            </div>
          </div>
        </div> */}
        <Footer />
      </section>
    </>
  );
}
