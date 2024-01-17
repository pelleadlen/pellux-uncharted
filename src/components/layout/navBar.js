import Image from "next/image";
import Smiley from "../../../public/svg/Smiley.svg";
import FramerMagnetic from "../framerMagnetic";
import Link from "next/link";

const LinkWrapper = ({ name, href }) => {
  return (
    <FramerMagnetic>
      <Link
        href={href}
        className=' p-2 tracking-tight hover:text-gray-700 cursor-pointer  '>
        {name}
      </Link>
    </FramerMagnetic>
  );
};

const NavBar = () => {
  return (
    <header className=' py-4 w-full px-4 lg:px-8 '>
      <nav class className='flex justify-between items-center  '>
        <Link href='/'>
          <Image
            className='cursor-pointer w-6 h-6'
            src={Smiley}
            alt='smiley face'
          />
        </Link>
        <div className='flex '>
          <LinkWrapper href='/information' name='Information' />
          <LinkWrapper href='/' name='Work' />
          <LinkWrapper href='/archive' name='Archive' />
          <LinkWrapper href='/' name='Get in touch' />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
