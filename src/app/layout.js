import NavBar from "@/components/layout/navBar";
import "./globals.css";
import localFont from "next/font/local";
import NavBarMobile from "@/components/layout/navBarMobile";

const display = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNowDisplay-Regular.otf",
      weight: "normal",
    },
  ],
});
const text = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNowText-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/HelveticaNowText-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/HelveticaNowText-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/HelveticaNowText-Light.ttf",
      weight: "300",
    },
  ],
});

export const viewport = {
  themeColor: "#E8F5FE",
};

export const metadata = {
  title: "Pelle Adlén - Product designer",
  description: "Pelle Adlén is a product designer & UI developer from Sweden",
};

export default function RootLayout({ children }) {
  const bodyClass = `${display.className} ${text.className}`;
  return (
    <html lang='en'>
      <body className={bodyClass}>
        <NavBar />
        <NavBarMobile />
        {children}
      </body>
    </html>
  );
}
