import React from "react";
import ReactDOM from "react-dom";
import File from "../fileApp";
import Mail from "../mail";

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
      <a href={props.content} target="_blank" className="cursor-pointer flex justify-between items-center space-x-6">
        <img className="h-6 w-6 rounded-md" src={src} alt={props.name}/>
        <p className="text-center text-xs text-white font-bold">{props.name}</p>
      </a>
    );
  } else {
    return (
      <>
      <button ref={btnRef} className="cursor-pointer flex justify-between items-center space-x-6">
        <img className="h-6 w-6" src={src} alt={props.name}/>
        <p className="text-center text-xs text-white font-bold">{props.name}</p>
      </button>
      {appType[props.type] ? appType[props.type].app(props.name, props.content, btnRef) : props.func(props.name, props.content, btnRef)}
      </>
    );
  }
}