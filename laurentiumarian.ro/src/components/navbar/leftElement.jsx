import React from "react";

export default function LeftElement(props) {
  const [app, setApps] = React.useState(props.apps);
  const [name, setName] = React.useState(props.name);
  const [openIndex, setOpenIndex] = React.useState(false);

  const ref = React.useRef();

  React.useEffect(() => {
    setApps(props.apps);
    setName(props.name);
  }, [props]);

  document.addEventListener("click", (e) => {
    if (e.target.parentNode.childNodes[1] !== ref.current) {
      setOpenIndex(false);
    }
  });

  return (
    <div>
      <button
        className="relative"
        onClick={() => {
          setOpenIndex(!openIndex);
        }}
      >
        {name}
      </button>

      <div
        ref={ref}
        className={`
                absolute
                top-full
                z-30
                flex-col
                h-fit
                w-max
                rounded-md
                border-[0.5px]
                border-white/50
                ${openIndex ? "flex" : "hidden"}
            `}
      >
        <div
          className="
                    absolute
                    w-full
                    h-full
                    backdrop-filter
                    backdrop-blur-lg
                    rounded-md
                    bg-black/20
                "
        ></div>
        <div
          className="
                    flex
                    flex-col
                    justify-start
                    z-10
                    space-y-2
                    p-2
                "
        >
          {app}
        </div>
      </div>
    </div>
  );
}
