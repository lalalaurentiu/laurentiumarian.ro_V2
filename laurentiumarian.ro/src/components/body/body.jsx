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
];

export default function Body() {
  const apps_elements = apps.map((app) => {
    return <App key={app.name} name={app.name} type={app.type} src={app.src} />;
  });
  return (
    <div
      className="
            flex
            flex-wrap
            m-2
        "
    >
      {apps_elements}
    </div>
  );
}
