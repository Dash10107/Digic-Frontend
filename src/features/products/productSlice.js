import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";



export  const getAllProducts = createAsyncThunk(
    "product/get",
    async(thunkAPI)=>{
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export  const getAProducts = createAsyncThunk(
    "product/get-single",
    async(productId,thunkAPI)=>{
        try {
            return await productService.getAProduct(productId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const addToWishlist = createAsyncThunk("product/wishlist", async (productId,thunkAPI) => {
    try {
        const response = await productService.addToWishlist(productId);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const rateProduct = createAsyncThunk("product/rating", async (rating,thunkAPI) => {
    try {
        const response = await productService.rateTheProduct(rating);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})




const initialState = {
    products:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading = true; 
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            // state.message = action.payload;
            
            // toast.success("Fetched Products Successfully");
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            toast.error("Couldnt Fetch Products " + state.message);
        });
        builder.addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        }
        )
        .addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.addToWishlist = action.payload;
            state.message = "Product added to wishlist";

        })
        .addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
        builder
        .addCase(getAProducts.pending,(state)=>{
            state.isLoading = true; 
        })
        .addCase(getAProducts.fulfilled, (state, action) => {
            state.singleProduct = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
        })
        .addCase(getAProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            toast.error("Couldnt Fetch Single Product " + state.message);
        });
        builder.addCase(rateProduct.pending, (state) => {
            state.isLoading = true;
        }
        )
        .addCase(rateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.rateProduct = action.payload;
            state.message = "Product rated successfully";

        })
        .addCase(rateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });

    }
})

export default productSlice.reducer;