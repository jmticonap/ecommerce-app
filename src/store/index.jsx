import { configureStore } from "@reduxjs/toolkit"
import userDataSlice from "./slices/userData.slice"
import productDataSlice from "./slices/productData.slice"
import categoryDataSlice from "./slices/categoryData.slice"
import cartShopSlice from "./slices/cartShop.slice"
import loadingSlice from "./slices/loading.slice"
import appCommonsSlice from "./slices/appCommons.slice"
import purchasesSlice from "./slices/purchases.slice"

const store = configureStore({
    reducer: {
        appCommonsSlice,
        userDataSlice,
        productDataSlice,
        categoryDataSlice,
        cartShopSlice,
        loadingSlice,
        purchasesSlice
    }
})

export default store