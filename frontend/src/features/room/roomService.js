import axios from 'axios'

const API_URL = '/api/hotel/'

const fetchRoomsbyId = async (id) => {
    const response = await axios.get(API_URL + 'room/' + id)
    return response.data
}

const roomService = {
    fetchRoomsbyId
}

export default roomService