import React from "react";
import { NavLink } from "react-router-dom";

export default function FirstOffer() {
    return(
        <div className="first_offer">
            <div className="description">
                <h1>Fresh Healthy Delicious Sushi</h1>
                <p> We made fresh and healthy sushi with different recipes </p>
                <NavLink class="link" to="/menu">
                    <button className="view-menu">View Menu</button>
                </NavLink>
            </div>
        </div>
    )
}