import React from "react";

export default function App(props) {
  let appType = {
      Folder: {
        src: "/images/General/SVG/folder.svg",
      },
      File: {
        src: "/images/General/SVG/file.svg",
      },
    };
  
  const [src, setSrc] = React.useState(props);

  React.useEffect(() => {
    if (props.type === "App") {
      setSrc(props.src);
    } else {
      setSrc(appType[props.type].src);
    }
  }, [props]);

  return (
    <div className="cursor-pointer flex justify-between items-center space-x-6">
      <img className="h-6" src={src} alt={props.name}/>
      <p className="text-center text-xs text-white font-bold">{props.name}</p>
    </div>
  );
}