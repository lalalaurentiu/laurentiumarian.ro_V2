import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import File from "./fileApp";
import Mail from "./mail";
import FolderApp from "./folderApp";

const publicUrl = process.env.PUBLIC_URL || '';

export default function App(props) {
  const appType = useMemo(() => ({
    Folder: {
      src: publicUrl + "/images/General/SVG/folder.svg",
      app: (name, content, btnRef) => {
        const component = <FolderApp name={name} app={content} src={publicUrl + "/images/General/SVG/folder.svg"} openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      },
    },
    File: {
      src: publicUrl + "/images/General/SVG/file.svg",
      app: (name, content, btnRef) => {
        const component = <File name={name} content={content} openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      },
    },
    Mail : {
      src: publicUrl + "/images/General/SVG/Mail.svg",
      app: (name, content, btnRef) => {
        const component = <Mail name={name} openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    Phone: {
      src: publicUrl + "/images/General/SVG/Phone.svg",
      app:(name, content, btnRef) => {
        if (btnRef.current) {
          btnRef.current.addEventListener("click", () => {
            window.location.href = "tel:+01234567890"; // Înlocuiește cu numărul de telefon dorit
          });
        }
      }
    },
  }), []);

  const [src, setSrc] = React.useState(props.type === "App" ? props.src : appType[props.type]?.src);
  const btnRef = React.useRef();

  React.useEffect(() => {
    if (props.type === "App") {
      setSrc(props.src);

    } else {
      setSrc(appType[props.type].src);
    }
  }, [props.type, props.src, appType]);

  if (props.type === "App") {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.href}
         className="cursor-pointer flex flex-col items-center justify-end">
          <img className="flex-grow w-20 h-20 lg:w-16 lg:h-16 rounded-lg" src={props.src} alt={props.name}/>
          <p className="text-center text-xs text-white font-bold mt-1">
            {props.name}
          </p>
        </a>
      );
  } else {
    return (
      <>
        <button ref={btnRef} className="cursor-pointer flex flex-col items-center justify-end">
          <img className="flex-grow w-20 h-20 lg:w-16 lg:h-16 rounded-lg" src={src} alt={props.name}/>
          <p className="text-center text-xs text-white font-bold mt-1">
            {props.name}
          </p>
        </button>
        {appType[props.type].app(props.name, props.content, btnRef)}
      </>
    );
  }
};