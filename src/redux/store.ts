import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// create a slice
export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true
      state.user = { ...action.payload.data.email }
    },
    clearUser: (state) => {
      state.isLoggedIn = false
      state.user = {}

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
