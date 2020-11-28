import React from "react";
import Card from "../../MainPage/Card";

import curry_chicken from "../../../img/soup/curry_chicken.png";
import wonton_pelmeni from "../../../img/soup/wonton_pelmeni.png";
import ezogelin_soup from "../../../img/soup/ezogelin_soup.png";
import solyanka_beef from "../../../img/soup/solyanka_beef.png";
import tomato_soup from "../../../img/soup/tomato_soup.png";
import red_insiode from "../../../img/soup/red_insiode.png";
import tom_yam from "../../../img/soup/tom_yam.png";
import potato_chicken from "../../../img/soup/potato_chicken.png";

export default function SushiHolder() {
    let sushis = [
        { img: curry_chicken, name: "Curry Chicken", description: "Chicken Udon", price: "$5.20" },
        { img: wonton_pelmeni, name: "Wonton Pelmeni", description: "Pelmeni Canh", price: "$4.90" },
        { img: ezogelin_soup, name: "Ezogelin Soup", description: "Lentil Tripe", price: "$5.00" },
        { img: solyanka_beef, name: "Solyanka Beef", description: "Beef Soup", price: "$5.25" },
        { img: tomato_soup, name: "Tomato Soup", description: "Tomato Ginger", price: "$5.15" },
        { img: tom_yam, name: "Tom Yam", description: "Noodle Thai", price: "$5.35" },
        { img: red_insiode, name: "Red Insiode", description: "Gravy Tomato", price: "$5.05" },
        { img: potato_chicken, name: "Potato Chicken", description: "Beef Sukiyaki", price: "$5.25" },
    ]

    return (
        sushis.map(sushi => {
            return (
                <Card img={sushi.img} name={sushi.name} description={sushi.description} price={sushi.price}/>
            );
        })
    );
}