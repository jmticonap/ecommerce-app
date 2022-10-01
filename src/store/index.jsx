import { configureStore } from "@reduxjs/toolkit"
import userDataSlice from "./slices/userData.slice"
import productDataSlice from "./slices/productData.slice"
import categoryDataSlice from "./slices/categoryData.slice"

const store = configureStore({
    reducer: {
        userDataSlice,
        productDataSlice,
        categoryDataSlice
    }
})

export default store