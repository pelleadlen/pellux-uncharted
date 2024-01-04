const socialLinks = [
  { key: "linkedIn", name: "LinkedIn" },
  { key: "ReadCV", name: "Read.cv" },
  { key: "Cosmos", name: "Cosmos" },
  { key: "email", name: "Email" },
];

const Footer = () => {
  return (

    <footer className="flex flex-col-reverse gap-12 md:flex-row py-8 px-4 md:px-8  justify-between">
      <ul className="flex gap-2 md:gap-4 items-center  ">
        {socialLinks.map((link) => (
          <li className=" py-1 px-3 w-full md:w-auto flex justify-center md:py-2 md:px-4 hover:bg-gray-200 bg-gray-100 text-gray-500 rounded-full text-lg md:text-2xl tracking-tight" key={link.key}>
            <a href='#'>{link.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <p className=" font-medium mb-1 text-gray-950">Availability</p>
        <div className="text-gray-400">
        <p>Open for new collaborations.</p>
        <a className=" underline cursor-pointer ">Get in touch</a>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
