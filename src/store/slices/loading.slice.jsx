import { createSlice } from "@reduxjs/toolkit"

const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        toggleLoading: state => {
            return !state
        },
        setLoading: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { toggleLoading, setLoading } = loadingSlice.actions

export default loadingSlice.reducer
