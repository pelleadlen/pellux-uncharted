"use client";
import FramerMagnetic from "../framerMagnetic";
import { useWindowSize } from "react-use";

const socialLinks = [
  { key: "Email", name: "Email" },
  { key: "linkedIn", name: "LinkedIn" },
  { key: "ReadCV", name: "Read.cv" },
  { key: "Cosmos", name: "Cosmos" },
  { key: "github", name: "Github" },
];

const Footer = () => {
  const { width, height } = useWindowSize();
  return (
    <footer className=" flex items-center justify-between p-6">
      <div className="hidden md:block">
        {width}x{height}
      </div>
      <ul className="flex justify-center gap-6 md:justify-end ">
        {socialLinks.map((link) => (
          <FramerMagnetic>
            <li className="font-display text-secondary" key={link.key}>
              <a href="#">{link.name}</a>
            </li>
          </FramerMagnetic>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
