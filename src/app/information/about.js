import { RxCircle } from "react-icons/rx";
import ImageSlider from "./imageSlider";

const Services = () => {
  return (
    <>
      <div>
        <h3 className='text-gray-500 font-display py-2'>Services</h3>
        <div className=' flex flex-col lg:flex-row  border-t gap-4 border-dashed py-6 border-gray-600 '>
          <h4 className='font-display flex-1'>Product Design</h4>
          <ul className='text-base'>
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
        <div className='flex flex-col lg:flex-row gap-4 border-t border-b border-dashed py-6 border-gray-600 '>
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
    </>
  );
};

const About = () => {
  return (
    <section className='my-4' id='information'>
      <div className=' flex flex-col mb-20 md:grid gap-8 md:grid-cols-8 lg:grid-cols-12'>
        <ImageSlider className='  md:col-span-4 lg:col-span-6 mb-8' />

        <div
          className='md:col-span-4 lg:col-span-6 w-full  lg:min-w-96  flex flex-col text-base 
         col-end-12'>
          <div className='mx-auto w-full lg:w-3/4'>
            <h3 className='text-gray-500 font-display pb-2'>About me</h3>
            <p className='mb-4'>
              I'm a product designer from Sweden, currently headquartered in
              Copenhagen/Malmö, designing across all time zones. With a
              background in music, I bring a unique creative perspective to my
              work, harmonizing aesthetics with functionality.
            </p>
            <p className='mb-4'>
              I have become a well-rounded designer who feels comfortable
              throughout the entire process of creating digital products, from
              start to finish. With experience in both design and web
              development, I collaborate closely with both designers and
              developers, always seeking elegant solutions that are both
              functional and visually appealing, while staying within technical
              limitations.
            </p>
            <p>
              In addition, my engagement in user research helps to ensure that
              the products not only meet user expectations but also bring
              meaningful value to the businesses and the people who use them.
            </p>

            <Services />
            <p className='my-4 '>
              I'm a lifelong learner, consistently updating my skills with the
              latest design technologies and tools. I also enjoy teaching about
              design, allowing me to both share my knowledge and gain fresh
              perspectives.
            </p>
            <p>
              When I'm not working, you can find me signing up for new product
              waitlists, appreciating great productivity apps, tinkering with
              development, and creating music.
            </p>
            <h3 className='text-gray-500 font-display py-2'>Colophon</h3>
            <p className=' leading-tight'>
              Built with Next.js and Tailwind CSS. Hosted on Vercel.
              <br />
              <span className='underline'>Github Repository</span>.
            </p>
            <p className='mt-4'>
              Portfolio contains both commissioned and studio based projects.
              Studio ones includes project team with different talents and
              responsibilities in a joint collaboration. Projects labeled with
              an agency name were designed and created during my employment
              there → It’s not a one man show.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
