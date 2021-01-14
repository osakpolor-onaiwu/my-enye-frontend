import React from "react";
import Home from "./components/home";
import Navigation from "./components/navbar";
import { Switch, HashRouter, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default App;
