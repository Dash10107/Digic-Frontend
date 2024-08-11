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


const getAProduct = async (productId) => {
    try {
        const response = await axios.get(`${base_url}/product/${productId}`);
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


const rateTheProduct = async (rating) => {
    try {
        const response = await axios.put(`${base_url}/product/rating`, rating,config);
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

 const addToCart = async(item)=>{
    try {
        const response = await axios.post(`${base_url}/user/cart`, item,config);
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

 const getCart = async()=>{
    try {
        const response = await axios.get(`${base_url}/user/cart`,config);
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

 const removeProductFromCart = async(productId)=>{

    try {
        const response = await axios.delete(`${base_url}/user/delete-product-cart/${productId}`,config );
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

 const updateProductQuantity = async(data)=>{
    try {
        const response = await axios.put(`${base_url}/user/update-item-cart`, data,config);
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

 const emptyCart = async()=>{
    try {
        const response = await axios.delete(`${base_url}/user/empty-cart`,config );
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

 const createOrder = async(data)=>{
    try {
        const response = await axios.post(`${base_url}/user/cart/create-order`, data,config);
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
    getAProduct,
    addToWishlist,
    rateTheProduct,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductQuantity,
    emptyCart,
    createOrder
}