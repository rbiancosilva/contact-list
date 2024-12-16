import Contato from '../../components/Formulario'
import Cabecalho from '../../components/header'
import { H1 } from '../../components/header/style'
import { Container, EstiloGlobal } from '../../style'

const ContatoContainer = () => {
  return (
    <>
      <Cabecalho />
      <Container>
        <H1>Lista de contatos</H1>
        <EstiloGlobal />
        <Contato />
      </Container>
    </>
  )
}

export default ContatoContainer
