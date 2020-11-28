import React from "react";
import Card from "../../MainPage/Card";

import unagi_sashimi from "../../../img/sushi/unagi_sashimi.png";
import sake_salmon from "../../../img/sushi/sake_salmon.png";
import tako_uni from "../../../img/sushi/tako_uni.png";
import couzine_sake from "../../../img/sushi/couzine_sake.png";
import sushi_makizushi from "../../../img/sushi/sushi_makizushi.png";
import sushi_decapoda from "../../../img/sushi/sushi_decapoda.png";
import tako_octopus from "../../../img/sushi/tako_octopus.png";
import onigri_vegetarian from "../../../img/sushi/onigri_vegetarian.png";
import sushi_unagi from "../../../img/sushi/sushi_unagi.png";
import shima_agi from "../../../img/sushi/shima_agi.png";
import unagi_onigri from "../../../img/sushi/unagi_onigri.png";
import umi_masu from "../../../img/sushi/umi_masu.png";

export default function SushiHolder() {
    let sushis = [
        { img: unagi_sashimi, name: "Unagi Sashimi", description: "Japanese Onigri", price: "$5.20" },
        { img: sake_salmon, name: "Sake Salmon", description: "Salmon Roe", price: "$4.80" },
        { img: tako_uni, name: "Tako Uni", description: "Sea Urchin", price: "$5.00" },
        { img: couzine_sake, name: "Couzine Sake", description: "Smoked Salmon", price: "$4.70" },
        { img: sushi_makizushi, name: "Sushi Makizushi", description: "Japanese Omelette", price: "$5.10" },
        { img: sushi_decapoda, name: "Sushi Decapoda", description: "Flying Fish Roe", price: "$4.80" },
        { img: tako_octopus, name: "Tako Octopus", description: "Ehosushi", price: "$5.35" },
        { img: onigri_vegetarian, name: "Onigri Vegetarian", description: "Octopus Belly", price: "$5.25" },
        { img: sushi_unagi, name: "Sushi Unagi", description: "Butter Fish", price: "$5.15" },
        { img: shima_agi, name: "Shima Agi", description: "Striped Jack", price: "$5.30" },
        { img: unagi_onigri, name: "Unagi Onigri", description: "Flying Fish Roe", price: "$5.00" },
        { img: umi_masu, name: "Umi Masu", description: "Ocean Trout", price: "$4.95" },
    ]

    return (
        sushis.map(sushi => {
            return (
                <Card img={sushi.img} name={sushi.name} description={sushi.description} price={sushi.price}/>
            );
        })
    );
}