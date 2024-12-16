import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
margin: 0;
padding:0;
box-sizing: border-box;
list-style:none;
font-family: Roboto, "sans-serif";
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Input = styled.input`
  width: 80%;
  margin-bottom: 16px;
  margin-top: 30px;
  border-radius: 6px;
  padding: 10px;
  margin-left: 20px;
  background-color: rgba(183, 216, 240);
`
