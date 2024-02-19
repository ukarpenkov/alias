import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const commandInitialState = [
  { id: '1', name: 'Бельчата', score: 0, round: 1, words: [] },
  { id: '2', name: 'Крольчата', score: 0, round: 1, words: [] }
]
const gameInitialState = {
  roundTime: 10,
  wordsToWin: 50,
  currentRound: 1,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    commands: commandInitialState,
    words: wordDB,
    settings: gameInitialState
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
    },
    changeRoundTime(state, action) {
      state.settings.roundTime = action.payload
    },
    chengeWordsCount(state, action) {
      state.settings.wordsToWin = action.payload
    },
    addWords(state, action) {
      state.commands.map((item, index) => {
        return item.words.push(action.payload[index])
      })
    }
  }

})

export default gameSlice.reducer
export const { addCommand, removeCommand, editCommand, changeRoundTime, chengeWordsCount, addWords } = gameSlice.actions
