import React from "react";

export default function Launchpad(props) {
    const [app, setApp] = React.useState(props.app);

    React.useEffect(() => {
        setApp(props.app);
    }, [props]);

    return (
        <div className="absolute z-30 top-0 flex flex-col h-screen w-screen bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] bg-cover">
            <div className="absolute w-screen h-screen backdrop-filter backdrop-blur-lg"></div>
            <div className="flex items-center justify-center z-10 mt-5">
                <input className="w-1/4 rounded-md bg-gray-700/50 text-center text-white" type="text" placeholder="Search" />
            </div>
            <div className="grid grid-cols-7 gap-4 mt-10 mx-10 z-10">
                {app}
            </div>
        </div>
    );
};