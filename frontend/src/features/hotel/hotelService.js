import axios from 'axios'

const API_URL = '/api/hotel/'

// Get user goals
const getCountData = async () => {
    const response = await axios.get(API_URL + 'countByCity?cities=madrid,berlin,london')
    return response.data
}

const getCountByType = async () => {
    const response = await axios.get(API_URL + 'countByType')
    return response.data
}

const getHome = async () => {
    const response = await axios.get(API_URL + 'limit')
    return response.data
}

const getHotels = async (destination, min, max) => {
    const response = await axios.get(`api/hotel?city=${destination}&min=${min || 0 }&max=${max || 999}`)
    return response.data
}

const getHotelDetails = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
}

const fetchRoomsbyId = async (id) => {
    const response = await axios.get(API_URL + 'room/' + id)
    return response.data
}

const hotelService = {
    getCountData,
    getCountByType,
    getHome,
    getHotels,
    getHotelDetails,
    fetchRoomsbyId
}

export default hotelService