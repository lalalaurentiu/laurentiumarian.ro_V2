import React from "react";

export default function FooterApp(props) {
    return (
        <img src={props.src} alt={props.alt} className= {`w-16 h-16 lg:w-12 lg:h-12 cursor-pointer ${props.className}`} />
    );
};