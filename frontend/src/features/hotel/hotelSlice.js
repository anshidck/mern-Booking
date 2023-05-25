import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelService from './hotelService';

const initialState = {
    data: [],
    type: [],
    home: [],
    hotels: [],
    hotel: [],
    room:[],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getCountData = createAsyncThunk(
    'datas/getData',
    async (_, thunkAPI) => {
        try {
            return await hotelService.getCountData()
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

export const getCountByType = createAsyncThunk(
    'data/getType',
    async (_, thunkAPI) => {
        try {
            return await hotelService.getCountByType()
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

export const getHome = createAsyncThunk(
    'home/getHome',
    async (_, thunkAPI) => {
        try {
            return await hotelService.getHome()
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

export const getHotels = createAsyncThunk(
    'hotal/getHotels',
    async ({destination, min, max}, thunkAPI) => {
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

export const getHotelDetails = createAsyncThunk(
    'hotels/getHotelDetails',
    async (id, thunkAPI) => {
        try {
            return await hotelService.getHotelDetails(id)
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


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCountData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getCountData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCountByType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCountByType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.type = action.payload
            })
            .addCase(getCountByType.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getHome.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHome.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.home = action.payload
            })
            .addCase(getHome.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
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

export default dataSlice.reducer