import React from "react";

export default function Mail(props) {
  const [openIndex, setOpenIndex] = React.useState(false);
  const [btnRef, setBtnRef] = React.useState(props.openBtn.current);

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

  return (
    <div className={`${
      openIndex ? "flex" : "hidden"
    } flex-col absolute w-full h-full top-0 z-30 bg-[#242424] lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-x-2/4 lg:-translate-y-2/4 lg:w-3/4 lg:h-3/4 lg:rounded-lg lg:border-[0.5px] lg:border-gray-400`}>
      <div className="hidden lg:flex justify-between items-center bg-[#3F3837] rounded-tr-lg rounded-tl-lg w-full">
        <div className="flex flex-row m-2" >
          <button onClick={
            () => {
              setOpenIndex(!openIndex);
            }
          } className="w-4 h-4 rounded-full bg-red-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-yellow-500 mr-1"></button>
          <button className="w-4 h-4 rounded-full bg-green-500 mr-1"></button>
        </div>
        <button className=" flex items-center flex-grow justify-start space-x-1">
          <img className="w-5 h-5" src="/images/General/SVG/Send.svg" alt="Send"/>
        </button>
      </div>

      <div className="flex items-center justify-between space-x-2 p-2 lg:hidden text-white text-lg font-bold pt-8">
        <div>New Message</div>
        <button>
          <img className="w-5 h-5" src="/images/General/SVG/up-arrow.svg" alt="Arrow Up"/>
        </button>
      </div>

      <div className="flex flex-col flex-grow lg:pt-0 overflow-y-auto text-white text-sm font-bold">
        <div className="flex items-center justify-between border-b-[0.5px] border-gray-400 space-x-2 ml-4">
          <label htmlFor={`${props.name}_owner`} className="text-gray-400">To:</label>
          <input id={`${props.name}_owner`} type="text" readOnly value="contact@laurentiumarian.ro" className="w-full h-8 bg-transparent focus:outline-none text-white text-sm font-bold"/>
        </div>

        <div className="flex items-center justify-between border-b-[0.5px] border-gray-400 space-x-2 ml-4">
          <label htmlFor={`${props.name}_email`}
           className="text-gray-400">From:</label>
          <input id={`${props.name}_email`} type="email" required placeholder="Your@email.com" className="w-full h-8 bg-transparent focus:outline-none text-white text-sm font-bold"/>
        </div>

        <textarea id={`${props.name}_message`} required placeholder="Your message..." className="flex-grow w-full bg-transparent focus:outline-none text-white text-sm font-bold resize-none p-2 overflow-y-auto"/>
        <div className="flex flex-col items-center justify-between mt-4">
          <button onClick={() => {setOpenIndex(!openIndex);}} className="w-2/4 h-2 rounded-lg bg-white mb-2 lg:hidden"></button>
        </div> 
      </div>
      <div className="hidden lg:flex justify-between items-center p-4 bg-[#242424] rounded-br-lg rounded-bl-lg border-t-[0.5px] border-gray-600 bg-[#3F3837]"></div> 
    </div>
  );
}
