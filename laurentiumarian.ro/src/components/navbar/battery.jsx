import React from "react";

export default function Battery() {
    const [batteryLevel, setBatteryLevel] = React.useState(100);
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setBatteryLevel(batteryLevel - 1);
      }, 100 * 100);
      return () => clearInterval(interval);
    }, [batteryLevel]);
  
    let batteryLevelStyle = {
      width: `${batteryLevel}%`,
    };
  
    return (
      <div className="battery-container">
        <div className="battery">
          <div className="battery-charging">
            <div className="battery-level" style={batteryLevelStyle}></div>
          </div>
          <div className="battery-cell"></div>
        </div>
      </div>
    );
  }