import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
// create a slice
export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: { email: '' },
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload[0] != 'error') {
        state.isLoggedIn = true
        state.user = action.payload
      }
    },
    clearUser: (state) => {
      state.isLoggedIn = false
      state.user = { email: '' }

      console.log(state)
    },
  },
})
// config the store
const store = configureStore({
  reducer: {
    User: UserSlice.reducer,
  },
})

// export default the store
export default store

// export the action
export const UserAction = UserSlice.actions
