import React from "react"
import ReactDOM from "react-dom/client"
import { GlobalStyle } from "./globalStyle"

import RouteControl from "./router/RouterControl"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouteControl></RouteControl>
  </React.StrictMode>
)
