import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react"
import * as C from "./style"
function Footer() {
  return (
    <C.Footer>
      <div>
        <p>
          este site foi criando por Gustavo Gudden, <br />
          referencias de imagens em pixbay.com icones por <br /> phosporeact
        </p>
      </div>

      <div>
        contatos:
        <div className="contatos">
          <LinkedinLogo size={32} color="#d9d9d9" />
          <GithubLogo size={32} color="#d9d9d9" />
          <EnvelopeSimple size={32} color="#d9d9d9" />
        </div>
      </div>
    </C.Footer>
  )
}

export default Footer
