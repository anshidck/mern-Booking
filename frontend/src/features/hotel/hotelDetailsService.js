import axios from 'axios'

const API_URL = '/api/hotel/'

const getHotelDetails = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
}

const hoteldetails = {
    getHotelDetails
}

export default hoteldetails