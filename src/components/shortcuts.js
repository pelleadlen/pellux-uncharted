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
    <div className='bg-surface w-full p-6 rounded-2xl'>
      <p className='font-display mb-12  '>Shortcuts</p>

      <ul className='flex cursor-pointer justify-center flex-col gap-4'>
        {data.map((item, index) => (
          <li key={index}>
            <div className='flex gap-4 hover:bg-surfaceHover  font-text p-2  rounded-lg'>
              <div
                className={`grid place-items-center min-h-14 min-w-14 ${item.textColor} ${item.color} rounded-lg`}>
                <RxArrowTopRight className='h-6 w-6' />
              </div>
              <div className='overflow-hidden flex flex-col justify-center font-display'>
                {item.isExternal ? (
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                <p className='text-secondary truncate'>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shortcuts;
