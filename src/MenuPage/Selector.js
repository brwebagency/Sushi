import React from "react";
import SwitchTab from "../scripts/SwitchTab";
import { NavLink } from "react-router-dom";

export default function Selector() {
    return(
        <div className="selector">
            <div onClick={ () => SwitchTab(1) } className="tab tab-1 active">
                Rolls
            </div>

            <div onClick={ () => SwitchTab(2) } className="tab tab-2">
                Sushi
            </div>

            <div onClick={ () => SwitchTab(3) } className="tab tab-3">
                Soups
            </div>

            <div onClick={ () => SwitchTab(4) } className="tab tab-4">
                Wok
            </div>
        </div>
    );
}