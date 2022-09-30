import { configureStore } from "@reduxjs/toolkit"
import userDataSlice from "./slices/userData.slice"

const store = configureStore({
    reducer: {
        userDataSlice
    }
})

export default store