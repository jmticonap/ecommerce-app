import { configureStore } from "@reduxjs/toolkit"
import userDataSlice from "./slices/userData.slice"
import productDataSlice from "./slices/productData.slice"
import categoryDataSlice from "./slices/categoryData.slice"
import cartShopSlice from "./slices/cartShop.slice"

const store = configureStore({
    reducer: {
        userDataSlice,
        productDataSlice,
        categoryDataSlice,
        cartShopSlice
    }
})

export default store