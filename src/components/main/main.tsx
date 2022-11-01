import Produtos from "../podutos"
import { BannerArea, Card, CardArea, MainWrapper } from "./style"

function Main() {
  return (
    <MainWrapper>
      <BannerArea>
        <div>
          <p>15-20%</p>
          <h1>Discounts</h1>
          <p>on all products</p>
        </div>
      </BannerArea>
      <CardArea>
        <Card
          flex="3"
          img="https://i.ibb.co/vXFym0J/hd-wallpaper-g465c6bc55-1920.jpg"
        >
          <h1>OLA MUNDO</h1>
          <button>SHOP NOW</button>
        </Card>
        <Card flex="2" img="https://i.ibb.co/VvLC7dW/piano-g422f570a1-1920.jpg">
          <h1>OLA MUNDO</h1>
          <button>SHOP NOW</button>
        </Card>
      </CardArea>
      <Produtos />
    </MainWrapper>
  )
}

export default Main
