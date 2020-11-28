import React from "react";
import MainPage from "./MainPage/MainPage";
import MenuPage from "./MenuPage/MenuPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/menu" component={MenuPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;