import React, { useState } from "react";

const abreviatemonths = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
const abreviatedays = {
  0: "Sun",
  1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thurs",
  5: "Fri",
  6: "Sat",
};

export default function DateTime() {
  const { show, onClick, subsections } = useState(false);
  const child = React.useRef(null);
  const [dateTime, setDateTime] = useState(getDateTimes());

  function getDateTimes() {
    const date = new Date();
    const month = abreviatemonths[date.getMonth()];
    const day = abreviatedays[date.getDay()];
    const dayofmonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12;
    const hours12string = hours12 ? hours12 : 12;
    const minutesstring = minutes < 10 ? "0" + minutes : minutes;
    const time = `${hours12string}:${minutesstring} ${ampm}`;
    const datestring = `${dayofmonth} ${month}`;

    return [day, datestring, time];
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getDateTimes());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={onClick} className="nav-date-time" ref={child}>
      <div
        className="
    flex
    items-center
    justify-center
    space-x-2
    text-sm
    "
      >
        <div
          className="
        hidden
        lg:flex
        items-center
        justify-center
        space-x-2
        "
        >
            <div>{dateTime[0]}</div>
            <div>{dateTime[1]}</div>
        </div>
        <div>{dateTime[2]}</div>
      </div>
      <div
        className="subsection-left"
        style={show ? { display: "flex" } : { display: "none" }}
      >
        {subsections}
      </div>
    </div>
  );
}