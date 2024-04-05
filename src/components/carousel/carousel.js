import Image from "next/image"
import eon from "/public/images/archive/eon2.png";


const Carousel = () => {
  return (
    <div className="bg-pink-500"><Image alt="hey" src={eon}/></div>
  )
}

export default Carousel