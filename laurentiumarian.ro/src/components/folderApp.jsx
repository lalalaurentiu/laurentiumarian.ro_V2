import React from "react";

export default function FolderApp(props) {

  const [openIndex, setOpenIndex] = React.useState(false);
  const [btnRef, setBtnRef] = React.useState(props.openBtn.current);
  const close = React.useRef();

  const handleClick = () => {
    setOpenIndex(!openIndex);
};

  React.useEffect(() => {
    const btn = props.openBtn.current.addEventListener("click", handleClick, false);
    setBtnRef(btn);
  }, [props]);

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
    } absolute w-full h-full top-0 z-30 lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-x-2/4 lg:-translate-y-2/4 lg:bg-[#584024]/90 lg:w-3/4 lg:h-3/4 lg:rounded-lg lg:border-[0.5px] lg:border-gray-400`}>
      {/* Left side */}
      <div className="hidden relative lg:flex flex-col border-r-2 border-black p-2 w-[250px]">
        <div className="flex flex-row m-2">
          <button ref={close} className="w-4 h-4 rounded-full bg-red-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-yellow-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-green-500 mr-1"></button>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs font-bold">Favourites</div>
          <div className="flex flex-col text-white text-sm font-bold m-2">
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Airdrop.svg" alt="Airdrop"/>
              <div>AirDrop</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Recents.svg" alt="Airdrop"/>
              <div>Recents</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Aplication.svg" alt="Airdrop"/>
              <div>Aplications</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Document.svg" alt="Airdrop"/>
              <div>Documents</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Desktop.svg" alt="Airdrop"/>
              <div>Desktop</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Portofolio.svg" alt="Airdrop"/>
              <div>Portofolio</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Download.svg" alt="Airdrop"/>
              <div>Downloads</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs font-bold">iCloud</div>
          <div className="flex flex-col text-white text-sm font-bold m-2">
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Icloud.svg" alt="Airdrop"/>
              <div>iCloud</div>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <img className="w-5 h-5" src="/images/General/SVG/Shared.svg" alt="Airdrop"/>
              <div>Shared</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col w-full">
        <div className="hidden lg:flex justify-between items-center p-2 bg-[#3F3837] rounded-tr-lg">
          <div className="flex items-center">
            <img className="w-5 h-5" src="/images/General/SVG/chevron-left.svg" alt="Back"/>
            <img className="w-5 h-5" src="/images/General/SVG/chevron-right.svg" alt="Forward"/>
            <div className="text-white text-sm font-bold ml-2">{props.name}</div>
          </div>
        </div>
        <div className="flex-grow bg-[#242424]"></div>
        <div className="hidden lg:flex justify-between items-center p-2 bg-[#242424] rounded-br-lg border-t-[0.5px] border-gray-600">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src="/images/General/SVG/HDD.png" alt="HDD"/>
              <div className="text-white text-xs">Macintosh HD</div>
            </div>
            <img className="w-5 h-5" src="/images/General/SVG/angle-right.svg" alt="angle-right"/>
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
