import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hoteldetails from './hotelDetailsService';

const initialState = {
    hotel: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getHotelDetails = createAsyncThunk(
    'hotels/getHotelDetails',
    async (id, thunkAPI) => {
        try {
            return await hoteldetails.getHotelDetails(id)
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

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotelDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHotelDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.hotel = (action.payload)
            })
            .addCase(getHotelDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export default hotelSlice.reducer