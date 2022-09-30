import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const userDataSlice = createSlice({
    name: 'user_data',
    initialState: {
        email: '',
        isLogin: false
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                email: state.email,
                isLogin: true
            }
        }

    }
})

export const { login } = userDataSlice.actions

export default userDataSlice.reducer
