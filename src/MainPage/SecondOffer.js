import React from "react";
import BlockText from "./BlockText";

import tikka_maki from "../img/rolls/tikka_maki.png";
import california from "../img/rolls/california.png";
import Roll from "./Roll";

export default function SecondOffer() {
    return(
        <div className="second_offer">
            <div className="rolls_holder">
                <Roll img={tikka_maki} name="Tikka Maki" description="Cooked Tuna" price="$4.10"/>
                <Roll img={california} name="Fresh Salmon" description="Salmon & Avocado" price="$4.70"/>
            </div>
            <BlockText heading="The best sushi restaurant for delectable sushi delights, sashimi & more." 
                description="Sushi Counter offers the most eclectic of sushi infused cuisine. Opt traditional 
                with our rolls, tartares & platters, or try our exclusive poke bowls, sushi counter
                street foods & sushi squares."/>
        </div>
    )
}