import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute, browserHistory} from "react-router"

import App from "./components/App"
import Message from "./components/Message"

import "./less/main.less"

const routes =
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/message/:id" />
    </Route>
</Router>

ReactDOM.render(
    routes,
    document.getElementById("main"))