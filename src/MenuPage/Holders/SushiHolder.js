import React from "react";
import Roll from "../../MainPage/Roll";

export default function SushiHolder() {
    let sushis = [
        // { img: tikka_maki, name: "Tikka Maki", description: "Cooked Tuna", price: "$4.10" },
    ]

    return (
        sushis.map(sushi => {
            return (
                <Roll img={sushi.img} name={sushi.name} description={sushi.description} price={sushi.price}/>
            );
        })
    );
}