import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const intialWords1 = wordDB.slice(0, wordDB.length / 2)
const intialWords2 = wordDB.slice(wordDB.length / 2)

const commandInitialState = [
  {
    id: '1', name: 'Бельчата', score: 0,
    round: [{ number: 1, guessedWords: [], notGuessedWords: [] }],
    words: intialWords1,
    isActive: false
  },
  {
    id: '2', name: 'Крольчата', score: 0,
    round: [{ number: 1, guessedWords: [], notGuessedWords: [] }],
    words: intialWords2,
    isActive: false
  }
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
      // return state
    },
    editCommand(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.id === action.payload.id)
      console.log(index)
      updatedState[index].name = action.payload.name
    },
    changeRoundTime(state, action) {
      state.settings.roundTime = action.payload
      // return state
    },
    changeWordsCount(state, action) {
      state.settings.wordsToWin = action.payload
      // return state
    },
    addWords(state, action) {
      state.commands.map((item, index) => {
        item.words = []
        return item.words.push(...action.payload.words[index])
      })
    },
    addGuessedWord(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let word = updatedState[index].words.shift()
      let rounds = updatedState[index].round
      rounds[rounds.length - 1].guessedWords.push(word)
      state.commands = updatedState
      return state
    },
    addNotGuessedWord(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let word = updatedState[index].words.shift()
      let rounds = updatedState[index].round
      rounds[rounds.length - 1].notGuessedWords.push(word)
      state.commands = updatedState
      return state
    },
    setActiveCommand(state) {
      let updatedState = [...state.commands]
      let activeCommandIndex = updatedState.findIndex(commnad => commnad.isActive === true)
      if (activeCommandIndex === -1) {
        updatedState[0].isActive = true
      }
      else if (activeCommandIndex >= updatedState.length) {
        updatedState[0].isActive = true
      }
      else {
        updatedState[activeCommandIndex].isActive = false
        updatedState[activeCommandIndex + 1].isActive = true
      }
      state.commands = updatedState
      return state
    },
    changeGuessedWordsFunc(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let rounds = updatedState[index].round
      let currentRoundGuessedWords = rounds[rounds.length - 1].guessedWords

      currentRoundGuessedWords.filter(word => word !== action.payload.word)
      console.log(currentRoundGuessedWords)
      rounds[rounds.length - 1].notGuessedWords.push(action.payload.word)
      state.commands = updatedState
    }
  }
})

export default gameSlice.reducer
export const { addCommand, removeCommand, editCommand, changeRoundTime, changeWordsCount, addWords, addGuessedWord, addNotGuessedWord, setActiveCommand, changeGuessedWordsFunc } = gameSlice.actions
