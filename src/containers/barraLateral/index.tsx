import { Aside, BotaoContato } from './style'

type props = {
  contato: boolean
}

const BarraLateral = ({ contato }: props) => {
  return (
    <Aside>
      {contato ? (
        <BotaoContato to="#">Contatos</BotaoContato>
      ) : (
        <BotaoContato to="/">Voltar</BotaoContato>
      )}
    </Aside>
  )
}

export default BarraLateral
