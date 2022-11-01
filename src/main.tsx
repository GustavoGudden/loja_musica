import React from "react"
import ReactDOM from "react-dom/client"
import { MenuLateral } from "./components/sidebar/sidebar"
import { GlobalStyle } from "./globalStyle"
import TodoProvider from "./Provider/Provider"
import { DrawerProvider } from "./Provider/sideBarContext"

import RouteControl from "./router/RouterControl"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoProvider>
      <DrawerProvider>
        <MenuLateral>
          <RouteControl></RouteControl>
        </MenuLateral>
      </DrawerProvider>
    </TodoProvider>
  </React.StrictMode>
)
