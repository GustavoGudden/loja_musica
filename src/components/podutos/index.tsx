import { HeartStraight } from "phosphor-react"
import { useContext } from "react"
import { TodoContext, TodoContextType } from "../../Provider/Provider"
import * as C from "./style"

function Produtos() {
  const { updateItem, carrinho } = useContext(TodoContext) as TodoContextType

  const arraypd = [
    {
      nome: "p1",
      preço: "12",
    },
    { nome: "p2", preço: "15,00" },
    { nome: "p3", preço: "19,00" },
    { nome: "p4", preço: "20,00" },
    { nome: "p5", preço: "34,00" },
  ]

  const handleItemUpdate = (nome: string, preço: string) => {
    updateItem({ nome, preço })
  }

  return (
    <C.PdWraper>
      <C.Find>
        <input type="text" name="" id="" placeholder="Busca Produto" />
      </C.Find>
      <C.PdArea>
        {arraypd.map((item) => {
          return (
            <C.Produto>
              <div>
                <HeartStraight
                  onClick={() => handleItemUpdate(item.nome, item.preço)}
                  size={32}
                  color="#d9d9d9"
                />
              </div>
              <h1>{item.nome}</h1>
              <h2>R$:{item.preço}</h2>
            </C.Produto>
          )
        })}
      </C.PdArea>
    </C.PdWraper>
  )
}

export default Produtos
