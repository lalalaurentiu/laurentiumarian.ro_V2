import React from "react";
import App from "./bodyApp";

const apps = [
  {
    name: "Folder",
    type: "folder",
  },
  {
    name: "File",
    type: "file",
  },
  {
    name: "App",
    type: "App",
    src: "/images/General/logo.png",
  },
  {
    name: "sda",
    type: "folder",
  },
];

export default function Body() {
  const apps_elements = apps.map((app) => {
    return <App key={app.name} name={app.name} type={app.type} src={app.src} />;
  });

  return (
    <div
      className="
            flex-grow
        "
    >
      <div
        className="
            grid
            grid-cols-4
            gap-4
            md:grid-cols-6
            lg:flex
            lg:flex-wrap
            lg:gap-2
            mt-4
        "
      >
        {apps_elements}
      </div>
    </div>
  );
}
