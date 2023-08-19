import React from "react";

export default function DynamicIsland(props) {
  const parent = React.useRef(null);
  const child = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      child.current.classList.remove("hidden");
      child.current.classList.add("dinotification");
      parent.current.classList.replace("w-2/4", "w-5/6");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      child.current.classList.remove("dinotification");
      child.current.classList.add("hidden");
      parent.current.classList.replace("w-5/6", "w-2/4");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={parent} className="relative w-2/4 h-[20px] bg-black rounded-full md:hidden transition-all duration-1000">
      <div ref={child} className="hidden w-full h-full text-white flex items-center justify-start gap-2 text-xs truncate px-2">
        <img src={props.url} alt={props.alt} className="h-2 w-2" />
        <p>{props.content}</p>
      </div>
    </div>
  );
}
