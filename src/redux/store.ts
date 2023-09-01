// import { createStore } from 'redux'
// import { reducer } from './reducer'

// export default createStore(reducer)

import { configureStore } from '@reduxjs/toolkit'
import  likeSlice  from './reducer';
export const store = configureStore({
  reducer: {
    like:likeSlice
  },
})
export default store;