import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const allCategories = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'

const categoryDataSlice = createSlice({
    name: 'category_data',
    initialState: [],
    reducers: {
        appendCategoryData: (state, action) => {
            if (action.payload)
                return [...action.payload]
        }
    }
})

export const loadCategoryDataThunk = () => async dispatch => {
    const res = await axios.get(allCategories)
    dispatch(appendCategoryData(res.data.data.categories))
}

export const { appendCategoryData } = categoryDataSlice.actions

export default categoryDataSlice.reducer