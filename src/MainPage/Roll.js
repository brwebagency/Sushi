import React from "react";

export default function Roll(props) {
    return(
        <div className="card">
            <div className="roll">
                <div className="img-holder">
                    <img src={ props.img }></img>
                </div>
                <h3>{ props.name }</h3>
                <p>{ props.description }</p>
                <h3 className="price">{ props.price }</h3>
                <button className="add">+</button>
            </div>
        </div>
    );
}