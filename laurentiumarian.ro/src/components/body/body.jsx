import React from "react";
import App from "./bodyApp";

export default function Body(props) {

  const apps = []

  props[0].NavApps.map((app) => {
    app.apps.map((elem) => {
      apps.push(elem)
    })
  })
  const apps_elements = apps.map((app) => {
    return <App key={app.name} name={app.name} type={app.type} src={app.img} content={app.content} />;
  });

  return (
    <div className="flex-grow">
      <div className="grid lg:hidden grid-cols-4 gap-4 md:grid-cols-6 lg:flex lg:flex-wrap lg:gap-2 m-4 ">
        {apps_elements}
      </div>
    </div>
  );
}
