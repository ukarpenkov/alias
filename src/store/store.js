import { combineReducer, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducer({

})

export const store = configureStore({
  reducer: rootReducer
})