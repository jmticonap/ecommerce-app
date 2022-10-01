import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const allProductsURL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'

const productDataSlice = createSlice({
    name: 'product_data',
    initialState: [],
    reducers: {
        appendProducts: (state, action) => {
            if (action.payload)
                return [...action.payload]
        }
    }
})

export const loadProductDataThunk = () => async dispatch => {
    const res = await axios.get(allProductsURL)
    dispatch(appendProducts(res.data.data.products))
}

export const { appendProducts } = productDataSlice.actions

export default productDataSlice.reducer