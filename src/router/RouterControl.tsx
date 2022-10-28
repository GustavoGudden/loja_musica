import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

import Carrinho from "../pages/carrinho/carrinho"
import Home from "../pages/home/Home"

function RouteControl() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Carrinho />}></Route>
      </Routes>
    </Router>
  )
}

export default RouteControl
