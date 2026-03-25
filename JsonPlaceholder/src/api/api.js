import axios from 'axios'

const API_URL = 'http://localhost:3001'

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`)
        return response.data
    } catch (error) {
        throw error;
    }
}

export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/products`, product)
        return response.data
    } catch (error) {
        throw error;
    }
}