import Footer from "./layout/footer";
import { Pellux } from "./rive";

const ContactSection = () => {
  return (
    <section className='py-4 '>
      <Pellux className='h-96' />
      <div className='  max-w-2xl flex flex-col tracking-tight gap-8 text-2xl md:text-2xl  font-display py-8 '>
        <h3>
          Do you have a business, idea or product you want to bring to life?
          Let’s grab a coffee and see how we can collaborate together.
        </h3>
        <a
          href='mailto:pelleadlen@gmail.com'
          className='underline  cursor-pointer'>
          Get in touch
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
