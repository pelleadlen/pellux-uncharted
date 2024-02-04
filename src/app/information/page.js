import Image from "next/image";
import img from "../../../public/images/small.png";
import Footer from "@/components/layout/footer";

export default function Information() {
  return (
    <>
      <section className=' '>
        <div className=' px-4 max-w-4xl py-12 mx-auto'>
          <div className=' h-[60vh] flex items-center'>
            <h1 className=' text-4xl leading-tight text-balance tracking-tight md:text-center font-display '>
              I'm Pelle Adlén. A Product Designer based in Malmö/Copenhagen —
              working across all timezones. I'm happiest when collaborating with
              great people to design purposeful products.
            </h1>
          </div>

          <Image className='rounded-3xl w-full' src={img} />

          <div className=' border-dashed border-gray-600 border-b md:text-xl  py-12 flex flex-col md:flex-row w-full justify-between '>
            <p className=' font-display mb-4 text-secondary'>Information</p>
            <p className=' max-w-lg '>
              I have become a well-rounded designer who feels comfortable
              throughout the entire process of creating digital products, from
              start to finish.
              <br />
              <br /> With experience in both design and web development, I
              collaborate closely with both designers and developers, always
              seeking elegant solutions while staying within technical
              limitations. Together with design and research I ensure that the
              products not only meet user expectations but also bring meaningful
              value to the businesses and the people who use them.
            </p>
          </div>
          <div className=' border-dashed border-gray-600 border-b md:text-xl  py-12 flex flex-col md:flex-row w-full justify-between '>
            <p className=' font-display mb-4 text-secondary'>Information</p>
            <p className=' max-w-lg '>
              I have become a well-rounded designer who feels comfortable
              throughout the entire process of creating digital products, from
              start to finish.
              <br />
              <br /> With experience in both design and web development, I
              collaborate closely with both designers and developers, always
              seeking elegant solutions while staying within technical
              limitations. Together with design and research I ensure that the
              products not only meet user expectations but also bring meaningful
              value to the businesses and the people who use them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
