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
    settings: gameInitialState,
    winner: []
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
      console.log(index)
      updatedState[index].name = action.payload.name
    },
    changeRoundTime(state, action) {
      state.settings.roundTime = action.payload
    },
    changeWordsCount(state, action) {
      state.settings.wordsToWin = action.payload
    },
    addWords(state, action) {
      state.commands.map((item, index) => {
        item.words = []
        return item.words.push(...action.payload.words[index])
      })
    },
    addGuessedWord(state) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let word = updatedState[index].words.shift()
      let rounds = updatedState[index].round
      rounds[rounds.length - 1].guessedWords.push(word)
      state.commands = updatedState
      return state
    },
    addNotGuessedWord(state) {
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
      else if (activeCommandIndex >= updatedState.length - 1) {
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
      let wordIndex = currentRoundGuessedWords.indexOf(action.payload.word)
      currentRoundGuessedWords.splice(wordIndex, 1)
      rounds[rounds.length - 1].notGuessedWords.push(action.payload.word)
      state.commands = updatedState
    },
    changeNotGuessedWordsFunc(state, action) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let rounds = updatedState[index].round
      let currentRoundNotGuessedWords = rounds[rounds.length - 1].notGuessedWords
      let wordIndex = currentRoundNotGuessedWords.indexOf(action.payload.word)
      console.log(wordIndex)
      currentRoundNotGuessedWords.splice(wordIndex, 1)
      rounds[rounds.length - 1].guessedWords.unshift(action.payload.word)
      state.commands = updatedState
    },
    addNetxRound(state) {
      let updatedState = [...state.commands]
      let index = updatedState.findIndex(item => item.isActive === true)
      let rounds = updatedState[index].round
      let currentRoundValue = rounds[rounds.length - 1].number
      let nextRoundData = { number: (currentRoundValue + 1), guessedWords: [], notGuessedWords: [] }
      updatedState[index].round.push(nextRoundData)
      state.commands = updatedState
    },
    setWinner(state, action) {
      state.winner = action.payload
    },
    reset(state) {
      state.commands = commandInitialState
      state.words = wordDB
      state.settings = gameInitialState
      state.words = []
    }
  }
})

export default gameSlice.reducer
export const { addCommand, removeCommand, editCommand, changeRoundTime, changeWordsCount, addWords, addGuessedWord, addNotGuessedWord, setActiveCommand, changeGuessedWordsFunc, changeNotGuessedWordsFunc, addNetxRound, setWinner, reset } = gameSlice.actions
