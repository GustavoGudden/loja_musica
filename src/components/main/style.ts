import styled from "styled-components"

const media = {
  desktop: "@media(min-width:1024px)",
}

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BannerArea = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-image: url(https://i.ibb.co/WsvZqxm/concert-g85f65547c-1920.jpg);
  background-size: 100% 100%;
  width: 100%;
  height: 300px;

  ${media.desktop} {
    height: 400px;
  }

  div {
    display: flex;
    padding: 7px;
    margin-top: 2rem;
    margin-right: 7px;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    width: 70%;
    height: 45%;
    color: white;

    ${media.desktop} {
      width: 30%;
      margin-top: 4rem;
      margin-right: 4rem;
    }

    h1 {
      font-size: 45px;
      font-weight: bold;
    }

    p {
      font-size: 25px;
      font-weight: bold;
    }
  }
`
export const CardArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${media.desktop} {
    flex-direction: row;
    gap: 7px;
    padding: 7px;
    margin: 7px;
  }
`

export const Card = styled.div<{ img: string; flex: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
  margin-top: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: 100% 100%;
  width: 90%;
  height: 300px;
  padding-left: 7px;
  color: white;
  margin-bottom: 7px;

  ${media.desktop} {
    flex: ${(props) => props.flex};
  }

  > button {
    color: #fff;
    padding: 7px;
    border: 2px solid white;
    width: 50%;
    background-color: transparent;
    font-size: 20px;
    font-weight: 500;
    :hover {
      background-color: white;
      color: black;
    }
  }
`
export const EmphasisArea = styled.div`
  width: 100%;
  padding: 1rem;

  .divisor {
    align-items: center;
    width: 100%;
    display: flex;
    gap: 7px;
    > div {
      width: 50%;
      height: 0;
      border: 1px solid black;
    }
  }
`
