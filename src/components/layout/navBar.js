
import Image from "next/image";
import Smiley from "../../../public/svg/Smiley.svg";
import FramerMagnetic from "../framerMagnetic";


const Link = ({ name }) => {

  return (
    <FramerMagnetic>
    <a className=' p-2 text-lg md:text-2xl tracking-tight hover:text-gray-700 cursor-pointer  '>
      {name}
    </a>
  
    </FramerMagnetic>
  );
};

const NavBar = () => {

  return (
    <header className=" py-4 w-full px-4 lg:px-8 ">
      <nav class className='flex justify-between items-center  '>
        <div>

        <Image className="cursor-pointer w-5 h-5 md:w-8 md:h-8" src={Smiley} alt="smiley face" />
        </div>
        <div className='flex md:gap-4'>
          <Link name='Information' />
          <Link name='Work' />
          <Link name='Archive' />
          <Link name='Get in touch' />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
