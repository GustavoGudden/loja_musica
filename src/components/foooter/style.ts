import styled from "styled-components"

const media = {
  desktop: "@media(min-width:1024px)",
}

export const Footer = styled.footer`
  display: flex;
  color: #fff;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 200px;
  gap: 7px;
  background-color: #13111b;
  text-align: justify;

  ${media.desktop} {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }

  .contatos {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`
