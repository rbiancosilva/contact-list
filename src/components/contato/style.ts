import styled from 'styled-components'

export const Paragrafo = styled.input`
  margin-left: 30px;
  width: 50%;
  font-size: 20px;
  outline: none;
  background-color: white;
  border: none;
  font-family: 'Handjet', sans-serif;
  font-weight: bold;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  cursor: pointer;
`

export const Image = styled.img`
  border: 2px solid #bdc3c7;
  border-radius: 50px;
`
export const ButtonEditar = styled.button`
  width: 10px;
  padding: 10px;
  color: gray;
  width: 100px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  display: none;
  border-radius: 10px;
`
export const BotaoAdcinar = styled(ButtonEditar)`
  background-color: #2ecc71;
  color: black;
`
export const BotaoCancelar = styled(ButtonEditar)`
  background-color: #e74c3c;
  color: black;
  margin-right: 220px;
`
export const BotaoRemover = styled(ButtonEditar)`
  background-color: #e74c3c;
  color: black;
  margin-right: 220px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
`
export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
`
