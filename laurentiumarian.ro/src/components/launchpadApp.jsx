import React from "react";

export default function App(props) {
    return (
        <a href={props.href}
         className="cursor-pointer flex flex-col items-center justify-end">
          <img className="flex-grow w-20 h-20 lg:w-16 lg:h-16 rounded-lg" src={props.src} alt={props.name}/>
          <p className="text-center text-xs text-white font-bold mt-1">
            {props.name}
          </p>
        </a>
      );
};