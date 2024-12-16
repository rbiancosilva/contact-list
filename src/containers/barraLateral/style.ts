import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoContato = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const Aside = styled.aside`
  background-color: #eeee;
  height: 100vh;
  a:hover {
    background-image: linear-gradient(#ecf0f1, #bdc3c7);
    border: 1px solid rgba(173, 240, 280);
  }
`
