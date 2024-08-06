import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';


const getProducts = async () => {
    try {
        const response = await axios.get(`${base_url}/product`);
        if(response.status === 200){
            return response.data;
        } else {
            throw new Error(response.data.message || 'Login failed');
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

const addToWishlist = async (productId) => {
    try {
        const response = await axios.put(`${base_url}/product/wishlist`, { prodId:productId },config);
        if(response.status === 200){
            return response.data;
        } else {
            throw new Error(response.data.message || 'Login failed');
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}



export const productService = {
    getProducts,
    addToWishlist,
}