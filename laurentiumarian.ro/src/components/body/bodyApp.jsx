import React from "react";

export default function App(props) {
  let appType = {
    folder: {
      src: "/images/General/SVG/folder.svg",
    },
    file: {
      src: "/images/General/SVG/file.svg",
    },
  };

  const [src, setSrc] = React.useState(props);

  React.useEffect(() => {
    if (props.type === "App") {
      setSrc(props.src);
    } else {
      setSrc(appType[props.type].src);
    }
  }, [props]);

  return (
    <div
      className="
            cursor-pointer
            flex
            flex-col
            items-center
            justify-end
        "
    >
      <img
        className="
                flex-grow
                w-20
                h-20
                lg:w-16
                lg:h-16
            "
        src={src}
        alt={props.name}
      />
      <p
        className="
                text-center
                text-xs
                text-white
                font-bold
                mt-1
            "
      >
        {props.name}
      </p>
    </div>
  );
}
