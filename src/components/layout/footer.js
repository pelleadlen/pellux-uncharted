"use client";

import { useWindowSize } from "react-use";
import useOS from "@/hooks/useOS";

const socialLinks = [
  { key: "Email", name: "Email" },
  { key: "linkedIn", name: "LinkedIn" },
  { key: "ReadCV", name: "Read.cv" },
  { key: "Cosmos", name: "Cosmos" },
  { key: "github", name: "Github" },
];

const Footer = () => {
  const { width, height } = useWindowSize();
  const os = useOS();

  return (
    <footer
      style={{
        clipPath: "polygon(0% 0,100% 0%, 100% 100%,0 100%",
      }}
      className=" relative mt-8   h-16   "
    >
      <div className="fixed bottom-0 flex  h-16 w-full items-center justify-between bg-surfaceSecondary p-2">
        <div className="hidden gap-2 md:flex">
          <div>
            {width}x{height}
          </div>
          <div>{os}</div>
        </div>
        <ul className="flex justify-center gap-6 md:justify-end ">
          {socialLinks.map((link) => (
            <li
              key={link.key}
              className="font-display text-secondary dark:text-[#E6E6E6]"
            >
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
