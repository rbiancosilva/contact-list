import { useEffect, useState } from 'react'
import {
  Container,
  Image,
  Paragrafo,
  ButtonEditar,
  ContainerBotao,
  BotaoAdcinar,
  Overlay,
  BotaoRemover,
  BotaoCancelar
} from './style'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../modules/contatos'
import { Editar, Remover } from '../../store/reducers/contatos'
type props = ContatoClass & {
  idSelecionado: number | null
  setIdSelecionado: (id: number | null) => void
}

const Contato = ({
  nome: NomeOriginal,
  numero: NumeroOriginal,
  email: EmailOriginal,
  id,
  idSelecionado,
  setIdSelecionado
}: props) => {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState<number | undefined>(undefined)
  const [email, setEmail] = useState('')
  const [EditandoItem, setEditandoItem] = useState(false)

  const dispach = useDispatch()

  useEffect(() => {
    if (NomeOriginal.length > 0) {
      setNome(NomeOriginal)
    }
    if (NumeroOriginal !== undefined && NumeroOriginal > 0) {
      setNumero(NumeroOriginal)
    }
    if (EmailOriginal.length > 0) {
      setEmail(EmailOriginal)
    }
  }, [NomeOriginal, NumeroOriginal, EmailOriginal])
  const MudaDisplay = () => {
    setIdSelecionado(idSelecionado === id ? null : id)
  }
  return (
    <>
      <Container onClick={() => MudaDisplay}>
        <Image src="https://placeholder.com/30x30" />
        <div style={{ position: 'relative', width: '400px' }}>
          <Paragrafo
            disabled={!EditandoItem}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {!EditandoItem && <Overlay onClick={MudaDisplay} />}
        </div>
        <div style={{ position: 'relative', width: '400px' }}>
          <Paragrafo
            disabled={!EditandoItem}
            value={numero !== undefined ? numero : ''}
            onChange={(e) =>
              setNumero(
                e.target.value !== '' ? Number(e.target.value) : undefined
              )
            }
          />
          {!EditandoItem && <Overlay onClick={MudaDisplay} />}
        </div>
        <div style={{ position: 'relative', width: '400px' }}>
          <Paragrafo
            disabled={!EditandoItem}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!EditandoItem && <Overlay onClick={MudaDisplay} />}
        </div>
      </Container>
      <ContainerBotao>
        {!EditandoItem ? (
          <>
            <ButtonEditar
              style={{ display: idSelecionado === id ? 'block' : 'none' }}
              onClick={(e) => {
                e.stopPropagation()
                setEditandoItem(true)
              }}
            >
              Editar
            </ButtonEditar>
            <BotaoRemover
              style={{ display: idSelecionado === id ? 'block' : 'none' }}
              onClick={() => {
                dispach(Remover(id))
              }}
            >
              Remover
            </BotaoRemover>
          </>
        ) : (
          <>
            <BotaoAdcinar
              style={{ display: idSelecionado === id ? 'block' : 'none' }}
              onClick={(e) => {
                e.stopPropagation()
                setEditandoItem(false)
                if (
                  nome.length > 0 &&
                  email.length > 0 &&
                  numero !== undefined
                ) {
                  dispach(
                    Editar({
                      nome,
                      numero,
                      email,
                      id
                    })
                  )
                } else {
                  setNome(NomeOriginal)
                  setNumero(NumeroOriginal)
                  setEmail(EmailOriginal)
                  alert(`Um ou mais campos estão vazios`)
                }
              }}
            >
              Adcionar
            </BotaoAdcinar>
            <BotaoCancelar
              style={{ display: idSelecionado === id ? 'block' : 'none' }}
              onClick={() => {
                setEditandoItem(false)
              }}
            >
              Cancelar
            </BotaoCancelar>
          </>
        )}
      </ContainerBotao>
    </>
  )
}

export default Contato
