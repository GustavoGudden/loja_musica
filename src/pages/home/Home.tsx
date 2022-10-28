import { ShoppingCart } from "phosphor-react"
import Main from "../../components/main/main"
import * as C from "./style"

function Home() {
  return (
    <C.BoxWrapper>
      <header>
        <h1>logo</h1>
        <ShoppingCart size={30} color="#d9d9d9" />
      </header>
      <Main />
    </C.BoxWrapper>
  )
}

export default Home
