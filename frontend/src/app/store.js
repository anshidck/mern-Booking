import { configureStore } from '@reduxjs/toolkit'
import hotelsReducer from '../features/hotels/hotelSlice'
import hotelReducer from '../features/hotel/hotelDetialsSlice'
import authReducer from '../features/user/authSlice'
import roomReducer from '../features/room/roomSlice'

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    hotel: hotelReducer,
    auth: authReducer,
    room: roomReducer
  },
})