import React from "react";
import Roll from "../../MainPage/Roll";

import tikka_maki from "../../img/rolls/tikka_maki.png";
import california from "../../img/rolls/california.png";
import warriors from "../../img/rolls/warriors.png";
import alaska from "../../img/rolls/alaska.png";
import rock_and_roll from "../../img/rolls/rock_and_roll.png";
import spicy_tuna from "../../img/rolls/spicy_tuna.png";
import tempura_gimbap from "../../img/rolls/tempura_gimbap.png";
import akashiro_roll from "../../img/rolls/akashiro_roll.png";
import catterpillar_roll from "../../img/rolls/catterpillar_roll.png";
import kibune_maffin from "../../img/rolls/kibune_maffin.png";
import raiders_roll from "../../img/rolls/raiders_roll.png";
import unagi_makizushi from "../../img/rolls/unagi_makizushi.png";

export default function RollHolder() {
    let rolls = [
        { img: tikka_maki, name: "Tikka Maki", description: "Cooked Tuna", price: "$4.10" },
        { img: california, name: "Fresh Salmon", description: "Salmon & Avocado", price: "$4.70" },
        { img: warriors, name: "Warriors Roll", description: "Crab Meat", price: "$4.30" },
        { img: alaska, name: "Alaska Sesame", description: "Avocado & Tobika", price: "$4.00" },
        { img: rock_and_roll, name: "Rock And Roll", description: "Eel with Sesame", price: "$4.10" },
        { img: spicy_tuna, name: "Spicy Tuna", description: "Tuna & Cucumber", price: "$4.50" },
        { img: tempura_gimbap, name: "Tempura Gimbap", description: "Shrimp Tempura", price: "$4.30" },
        { img: akashiro_roll, name: "Akashiro Roll", description: "Topped Jalapeno", price: "$4.20" },
        { img: catterpillar_roll, name: "Catterpillar Roll", description: "White Tuna", price: "$3.30" },
        { img: kibune_maffin, name: "Kibune Maffin", description: "Baked Salmon", price: "$3.80" },
        { img: raiders_roll, name: "Raiders Roll", description: "Salmon Skin", price: "3.50" },
        { img: unagi_makizushi, name: "Unagi Makizushi", description: "Uni & Ikura", price: "$3.70" },
    ]

    return (
        rolls.map(roll => {
            return (
                <Roll img={roll.img} name={roll.name} description={roll.description} price={roll.price}/>
            );
        })
    );
}