import React from "react";
import FooterApp from "./footerapp";

const apps = [
  {
    alt: "Finder",
    src: "/images/General/SVG/Finder.svg",
    className: "lg:block hidden",
  },
  {
    alt: "Launchpad",
    src: "/images/General/Launchpad.png",
    className: "lg:block hidden",
  },
  {
    alt: "Phone",
    src: "/images/General/SVG/Phone.svg",
    className: "lg:hidden block",
  },
  {
    alt: "Mail",
    src: "/images/General/SVG/Mail.svg",
    className: "",
  },
  {
    alt: "Settings",
    src: "/images/General/SVG/Settings.svg",
    className: "",
  },
  {
    alt: "Dashboard",
    src: "/images/General/Dashboard.webp",
    className: "lg:block hidden",
  }
];

export default function Footer() {
  const appsList = apps.map((app) => (
    <FooterApp key={app.alt} alt={app.alt} src={app.src} className={app.className}/>
  ));

  return (
    <div className="relative flex justify-center items-center h-14 mb-5 z-30">
      <div className="relative w-max">
        <div className="absolute h-full w-full backdrop-filter backdrop-blur-lg bg-black/20 rounded-xl border border-white/20"></div>
        <div className="relative z-10 flex justify-center items-center gap-5 p-2">
          {appsList}
          <div className="w-1 h-10 bg-white rounded-full lg:block  hidden"></div>
          <FooterApp alt="Bin" src="/images/General/Bin.png" className={"lg:block hidden"}/>
        </div>
      </div>
    </div>
  );
}
