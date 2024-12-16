import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Botao = styled(Link)`
  border-radius: 100px;
  display: flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 40px;
  color: black;
  background-color: #2ecc71;
  position: fixed;

  right: 5px;
  bottom: 10px;
`
