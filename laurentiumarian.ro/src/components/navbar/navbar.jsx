import React from "react";
import Battery from "./battery";
import Wifi from "./wifi";
import DateTime from "./dateTime";
import Element from "./element";
import DynamicIsland from "./dynamicIsland";
import Notification from "../notifications";
import LeftElement from "./leftElement";
import App from "./navApp";

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
  const [data , setData] = React.useState(props.data);

  React.useEffect(() => {
    setData(props.data);
  }, [props]);

  const elements_obj = elements.map((element) => {
    return <Element key={element.alt} alt={element.alt} url={element.url} />;
  });

  const leftElements_obj = data.map((element) => {
    return <LeftElement key={element.name} name={element.name} apps={
      element.apps.map((app) => {
        return <App key={app.name} name={app.name} type={app.type} src={app.img} content={app.content} />;
      })
    }/>;
  });

  leftElements_obj.push(<LeftElement key="Contact" name="Contact" apps={[
    <App key={"NavMail"} name={"navbar"} type={"Mail"} />,
    <App key={"NavPhone"} name={"Phone"} type={"Phone"} />,
  ]} />);

  const [index, setndex] = React.useState(0);

  React.useEffect(() => {
    setndex(0);
  }, []);

  const [notification, setNotification] = React.useState(props.notifications);

  React.useEffect(() => {
    if (index < props.notifications.length) {
      setNotification(
        props.notifications
      );
      
    } else {
      setNotification(null);
    }
  }, [index]);

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
              <div className="w-[100px] flex flex-grow justify-center">
                {
                 index < props.notifications.length ? <DynamicIsland key={index + 1} url={notification[index].img} alt={notification[index].name} content={notification[index].content}/> : 
                 <DynamicIsland url={"/images/General/logo.png"} alt={"logo"} content={"Welcome!"}/>
                }
              </div>
              <Battery />
              <Wifi />
            </div>
            {elements_obj}
            <DateTime />
          </div>
        </div>
      </nav>
      <div className={`${
        index < props.notifications.length ? "absolute" : "hidden"
      } w-full h-[100px] z-40`}
       onClick={
          () => {
            setndex(index + 1);
          }
        } onTouchEnd={
          () => {
            setTimeout(() => {
              setndex(index + 1);
            }, 1000);
          }
        }>
        {
          index < props.notifications.length
          ? <Notification key={index} url={notification[index].img} alt={notification[index].name} content={notification[index].content}/>
           : null
        }
        </div>
    </div>
  );
}
