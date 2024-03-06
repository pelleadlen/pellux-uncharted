import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const data = [
  {
    title: "About me",
    color: "bg-secondary",
    textColor: "",
    description:
      "I'm Pelle Adlén. Based in Malmö, Sweden. Happiest when collaborating with great people to design purposeful digital products.",
    link: "/about",
    isExternal: false,
  },
  {
    title: "Archive",
    color: "bg-primary",
    textColor: "text-white",
    description:
      "Selection of recent and confidential work that I recently worked on",
    link: "/archive",
    isExternal: false,
  },
  {
    title: "Contact",
    color: "bg-tertiary",
    description:
      "Do you have a business, idea or product you want to bring to life? Let’s grab a coffee and see how we can collaborate together.",
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
                className={`grid min-h-14 min-w-14 place-items-center ${item.textColor} ${item.color} rounded-lg`}
              >
                <RxArrowTopRight className="h-6 w-6" />
              </div>
              <div className="flex flex-col justify-center overflow-hidden font-display">
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
