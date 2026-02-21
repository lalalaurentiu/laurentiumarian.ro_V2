import React from "react";
import ReactDOM from "react-dom";
import FooterApp from "./footerapp";
import FolderApp from "../folderApp";
import File from "../fileApp";
import Launchpad from "../launchpad";
import Mail from "../mail";

const publicUrl = process.env.PUBLIC_URL || '/';

export default function Footer(props) {
  const [descriptionApps, setDescriptionApps] = React.useState(props.Description);

  React.useEffect(() => {
    setDescriptionApps(props.Description);
  }, [props]);


  const apps = [
    {
      alt: "Finder",
      src: publicUrl + "/images/General/SVG/Finder.svg",
      className: "lg:block hidden",
      func: (name, src, btnRef) => {
        
        const folder_apps = descriptionApps.map((app, index) => {
          const btn = React.createRef();
          const component = (
            <div key={index} ref={btn} className="
              flex flex-col items-center gap-1
            ">
              <img 
                className="w-14 h-14 cursor-pointer" 
                src={publicUrl + "/images/General/SVG/folder.svg"} 
                alt="Folder" />
              <div className="text-[10px] font-bold">{app.name}</div>
            </div>
          )
          
          const filebtn = React.createRef();
          const filecomponent = (
            <div key={index} ref={filebtn} className="
              flex flex-col items-center gap-1
            ">
              <img 
                className="w-14 h-14 cursor-pointer" 
                src={publicUrl + "/images/General/SVG/file.svg"} 
                alt="File" />
              <div className="text-[10px] font-bold">{"Description"}</div>
            </div>
          )

          const appcomponent =(
              <a key={`app_${app.name}`} href={app.content} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                <img className="w-14 h-14 cursor-pointe rounded-lg" src={app.img} alt={app.name}/>
                <p className="text-[10px] font-bold">{app.name}</p>
              </a>
            )

          const githubcomponent =(
            <a key={`github_${app.name}`} href={app.code} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
              <img className="w-14 h-14 cursor-pointe rounded-lg" src={publicUrl + "/images/General/github.png"} alt={"GitHub"}/>
              <p className="text-[10px] font-bold">{"Code"}</p>
            </a>
          )
          
          return [component,
          <FolderApp key={`lauchpadapp_${name}`} app={
            [
              [filecomponent, <File key={`file_${name}`} name={"Description"} content={app.description} openBtn={filebtn} className={"z-50"}/>],
              [appcomponent, null],
              [githubcomponent, null]
            ]
          } name={app.name} src={publicUrl + "/images/General/SVG/folder.svg"} openBtn={btn} className={"z-40"}/>
        ]
        }); 

        const component = <FolderApp app={folder_apps} name={name} src={src} openBtn={btnRef}/>;
  
        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    {
      alt: "Launchpad",
      src: publicUrl + "/images/General/Launchpad.png",
      className: "lg:block hidden",
      func: (name, src, btnRef) => {
        const component = <Launchpad apps={props.LaunchPad} openBtn={btnRef}/>;
  
        return ReactDOM.createPortal(
          component,
         document.body
        );
      }
    },
    {
      alt: "Phone",
      src: publicUrl + "/images/General/SVG/Phone.svg",
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
      src: publicUrl + "/images/General/SVG/Mail.svg",
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
      src: publicUrl + "/images/General/SVG/Settings.svg",
      className: "",
    },
    {
      alt: "Dashboard",
      src: publicUrl + "/images/General/Dashboard.webp",
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
          <FooterApp alt="Bin" src={publicUrl + "/images/General/Bin.png"} className={"lg:block hidden"} func={
            (name, content, btnRef) => {
              const component = <FolderApp name={"Bin"} src={publicUrl + "/images/General/Bin.png"} openBtn={btnRef}/>;

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
