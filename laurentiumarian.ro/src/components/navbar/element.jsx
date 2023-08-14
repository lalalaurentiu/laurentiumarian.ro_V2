import React from "react";

export default function Element(props) {
    return (
        <div className="
        hidden
        lg:block
        cursor-pointer
        ">
            <img src={props.url} alt={props.alt}/>
        </div>
    )
}