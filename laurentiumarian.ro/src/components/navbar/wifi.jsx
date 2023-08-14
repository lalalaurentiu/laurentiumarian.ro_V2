import React, { useState } from "react";

export default function Wifi() {
  const wifiCell1 = React.useRef(null);
  const wifiCell2 = React.useRef(null);
  const wifiCell3 = React.useRef(null);

  const { show, onClick, subsections } = useState(false);

  let rondomNumber = Math.floor(Math.random() * 3) + 1;

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (rondomNumber === 1) {
        wifiCell1.current.classList.remove("wifi-cell-active");
        wifiCell2.current.classList.add("wifi-cell-active");
        wifiCell3.current.classList.add("wifi-cell-active");
      } else if (rondomNumber === 2) {
        wifiCell1.current.classList.remove("wifi-cell-active");
        wifiCell2.current.classList.add("wifi-cell-active");
        wifiCell3.current.classList.add("wifi-cell-active");
      } else if (rondomNumber === 3) {
        wifiCell1.current.classList.add("wifi-cell-active");
        wifiCell2.current.classList.add("wifi-cell-active");
        wifiCell3.current.classList.add("wifi-cell-active");
      }
    }, 100 * 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="wifi">
        <div className="wifi-cell wifi-line3" ref={wifiCell1}></div>
        <div className="wifi-cell wifi-line2" ref={wifiCell2}></div>
        <div className="wifi-cell wifi-line1" ref={wifiCell3}></div>
      </div>
      <div
        className="subsection-left"
        style={show ? { display: "flex", transform:"translateX(calc(-100% + 30px))" } : { display: "none" }}
      >
        {subsections}
      </div>
    </div>
  );
}