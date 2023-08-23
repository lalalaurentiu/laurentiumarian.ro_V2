import React from "react";
import ReactDOM from "react-dom";
import FooterApp from "./footerapp";
import FolderApp from "../folderApp";
import Launchpad from "../launchpad";
import Mail from "../mail";

export default function Footer(props) {
  const apps = [
    {
      alt: "Finder",
      src: "/images/General/SVG/Finder.svg",
      className: "lg:block hidden",
      func: (name, src, btnRef) => {
        const component = <FolderApp name={name} src={src} openBtn={btnRef}/>;
  
        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    {
      alt: "Launchpad",
      src: "/images/General/Launchpad.png",
      className: "lg:block hidden",
      func: (name, src, btnRef) => {
        const component = <Launchpad apps={props} openBtn={btnRef}/>;
  
        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    {
      alt: "Phone",
      src: "/images/General/SVG/Phone.svg",
      className: "lg:hidden block",
      func:(name, content, btnRef) => {
        if (btnRef.current) {
          btnRef.current.addEventListener("click", () => {
            window.location.href = "tel:+40790570919";
          });
        }
      }
    },
    {
      alt: "Mail",
      src: "/images/General/SVG/Mail.svg",
      className: "",
      func:(name, content, btnRef) => {
        const component = <Mail name={"Footer"} openBtn={btnRef}/>;
  
        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
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


  const appsList = apps.map((app) => (
     <FooterApp key={app.alt} alt={app.alt} src={app.src} className={app.className} func={app.func}/>
  ));

  return (
    <div className="relative flex justify-center items-center h-14 mb-5 z-30">
      <div className="relative w-max">
        <div className="absolute h-full w-full backdrop-filter backdrop-blur-lg bg-black/20 rounded-xl border border-white/20"></div>
        <div className="relative z-10 flex justify-center items-center gap-5 p-2">
          {appsList}
          <div className="w-1 h-10 bg-white rounded-full lg:block hidden"></div>
          <FooterApp alt="Bin" src="/images/General/Bin.png" className={"lg:block hidden"} func={
            (name, content, btnRef) => {
              const component = <FolderApp name={"Bin"} src={"/images/General/Bin.png"} openBtn={btnRef}/>;

              return ReactDOM.createPortal(
                component,
               document.body
              );
            }
          }/>
        </div>
      </div>
    </div>
  );
}
