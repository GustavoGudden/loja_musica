import styled from "styled-components"

const media = {
  desktop: "@media(min-width:1024px)",
}

export const PdWraper = styled.div`
  width: 100%;
`
export const Find = styled.div`
  margin-left: 1rem;
  width: 90%;
  background-color: #13111b;
  border-radius: 7px;
  padding: 7px;
  ${media.desktop} {
    display: flex;
    align-items: center;
    width: 60%;
    margin-left: 7px;
    height: 50px;
  }

  > input {
    padding-left: 7px;
    width: 90%;
    height: 30px;
    border: none;
    border-radius: 7px;
    ${media.desktop} {
      width: 70%;
      height: 30px;
    }
  }
`
export const PdArea = styled.div`
  display: flex;
  padding-left: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  ${media.desktop} {
    padding: 7px;
    justify-content: flex-start;
  }
`

export const Produto = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  flex-direction: column;
  width: 45%;
  height: 300px;
  background-color: #454646;
  border-radius: 7px;
  color: #fff;

  ${media.desktop} {
    display: flex;
    width: 25%;
    height: 400px;
  }

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
  }

  > h1 {
    font-size: 25px;
    font-weight: 700;
  }
  > h2 {
    font-size: 20px;
    font-weight: 600;
  }
`
