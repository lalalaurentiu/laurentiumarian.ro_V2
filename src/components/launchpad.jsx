import React from "react";
import App from "./launchpadApp";

export default function Launchpad(props) {
    const [apps, setApps] = React.useState([]);
    const [openIndex, setOpenIndex] = React.useState(false);
    const close = React.useRef();

    const handleClick = () => {
        setOpenIndex(!openIndex);
    };

  if (props.openBtn.current) {
    props.openBtn.current.addEventListener("click", handleClick, false);
  }

    React.useEffect(() => {
        setApps(props.apps);
    }, [props]);

    if (close.current){
        close.current.addEventListener("click", () => {
            setOpenIndex(false);
            props.openBtn.current.removeEventListener("click", handleClick);
        });
    }

    const app = apps.map((app) => {
        return <App key={app.name} name={app.name} src={app.img} type={app.type} href={app.content} />;
    });

    app.push(<App key="LaunchpadMail" name="launchpad" type="Mail" />)
    app.push(<App key="LaunchpadPhone" name="Phone" type="Phone" />)
    
    return (
        <div ref={close}
         className={`${
            openIndex ? "absolute" : "hidden"
        } z-[99999] top-0 flex flex-col h-full w-full bg-cover`} style={{ backgroundImage: `url(${(process.env.PUBLIC_URL || '/laurentiumarian.ro_V2')}/images/Desktop/Wallpapers/Wallpaper.webp)` }}>
            <div className="absolute w-full h-full backdrop-filter backdrop-blur-lg"></div>
            <div className="flex items-center justify-center z-10 mt-5 w-full">
                <input id="search" className="w-1/4 rounded-md bg-gray-700/50 text-center text-white " type="text" placeholder="Search" />
            </div>
            <div className="grid grid-cols-7 gap-4 mt-10 z-10 w-full 
              px-10
            ">
                {app}
            </div>
        </div>
    );
};