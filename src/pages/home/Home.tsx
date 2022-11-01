import { ShoppingCart } from "phosphor-react"
import Footer from "../../components/foooter"
import Main from "../../components/main/main"
import { useDrawerContext } from "../../Provider/sideBarContext"
import * as C from "./style"

function Home() {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <C.BoxWrapper>
      <header>
        <h1>logo</h1>
        <ShoppingCart
          onClick={() => {
            toggleDrawerOpen()
          }}
          size={30}
          color="#d9d9d9"
        />
      </header>
      <Main />
      <Footer />
    </C.BoxWrapper>
  )
}

export default Home
