import Footer from "./layout/footer";
import { Pellux } from "./rive";

import { RxArrowRight } from "react-icons/rx";

const ContactSection = () => {
  return (
    <section className='py-4 '>
      <Pellux className='h-96' />
      <div className=' text-xl max-w-xs md:text-2xl font-normal font-display '>
        <h3 className=' text-gray-900'>
          Interested in collaborating or just want to talk?
        </h3>
        <a className='underline py-4 items-center flex  cursor-pointer'>
          Get in touch
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
