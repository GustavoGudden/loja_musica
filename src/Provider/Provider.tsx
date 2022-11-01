import * as React from "react"

interface ItypeItem {
  nome: string
  preço: string
}
export type TodoContextType = {
  carrinho: ItypeItem[]
  updateItem: ({}: GetPropsResponse) => void
}

interface GetPropsResponse {
  nome: string
  preço: string
}

export const TodoContext = React.createContext<TodoContextType | null>(null)

const TodoProvider: React.FC<React.ReactNode | any> = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState<ItypeItem[]>([
    {
      nome: "",
      preço: "",
    },
  ])

  // const [Item, setItem] = React.useState<ItypeItem[]>([
  //   {
  //     nomeProduto: "produto",
  //     precoTotal: 0,
  //     custoProducao: 0,
  //     quantidade: 0,
  //   },
  // ])

  //  usar para adciçao de produto ao array

  const updateItem = (item: GetPropsResponse) => {
    setCarrinho([
      {
        nome: `${item.nome}`,
        preço: item.preço,
      },
    ])
  }

  return (
    <TodoContext.Provider value={{ carrinho, updateItem }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
