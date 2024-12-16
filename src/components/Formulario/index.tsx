import { ImgDetail, Input, Img, BotaoAdcionar, Form } from './style'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import contato from '../../modules/contatos'
import { Adcionar } from '../../store/reducers/contatos'
const Formulario = () => {
  const [nome, setNome] = useState('')
  const [Numero, setNumero] = useState<number | undefined>(undefined)
  const [Email, setEmail] = useState('')
  const dispatch = useDispatch()

  const cadastraContato = () => {
    const Novocontato = new contato(nome, Numero, Email, 1)
    dispatch(Adcionar(Novocontato))
  }

  const numeroexiste = (): boolean => {
    return Numero !== undefined && Numero.toString().length >= 9
  }

  const Limpacampo = () => {
    setTimeout(() => {
      setNome('')
      setNumero(undefined)
      setEmail('')
    }, 300)
  }
  const cadastro = (e: FormEvent) => {
    e.preventDefault()
    if (numeroexiste()) {
      const numeroConvertido = Numero?.toString() ?? '0'
      if (numeroConvertido.length >= 9) {
        cadastraContato()
        Limpacampo()
      } else {
        return alert('numero incompleto')
      }
    }
  }

  return (
    <Form onSubmit={cadastro}>
      <ImgDetail>
        <Img src="https://placeholder.com/90x90" alt="" />
        <Input
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="nome"
        />
        <Input
          value={Numero !== undefined ? Numero : ''}
          required
          onChange={(e) => {
            const value = e.target.value
            if (value === '') {
              setNumero(undefined)
            } else {
              setNumero(parseFloat(value) || undefined)
            }
          }}
          type="number"
          placeholder="Número"
        />
        <Input
          value={Email}
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <BotaoAdcionar onClick={Limpacampo} type="submit">
          Adcionar
        </BotaoAdcionar>
      </ImgDetail>
    </Form>
  )
}

export default Formulario
