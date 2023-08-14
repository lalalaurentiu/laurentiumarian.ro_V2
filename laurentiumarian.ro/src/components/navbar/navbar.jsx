import React from "react";
import Battery from "./battery";
import Wifi from "./wifi";
import DateTime from "./dateTime";

export default function Navbar() {
  return (
    <nav
      className="
        flex 
        w-screen 
        h-8 
        text-white 
        relative
        "
    >
      <div
        className="
            absolute 
            h-full 
            w-full 
            lg:backdrop-filter
            lg:backdrop-blur-lg
            lg:bg-black/20
            "
      ></div>
      <div
        className="
            flex 
            items-center
            justify-between 
            w-full 
            h-full 
            px-2
            lg:px-8 
            z-10
            "
      >
        <div
          className="
                hidden
                lg:flex 
                items-center
                lg:space-x-4
                lg:text-base
                font-black
                "
        >
          <img
            src="/images/General/logo.png"
            alt="logo"
            className="
                    h-6
                    "
          />
          <button>About</button>
          <button>Contact</button>
          <button>Portofolio</button>
        </div>
        <div
          className="
                flex
                flex-grow
                items-center
                lg:justify-end
                flex-row-reverse
                lg:flex-row
        "
        >
          <div
            className="
                flex
                items-center
                flex-grow
                justify-end
          "
          >
            <Battery />
            <Wifi />
          </div>
          <DateTime />
        </div>
      </div>
    </nav>
  );
}
