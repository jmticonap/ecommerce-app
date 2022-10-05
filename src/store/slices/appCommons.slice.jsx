import { createSlice } from '@reduxjs/toolkit'

const appCommonsSlice = createSlice({
    name: 'app_commons',
    initialState: {
        currentCategory: '*'
    },
    reducers: {
        changeCurrentCategory: (state, action) => {
            if (action.payload)
                state.currentCategory = action.payload
        }

    }
})

export const { changeCurrentCategory } = appCommonsSlice.actions

export default appCommonsSlice.reducer