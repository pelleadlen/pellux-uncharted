import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const data = [
  {
    title: "About me",
    color: "bg-secondary",
    textColor: "",
    description:
      "Info and fun stuff",
    link: "/about",
    isExternal: false,
  },
  {
    title: "Archive",
    color: "bg-primary",
    textColor: "text-white",
    description:
      "Selection of recent and confidential work.",
    link: "/archive",
    isExternal: false,
  },
  {
    title: "Contact",
    color: "bg-tertiary",
    description:
      "Let's discuss how we can collaborate.",
    link: "mailto:someone@example.com",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    color: "bg-warning",
    description: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/yourprofile",
    isExternal: true,
  },
];

const Shortcuts = () => {
  return (
    <div className="w-full rounded-2xl bg-surface p-4 md:p-6">
      <p className="mb-4 font-display md:mb-12  ">Shortcuts</p>

      <ul className="flex cursor-pointer flex-col justify-center gap-4">
        {data.map((item, index) => (
          <li key={index}>
            <div className="font-text flex gap-4  rounded-lg p-2  hover:bg-surfaceHover">
              <div
                className={`grid  min-h-[72px] min-w-[72px] place-items-center ${item.textColor} ${item.color} rounded-lg`}
              >
                <RxArrowTopRight className="h-8 w-8" />
              </div>
              <div className="flex flex-col text-xl justify-center overflow-hidden font-display">
                {item.isExternal ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                <p className="truncate text-secondary">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shortcuts;
