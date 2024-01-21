const socialLinks = [
  { key: "linkedIn", name: "LinkedIn" },
  { key: "ReadCV", name: "Read.cv" },
  { key: "Cosmos", name: "Cosmos" },
  { key: "github", name: "Github" },
];

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse w-full gap-12 md:flex-row py-8  justify-between'>
      <ul className='flex gap-2 md:gap-4 items-center  '>
        {socialLinks.map((link) => (
          <li
            className=' py-1 px-3 w-full flex justify-center   hover:bg-gray-200 bg-gray-100 text-gray-500 rounded-full   tracking-tight'
            key={link.key}>
            <a href='#'>{link.name}</a>
          </li>
        ))}
      </ul>
      {/* <div className=" text-sm">
        <p className=" font-medium mb-1 text-gray-950">Availability</p>
        <div className="text-gray-400">
        <p>Open for new opportunities</p>
        <a className=" underline cursor-pointer ">Get in touch</a>
        </div> */}
    </footer>
  );
};

export default Footer;
