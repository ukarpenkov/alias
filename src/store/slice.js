import { createSlice } from '@reduxjs/toolkit'
import { wordDB } from '../data/words'

const commandInitialState = []

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    commands: commandInitialState,
    words: wordDB
  },
  reducers: {
    addComand(state, action) {
      state.commands.push(action)
    }
  }

})

export const { actions, reducer } = gameSlice
