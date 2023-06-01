import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";

const initialState = {
    room: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const fetchRoomById = createAsyncThunk(
    'Room/getRoomById',
    async (id, thunkAPI) => {
        try {
            return await roomService.fetchRoomsbyId(id)
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
export const createRooms = createAsyncThunk(
    'rooms/create',
    async ({hotelId, roomData}, thunkAPI) => {
        try {
            return await roomService.createRoom({hotelId, roomData})
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

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRoomById.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchRoomById.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.room = action.payload
        })
        .addCase(fetchRoomById.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(createRooms.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createRooms.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.room.push(action.payload)
        })
        .addCase(createRooms.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = roomSlice.actions
export default roomSlice.reducer