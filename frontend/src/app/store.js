import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/hotel/hotelSlice'
import authReducer from '../features/user/authSlice'
import roomReducer from '../features/room/roomSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
    room: roomReducer
  },
})