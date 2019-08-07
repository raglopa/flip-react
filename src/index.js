import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import Root from "./components/Root"
import configureStore from "./configureStore"
import ReactGA from "react-ga"

ReactGA.initialize("UA-107710846-1")
ReactGA.set({ page: window.location.pathname + window.location.search })
ReactGA.pageview(window.location.pathname + window.location.search)

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById("root"))
