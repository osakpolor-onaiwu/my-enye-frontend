import React from "react";
import Home from "./components/home";
import Navigation from "./components/navbar";
import { Switch, HashRouter, Route } from "react-router-dom";
import Record from "./components/recordfull";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/records/:record" component={Record} />
            </Switch>
        </HashRouter>
    );
}

export default App;
