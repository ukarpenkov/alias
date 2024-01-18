import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const commandInitialState = ['Бельчата', 'Крольчата']

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    commands: commandInitialState,
    words: wordDB
  },
  reducers: {
    addComand(state, action) {
      state.commands.push(action.payload)
    }
  }

})

export default gameSlice.reducer
export const { addComand } = gameSlice.actions
