import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelService from './hotelService';

const initialState = {
    hotels: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getHotels = createAsyncThunk(
    'hotal/getHotels',
    async ({ destination, min, max }, thunkAPI) => {
        try {
            return await hotelService.getHotels(destination, min, max)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const createHotel = createAsyncThunk(
    'hotels/create',
    async (hotelData, thunkAPI) => {
        try {
            return await hotelService.createHotel(hotelData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)



export const fetchRoomById = createAsyncThunk(
    'Room/getRoomById',
    async (id, thunkAPI) => {
        try {
            return await hotelService.fetchRoomsbyId(id)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotels.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHotels.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hotels = action.payload
            })
            .addCase(getHotels.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createHotel.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createHotel.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hotels.push(action.payload)
            })
            .addCase(createHotel.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(fetchRoomById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchRoomById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.room = (action.payload)
            })
            .addCase(fetchRoomById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})
export const {reset} = hotelsSlice.actions
export default hotelsSlice.reducer