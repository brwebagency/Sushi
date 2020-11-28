import React from "react";
import Card from "../../MainPage/Card";

import chicken_wok from "../../../img/wok/chicken_wok.png";
import spiced_chicken from "../../../img/wok/spiced_chicken.png";
import beef_wok from "../../../img/wok/beef_wok.png";

export default function SushiHolder() {
    let sushis = [
        { img: chicken_wok, name: "Chicken Wok", description: "Chicken Ramen", price: "$6.10" },
        { img: spiced_chicken, name: "Spiced Chicken", description: "Hot Ramen", price: "$6.15" },
        { img: beef_wok, name: "Beef Wok", description: "Beef Ramen", price: "$6.25" },
    ]

    return (
        sushis.map(sushi => {
            return (
                <Card img={sushi.img} name={sushi.name} description={sushi.description} price={sushi.price}/>
            );
        })
    );
}