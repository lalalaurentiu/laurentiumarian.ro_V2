import React from "react";

export default function File(props) {

  const [openIndex, setOpenIndex] = React.useState(false);

  if (props.openBtn.current) {
    props.openBtn.current.addEventListener("click", () => {
      setOpenIndex(!openIndex);
    });
  }

  return (
    <div className={`flex-col absolute w-full h-full top-0 z-30 lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-x-2/4 lg:-translate-y-2/4 lg:w-3/4 lg:h-3/4 lg:rounded-lg lg:border-[0.5px] lg:border-gray-400 ${openIndex ? "flex" : "hidden"}`}>
      <div className="hidden lg:flex justify-between items-center bg-[#3F3837] rounded-tr-lg rounded-tl-lg w-full">
        <div className="flex flex-row m-2 bg-[#3F3837]">
          <button onClick={() => {setOpenIndex(!openIndex)}} className="w-4 h-4 rounded-full bg-red-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-yellow-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-green-500 mr-1"></button>
        </div>
        <div className="flex items-center flex-grow justify-center space-x-1">
          <img className="w-5 h-5" src="/images/General/SVG/file.svg" alt="File"/>
          <p className="text-xs font-bold text-white">{props.name}.txt</p>
        </div>
      </div>

      <div className="flex-grow bg-[#242424] pt-8 lg:pt-0 overflow-y-auto">
        <p className="text-white text-xs p-2">
          {props.content}
        </p>
      </div>

      <div className="hidden lg:flex justify-between items-center p-4 bg-[#242424] rounded-br-lg rounded-bl-lg border-t-[0.5px] border-gray-600 bg-[#3F3837]"></div>
      <button onClick={() => {setOpenIndex(!openIndex);}} className="absolute bottom-0 left-2/4 transform -translate-x-2/4 -translate-y-1/2 w-2/4 h-2 rounded-lg bg-white mb-2 lg:hidden"></button>
    </div>
  );
}
