import React from "react";

export default function Notification(props) {
  const child = React.useRef(null);
  const desktopClose = React.useRef(null);
  const mobileClose = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      child.current.classList.remove("hidden");
      child.current.classList.add(".notification");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    desktopClose.current.addEventListener("click", () => {
      child.current.classList.add("hidden");
      child.current.classList.remove(".notification");
    });
  }, []);

  React.useEffect(() => {
    mobileClose.current.addEventListener("touchend", () => {
      child.current.classList.add("hidden");
      child.current.classList.remove(".notification");
    });
  }, []);

  return (
    <div
      ref={child}
      className="
            hidden
            notification
            absolute
            right-2/4
            translate-x-2/4
            h-16
            w-11/12
            rounded-lg
            bg-gray-600/90
            text-white
            border-[0.3px]
            border-white
            lg:right-0
            lg:m-2
            lg:w-1/4
        "
    >
      <button
        ref={desktopClose}
        className="
                hidden
                lg:flex
                relative
                justify-center
                items-center
                h-4
                w-4
                rounded-full
                bg-gray-600/90
                text-white
                border-[0.3px]
                border-white
                mr-2
                -translate-y-1/2
                -translate-x-1/2
            "
      >
        <img
          src="/images/General/SVG/close.svg"
          alt="close"
          className="
                    relative
                    h-2
                    w-2
                    hover:opacity-50
                "
        />
      </button>
      <div
        ref={mobileClose}
        className="
        absolute
        top-0
        flex
        justify-center
        items-center
        h-full
        w-full
        text-xs
        gap-2
        px-2
      "
      >
        <img src={props.url} alt={props.alt} className="h-5 w-5" />
        <p>{props.content}</p>
      </div>
    </div>
  );
}
