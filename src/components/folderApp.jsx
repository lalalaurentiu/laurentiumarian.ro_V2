import React, { useCallback } from "react";
import ReactDOM from "react-dom";

const publicUrl = process.env.PUBLIC_URL || '';

export default function FolderApp(props) {
  const [openIndex, setOpenIndex] = React.useState(false);
  const [btnRef, setBtnRef] = React.useState(props.openBtn.current);
  const close = React.useRef();

  const [folder, setFolder] = React.useState(props.app);
  React.useEffect(() => {
    setFolder(props.app);
  }, [props.app]);

  const handleClick = useCallback(() => {
    setOpenIndex(!openIndex);
}, [openIndex]);

  React.useEffect(() => {
    try {
      const btn = props.openBtn.current.addEventListener("click", handleClick, false);
    setBtnRef(btn);
    return () => {
      if (props.openBtn.current) {
        props.openBtn.current.removeEventListener("click", handleClick, false);
      }
    };
    } catch (error) {}
    
  }, [props, handleClick]);

  if (btnRef) {
    btnRef.replaceWith(
      btnRef.cloneNode(true)
    )
  }

  if (close.current){
    close.current.addEventListener("click", () => {
      setOpenIndex(false);
    });
  }

  return (
    <div className={`${
      openIndex ? "flex" : "hidden"
    } absolute w-full h-full top-0 ${
      props.className ? props.className : "z-30"
    } lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-x-2/4 lg:-translate-y-2/4 lg:bg-[#584024]/90 lg:w-3/4 lg:h-3/4 lg:rounded-lg lg:border-[0.5px] lg:border-gray-400 text-white`}>
      {/* Left side */}
      <div className="hidden lg:flex flex-col border-r-2 border-black p-2 w-[250px]">
        <div className="flex flex-row m-2">
          <button ref={close} className="w-4 h-4 rounded-full bg-red-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-yellow-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-green-500 mr-1"></button>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs font-bold">Favourites</div>
          <div className="flex flex-col text-white text-sm font-bold m-2">
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Airdrop.svg"} alt="Airdrop"/>
              <div>AirDrop</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Recents.svg"} alt="Recents"/>
              <div>Recents</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Aplication.svg"} alt="Applications"/>
              <div>Aplications</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Document.svg"} alt="Documents"/>
              <div>Documents</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Desktop.svg"} alt="Desktop"/>
              <div>Desktop</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Portofolio.svg"} alt="Portfolio"/>
              <div>Portofolio</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Download.svg"} alt="Downloads"/>
              <div>Downloads</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs font-bold">iCloud</div>
          <div className="flex flex-col text-white text-sm font-bold m-2">
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Icloud.svg"} alt="iCloud"/>
              <div>iCloud</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/Shared.svg"} alt="Shared"/>
              <div>Shared</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col w-full">
        <div className="hidden lg:flex justify-between items-center p-2 bg-[#3F3837] rounded-tr-lg">
          <div className="flex items-center">
            <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/chevron-left.svg"} alt="Back"/>
            <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/chevron-right.svg"} alt="Forward"/>
            <div className="text-white text-sm font-bold ml-2">{props.name}</div>
          </div>
        </div>
        <div className="flex space-x-2 flex-wrap overflow-y-auto overflow-x-hidden p-2 flex-grow bg-[#242424]">
          {
            folder ? folder.map((element) => {
              return element[0]}
            ) : null
          }
          {
            folder ? folder.map((element) => {
              return ReactDOM.createPortal(
                element[1],    
                document.body
              )}
            ) : null
          }
        </div>
        <div className="hidden lg:flex justify-between items-center p-2 bg-[#242424] rounded-br-lg border-t-[0.5px] border-gray-600">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/HDD.png"} alt="HDD"/>
              <div className="text-white text-xs">Macintosh HD</div>
            </div>
            <img className="w-5 h-5" src={publicUrl + "/images/General/SVG/angle-right.svg"} alt="angle-right"/>
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src={props.src} alt="Folder"/>
              <div className="text-white text-xs">{props.name}</div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => {setOpenIndex(!openIndex);}} className="absolute bottom-0 left-2/4 transform -translate-x-2/4 -translate-y-1/2 w-2/4 h-2 rounded-lg bg-white mb-2 lg:hidden"></button>
    </div>
  );
}
