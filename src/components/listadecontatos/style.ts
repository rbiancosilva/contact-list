import styled from 'styled-components'

export const Li = styled.li`
  display: block;
  align-items: center;
  color: darkslategray;
  font-weight: bold;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px;
  width: 100%;
  cursor: pointer;
`

export const Ul = styled.ul`
  overflow-x: hidden;
  li:hover {
    background-color: #eeee;
    padding: 14px;
    input {
      background-color: #eeee;
      cursor: pointer;
    }
  }
`
