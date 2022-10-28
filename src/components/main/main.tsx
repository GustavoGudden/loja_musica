import { BannerArea, CardArea, MainWrapper } from "./style"

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
      <CardArea img="https://i.ibb.co/vXFym0J/hd-wallpaper-g465c6bc55-1920.jpg">
        <h1>OLA MUNDO</h1>
        <button>SHOP NOW</button>
      </CardArea>
      <CardArea img="https://i.ibb.co/VvLC7dW/piano-g422f570a1-1920.jpg">
        <h1>OLA MUNDO</h1>
        <button>SHOP NOW</button>
      </CardArea>
    </MainWrapper>
  )
}

export default Main
