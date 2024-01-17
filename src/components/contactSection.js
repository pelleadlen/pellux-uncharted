import { Pellux } from "./rive";

import { RxArrowRight } from "react-icons/rx";

const ContactSection = () => {
  return (
    <section className='py-4'>
      <Pellux />
      <div className=' text-xl md:text-4xl font-normal  font-display tracking-tight'>
        <h3 className='max-w-xl text-gray-900'>
          Interested in collaborating or just want to chat? Send me an email!
        </h3>

        <a className='text-gray-500 py-6 items-center flex  cursor-pointer'>
          <RxArrowRight />
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
