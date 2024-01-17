import { RxCircle } from "react-icons/rx";
import ImageSlider from "./imageSlider";

const Services = () => {
  return (
    <>
      <div>
        <h3 className='text-gray-500 font-display py-4'>Services</h3>
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
    <section className='mt-24' id='information'>
      <div className=' flex flex-col md:grid gap-8 md:grid-cols-8 lg:grid-cols-12'>
        <ImageSlider className='md:col-span-4 lg:col-span-6 mb-8' />

        <div
          className=' md:col-span-4 lg:col-start-8 w-full  lg:min-w-96 leading-tight flex flex-col text-base 
         col-end-12'>
          <h3 className='text-gray-500 font-display pb-4'>About me</h3>
          <p className='mb-4'>
            Having worked both in design and web development, I have acquired a
            good understanding of different tech stacks and their possibilities.
            This makes me an advocate for both designers and developers, trying
            to find elegant solutions which are both functionally and visually
            pleasing —
          </p>
          <p>
            Having worked both in design and web development, I have acquired a
            good understanding of different tech stacks and their possibilities.
            This makes me an advocate for both designers and developers, trying
            to find elegant solutions which are both functionally and visually
            pleasing —
          </p>
          <Services />
          <h3 className='text-gray-500 font-display py-4'>Colophon</h3>
          <p>
            Having worked both in design and web development, I have acquired a
            good understanding of different tech stacks and their possibilities.
            This makes me an advocate for both designers and developers, trying
            to find elegant solutions which are both functionally and visually
            pleasing —
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
