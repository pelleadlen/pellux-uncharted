import FramerMagnetic from "../framerMagnetic";

const socialLinks = [
  { key: "Email", name: "Email" },
  { key: "linkedIn", name: "LinkedIn" },
  { key: "ReadCV", name: "Read.cv" },
  { key: "Cosmos", name: "Cosmos" },
  { key: "github", name: "Github" },
];

const Footer = () => {
  return (
    <footer className=' p-6'>
      <ul className='flex gap-6 justify-center md:justify-end '>
        {socialLinks.map((link) => (
          <FramerMagnetic>
            <li className='font-display text-secondary' key={link.key}>
              <a href='#'>{link.name}</a>
            </li>
          </FramerMagnetic>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
