import axios from 'axios'

const API_URL = '/api/hotel/'



const getHotels = async (destination, min, max) => {
    const response = await axios.get(`api/hotel?city=${destination}&min=${min || 0}&max=${max || 999}`)
    return response.data
}

const createHotel = async (hotelData) => {
    const response = await axios.post(API_URL, hotelData)
    return response.data
}



const fetchRoomsbyId = async (id) => {
    const response = await axios.get(API_URL + 'room/' + id)
    return response.data
}

const hotelService = {
    getHotels,
    fetchRoomsbyId,
    createHotel
}

export default hotelService