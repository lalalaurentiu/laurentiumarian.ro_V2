import React from "react";
import ReactDOM from "react-dom";
import File from "./fileApp";
import Mail from "./mail";

export default function App(props) {
  let appType = {
    Folder: {
      src: "/images/General/SVG/folder.svg",
    },
    File: {
      src: "/images/General/SVG/file.svg",
      app: (name, content, btnRef) => {
        const component = <File name={name} content={content} openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      },
    },
    Mail : {
      src: "/images/General/SVG/Mail.svg",
      app: (name, content, btnRef) => {
        const component = <Mail name={name} openBtn={btnRef}/>;

        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    Phone: {
      src: "/images/General/SVG/Phone.svg",
      app:(name, content, btnRef) => {
        if (btnRef.current) {
          btnRef.current.addEventListener("click", () => {
            window.location.href = "tel:+40790570919";
          });
        }
      }
    },
  };

  const [src, setSrc] = React.useState(props);
  const btnRef = React.useRef();

  React.useEffect(() => {
    if (props.type === "App") {
      setSrc(props.src);

    } else {
      setSrc(appType[props.type].src);
    }
  }, [props]);

  if (props.type === "App") {
    return (
        <a target="_blank" href={props.href}
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