import { Header, H1 } from './style'
import { Input } from '../../style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const Cabecalho = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispach = useDispatch()

  return (
    <Header>
      <H1>Lista De contatos</H1>
      <Input
        value={termo}
        placeholder="Procure o contato"
        type="text"
        onChange={(e) => dispach(alteraTermo(e.target.value))}
      />
    </Header>
  )
}

export default Cabecalho
