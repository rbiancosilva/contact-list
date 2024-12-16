import BotaoAdcionar from '../../components/botaoAdcionar'
import ListadeContatos from '../../components/listadecontatos'
import BarraLateral from '../../containers/barraLateral'

const home = () => {
  return (
    <>
      <BarraLateral contato />
      <ListadeContatos />
      <BotaoAdcionar />
    </>
  )
}

export default home
