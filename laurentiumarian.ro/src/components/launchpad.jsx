import React from "react";

export default function Launchpad(props) {
    const [app, setApp] = React.useState(props.app);
    const [openIndex, setOpenIndex] = React.useState(false);
    const close = React.useRef();

    const handleClick = () => {
        setOpenIndex(!openIndex);
    };

  if (props.openBtn.current) {
    props.openBtn.current.addEventListener("click", handleClick, false);
  }

    React.useEffect(() => {
        setApp(props.app);
    }, [props]);

    if (close.current){
        close.current.addEventListener("click", () => {
            setOpenIndex(false);
            props.openBtn.current.removeEventListener("click", handleClick);
        });
    }
    
    return (
        <button ref={close}
         className={`${
            openIndex ? "absolute" : "hidden"
        } z-40 top-0 flex flex-col h-full w-full bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] bg-cover`}>
            <div className="absolute w-full h-full backdrop-filter backdrop-blur-lg"></div>
            <div className="flex items-center justify-center z-10 mt-5 w-full">
                <input className="w-1/4 rounded-md bg-gray-700/50 text-center text-white " type="text" placeholder="Search" />
            </div>
            <div className="grid grid-cols-7 gap-4 mt-10 mx-10 z-10 w-full">
                {app}
            </div>
        </button>
    );
};