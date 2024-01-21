import { RxCircle } from "react-icons/rx";
import NavBar from "@/components/layout/navBar";
import ImageSlider from "./imageSlider";
import Footer from "@/components/layout/footer";

export default function Information() {
  return (
    <>
      <div className='min-h-screen'>
        <section className='grid grid-cols-2 '>
          <ImageSlider className=' h-screen sticky top-0' />
          <div className='flex-1 pt-32 pb-24 px-12'>
            <h1 className='font-display font-medium mb-12 text-[40px] leading-none '>
              I'm a product designer from Sweden With a background in music, I
              bring a unique creative perspective to my work, harmonizing
              aesthetics with functionality.
            </h1>
            <div className='flex flex-col gap-4 text-lg'>
              <h4 className='font-display text-gray-500 '>About me</h4>
              <p>
                I have become a well-rounded designer who feels comfortable
                throughout the entire process of creating digital products, from
                start to finish. With experience in both design and web
                development, I collaborate closely with both designers and
                developers, always seeking elegant solutions while staying
                within technical limitations.
              </p>
              <p>
                In addition, my engagement in user research helps to ensure that
                the products not only meet user expectations but also bring
                meaningful value to the businesses and the people who use them.
              </p>
            </div>
            <div className='text-lg mb-6'>
              <h4 className='font-display mt-6 mb-4 text-gray-500 '>
                Services
              </h4>
              <div className='flex justify-between py-6 border-b border-t border-gray-600 border-dashed gap-4'>
                <h4 className='font-display flex-1 '>Product Design</h4>
                <ul className='col-span-2 text-base '>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    UX Research + Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Concept Validation
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    UX Design
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Interactive Prototyping
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Concerns regarding
                  </li>
                </ul>
              </div>
              <div className='flex justify-between py-6 border-b border-gray-600 border-dashed gap-4'>
                <h4 className='font-display flex-1 '>Product Design</h4>
                <ul className='col-span-2 text-base '>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    UX Research + Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Concept Validation
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    UX Design
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Interactive Prototyping
                  </li>
                  <li className='flex items-center gap-2'>
                    <RxCircle />
                    Concerns regarding
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col gap-4 mb-6 text-lg'>
              <p>
                I'm a lifelong learner, consistently updating my skills with the
                latest design technologies and tools. I also enjoy teaching
                about design, allowing me to both share my knowledge and gain
                fresh perspectives.
              </p>
              <p>
                When I'm not working, you can find me signing up for new product
                waitlists, appreciating great productivity apps, tinkering with
                development, and creating music.
              </p>
            </div>
            <div className='flex flex-col gap-4 text-lg'>
              <h4 className='font-display text-gray-500 '>Colophon</h4>
              <p>
                Built with Next.js and Tailwind CSS. Hosted on Vercel.
                <span className='underline'>Github Repository</span>.
              </p>
              <p>
                Portfolio contains both commissioned and studio based projects.
                Studio ones includes project team with different talents and
                responsibilities in a joint collaboration. Projects labeled with
                an agency name were designed and created during my employment
                there → It’s not a one man show.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
