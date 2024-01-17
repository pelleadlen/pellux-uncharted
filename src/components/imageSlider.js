import Image from "next/image";
import Me from "../../public/images/test.png";
import pellux from "../../public/images/pelluxblank.png";
import charlie from "../../public/images/Charlie.png";
import jo from "../../public/images/jo.jpeg";
import { useState } from "react";

const imgs = [
  { imgSrc: Me },
  { imgSrc: jo },
  { imgSrc: pellux },
  { imgSrc: charlie },
];

const ImageSlider = (props) => {
  const [currentImage, setCurrentImage] = useState(imgs[0].imgSrc);
  return (
    <div className={` ${props.className}`}>
      <div className='relative'>
        <Image
          className=' aspect-square object-cover object-top rounded-2xl      '
          src={currentImage}
        />
        <div className=' flex gap-2 absolute bottom-6 left-6'>
          {imgs.map((image, index) => (
            <Image
              onClick={() => setCurrentImage(image.imgSrc)}
              key={index}
              className={`h-12 w-12  object-cover object-top rounded ${
                currentImage === image.imgSrc
                  ? "outline outline-2 outline-primary"
                  : "hover:outline outline-2 hover:outline-gray-600"
              }`}
              src={image.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
