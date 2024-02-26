import Image from "next/image";
import img from "../../../public/images/130.png";

export default function Fourtrack() {
  return (
    <>
      <main className='mx-4 md:mx-8 pt-32'>
        <section className=' mb-16'>
          <h1 className=' text-4xl mb-3 font-display'>Fourtrack</h1>
          <h1 className=' text-4xl font-display text-secondary max-w-md text-balance  '>
            Collaborative songwriting in the browser
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
      </main>
    </>
  );
}
3;
