import React from "react";
import Battery from "./battery";
import Wifi from "./wifi";
import DateTime from "./dateTime";
import Element from "./element";
import DynamicIsland from "./dynamicIsland";
import Notification from "../notifications";
import LeftElement from "./leftElement";
import App from "./navApp"
import ReactDOM from "react-dom";
import Mail from "../mail";

const notification = {
  url: "/images/General/SVG/close.svg",
  alt: "something",
  content: "Your message has been sent successfully",
};

const elements = [
  {
    alt: "Search",
    url: "/images/General/SVG/Search.svg",
  },
  {
    alt: "Control Center",
    url: "/images/General/SVG/ControlCenter.svg",
  },
  {
    alt: "Siri",
    url: "/images/General/Siri.png",
  },
];

export default function Navbar(props) {
  
  const elements_obj = elements.map((element) => {
    return <Element key={element.alt} alt={element.alt} url={element.url} />;
  });

  const leftElements_obj = props.map((element) => {
    return <LeftElement key={element.name} name={element.name} apps={
      element.apps.map((app) => {
        return <App key={app.name} name={app.name} type={app.type} src={app.img} content={app.content} />;
      })
    }/>;
  });

  leftElements_obj.push(<LeftElement key="Contact" name="Contact" apps={[
    <App key={"Mail"} name={"Mail"} type={"App"} src={"/images/General/SVG/Mail.svg"} content={""} func={
      (name, content, btnRef) => {
        const component = <Mail openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    } />,
    <App key={"Phone"} name={"Phone"} type={"App"} src={"/images/General/SVG/Phone.svg"} content={""} func={
      (name, content, btnRef) => {
        if (btnRef.current) {
          btnRef.current.addEventListener("click", () => {
            window.location.href = "tel:+40790570919";
          });
        }
      }
    } />,
  ]} />);
  
  return (
    <div className="relative">
      <nav className="z-40 relative flex w-screen h-8 text-white">
        <div className="absolute h-full w-full lg:backdrop-filter lg:backdrop-blur-lg lg:bg-black/20"></div>
        <div className="flex items-center justify-between w-full h-full lg:px-8 z-10">
          <div className="hidden lg:flex items-center lg:space-x-4 lg:text-base font-black">
            <img src="/images/General/logo.png" alt="logo" className="h-6"/>
            {leftElements_obj}
          </div>
          <div className="flex flex-grow items-center lg:justify-end flex-row-reverse lg:flex-row lg:space-x-2">
            <div className="flex items-center flex-grow justify-end space-x-2 mr-2 lg:mr-0">
              <div className="flex flex-grow justify-center">
                <DynamicIsland url={notification.url} alt={notification.alt} content={notification.content}/>
              </div>
              <Battery />
              <Wifi />
            </div>
            {elements_obj}
            <DateTime />
          </div>
        </div>
      </nav>
      <Notification url={notification.url} alt={notification.alt} content={notification.content}/>
    </div>
  );
}
