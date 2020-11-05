import React from "react";
import FirstOffer from "./FirstOffer";
import SecondOffer from "./SecondOffer";
import ThirdOffer from "./ThirdOffer";
import FourthOffer from "./FourthOffer";
import Reserving from "./Reserving";
import Footer from "./Footer";
import { CSSTransition } from "react-transition-group";

export default function MainPage() {
    return (
        // <CSSTransition appear in timeout={1250} classNames="anim-main-page">
            <div className="main-page">
                <FirstOffer />
                <SecondOffer />
                <ThirdOffer />
                <FourthOffer />
                <Reserving />
                <Footer />
            </div>
        // </CSSTransition>
    );
}