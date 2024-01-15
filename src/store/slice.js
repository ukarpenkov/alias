import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'


const gameSlice = createSlice({
  name: 'game',
  initialState: {
    commands: ['звери', 'люди'],
    words: wordDB
  },
  reducers: {
    addComand(state, action) {
      state.commands = state.commands.push('новички')
    }
  }

})

export default gameSlice.reducer
export const { addComand } = gameSlice.actions