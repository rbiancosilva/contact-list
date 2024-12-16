import { Li, Ul } from './style'
import { RootReducer } from '../../store/index'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Contato from '../contato'

const ListadeContatos = () => {
  const FiltroDeitens = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo } = useSelector((state: RootReducer) => state.filtro)
    let itensFiltrados = itens

    if (termo !== undefined) {
      itensFiltrados = itens.filter((item) => {
        const Termominusculo = termo.toLocaleLowerCase()
        return (
          item.nome.toLocaleLowerCase().search(Termominusculo) >= 0 ||
          (item.numero
            ? item.numero.toString().search(Termominusculo) >= 0
            : false) ||
          item.email.toLocaleLowerCase().search(Termominusculo) >= 0
        )
      })

      return itensFiltrados
    } else {
      return itens
    }
  }

  const [idSelecionado, setIdSelecionado] = useState<number | null>(null)
  const ContatoFiltrado = FiltroDeitens

  return (
    <Ul>
      {ContatoFiltrado().map((i) => (
        <Li onClick={() => setIdSelecionado(i.id)} key={i.id}>
          <Contato
            nome={i.nome}
            numero={i.numero}
            email={i.email}
            id={i.id}
            idSelecionado={idSelecionado}
            setIdSelecionado={setIdSelecionado}
          />
        </Li>
      ))}
    </Ul>
  )
}

export default ListadeContatos
