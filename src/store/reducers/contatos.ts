import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import contato from '../../modules/contatos'

type ContatoState = {
  itens: contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Lucas',
      numero: 989552823,
      email: 'lucas@gmail.com',
      id: 1
    },
    {
      nome: 'maria',
      numero: 955892328,
      email: 'maria@hotmail.com',
      id: 2
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    Adcionar: (state, action: PayloadAction<Omit<contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (item) => item.numero === action.payload.numero
      )

      if (contatoExistente) {
        return alert('contato ja existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const Novocontato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(Novocontato)
      }
    },
    Editar: (state, action: PayloadAction<contato>) => {
      const indexDocontato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDocontato >= 0) {
        state.itens[indexDocontato] = action.payload
      }
    },
    Remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { Adcionar, Editar, Remover } = contatoSlice.actions
export default contatoSlice.reducer
