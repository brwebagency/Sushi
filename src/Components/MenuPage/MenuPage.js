import React from "react";
import { CSSTransition } from "react-transition-group";
import FirstBlock from "./FirstBlock";
import RollHolder from "./Holders/RollHolder";
import SushiHolder from "./Holders/SushiHolder";
import SoupHolder from "./Holders/SoupHolder";
import WokHolder from "./Holders/WokHolder";
import SwitchTab from "../../scripts/SwitchTab";

export default class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: 1 };
    }

    Selector() {
        let HandleTabSwitching = id => {
            SwitchTab(id);
            this.setState({ id });
        }

        return(
            <div className="selector">
                <div onClick={ () => HandleTabSwitching(1) } className="tab tab-1 active">
                    Rolls
                </div>

                <div onClick={ () => HandleTabSwitching(2) } className="tab tab-2">
                    Sushi
                </div>

                <div onClick={ () => HandleTabSwitching(3) } className="tab tab-3">
                    Soups
                </div>

                <div onClick={ () => HandleTabSwitching(4) } className="tab tab-4">
                    Wok
                </div>
            </div>
        )
    }

    render() {
        const allTabs = {
            1: <RollHolder />,
            2: <SushiHolder />,
            3: <SoupHolder />,
            4: <WokHolder />
        }

        let foodHandler = allTabs[this.state.id];

        return(
            <div className="menu-page">
                <FirstBlock />
                { this.Selector() }
                <div className="food-holder">
                    { foodHandler }
                </div>
            </div>
        )
    };
}