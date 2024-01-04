import Image from "next/image";
import smallblank from "../../public/images/smallblank.png";
import largeblank from "../../public/images/largeblank.png";



const selectedWork = [
    { key: "one", colSpan: "col-span-2", image: largeblank, description: "description" },
    { key: "two", colSpan: "col-span-1", image: smallblank,description: "description" },
    { key: "three", colSpan: "col-span-1", image: smallblank,description: "description" },
    { key: "four", colSpan: "col-span-2", image: largeblank,description: "description" },
    ];


const CaseGrid = () => {
  return (
    
    <section className="py-4 mt-24 max-w-[1920px] mx-auto h-full grid grid-cols-1 grid-flow-row  md:grid-cols-3 gap-4  ">
       {selectedWork.map(({ key, colSpan,image,description}) => (
<Image alt={description} className={`object-cover rounded-2xl col-span-full aspect-square md:aspect-auto md:${colSpan}`} style={{maxWidth: "100%", height:"auto"}} src={image} id={key} />
      ))}
  </section>
  )
}

export default CaseGrid

