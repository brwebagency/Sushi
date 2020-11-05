import React from "react";

export default function BlockText(props) {
    return(
        <div className="block_text">
            <h2>{ props.heading }</h2>
            <p>{ props.description }</p>
        </div>
    );
}