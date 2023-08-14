import React, { useState, useEffect } from "react";

export default function Intro() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const loadingElement = document.querySelector(".loading");

    const handleAnimationEnd = () => {
      setLoadingVisible(false);
    };

    if (loadingElement) {
      loadingElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (loadingElement) {
        loadingElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <section
      id="intro"
      className={`
      absolute
      flex 
      items-center 
      justify-center 
      flex-col
      bg-black 
      w-full 
      h-full 
      text-white 
      z-20
      ${loadingVisible ? "" : "hidden"}`}
    >
      <h1
        className="
        lg:text-7xl 
        md:text-5xl 
        sm:text-3xl 
        text-xl 
        font-black"
      >
        Laurentiu Marian
      </h1>
      <div
        className="
        w-9/12 
        lg:h-5 
        md:h-3 
        h-2 
        mt-1"
      >
        <div
          className="
          loading 
          bg-white 
          rounded-full 
          w-full 
          h-full"
        ></div>
      </div>
    </section>
  );
}
