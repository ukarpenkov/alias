import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const commandInitialState = [{ id: '1', name: 'Бельчата' }, { id: '2', name: 'Крольчата' }]
const gameInitialState = {
  roundTime: 60,
  wordsToWind: 50

}

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
    editCommand(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.id === action.payload.id)
      updatedState[index].name = action.payload.name
      state.commands = updatedState
    }
  }

})

export default gameSlice.reducer
export const { addCommand, removeCommand, editCommand } = gameSlice.actions
