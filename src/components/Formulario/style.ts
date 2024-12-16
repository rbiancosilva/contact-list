import styled from 'styled-components'

export const ContainerLista = styled.ul`
  margin-left: 10px;
  text-align: start;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 5px;
`
export const ImgDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  :focus {
    outline: none;
  }
`
export const Input = styled.input`
  width: 50%;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  border-bottom: 2px solid black;
`
export const BotaoAdcionar = styled.button`
  width: 400px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  background-image: linear-gradient(#27ae60, #1abc9c);
  margin-top: 16px;
`

export const Img = styled.img`
  margin-bottom: 16px;
  border: 2px solid #bdc3c7;
  width: 100%;
  max-width: 90px;
  border-radius: 50px;
`

export const Form = styled.form``
