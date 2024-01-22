import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const commandInitialState = [{ id: '1', name: 'Бельчата' }, { id: '2', name: 'Крольчата' }]

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    commands: commandInitialState,
    words: wordDB
  },
  reducers: {
    addCommand(state, action) {
      state.commands.push(action.payload)

    },
    removeCommand(state, action) {
      state.commands = state.commands.filter((item) => item.id !== action.payload)
    },
  }

})

export default gameSlice.reducer
export const { addCommand, removeCommand } = gameSlice.actions
