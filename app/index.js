import React from "react"
import ReactDOM from "react-dom"
import {Router, Route} from "react-router"

import App from "./components/App.js"

require("./less/main.less")

const routes =
<Router>
    <Route path={"/"} component={App}>
    </Route>
</Router>

ReactDOM.render(
    routes,
    document.getElementById("main"))