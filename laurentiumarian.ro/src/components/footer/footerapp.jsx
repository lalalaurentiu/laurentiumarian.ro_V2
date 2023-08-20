import React from "react";

export default function FooterApp(props) {
    const btnRef = React.useRef();
    return (
        <>
        <button ref={btnRef} className= {`w-16 h-16 lg:w-12 lg:h-12 cursor-pointer ${props.className}`}>
             <img src={props.src} alt={props.alt} className="h-full w-full" />
        </button>
        {props.func ? props.func(props.alt, props.src, btnRef) : null}
        </>
    );
};