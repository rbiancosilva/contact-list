import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type filtrostate = {
  termo: string
}

const initialState: filtrostate = {
  termo: ''
}

const Filtro = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = Filtro.actions
export default Filtro.reducer
