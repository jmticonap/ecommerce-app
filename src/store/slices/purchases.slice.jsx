import { createSlice } from '@reduxjs/toolkit'
import { getConfig } from '../../utils'
import axios from 'axios'

import { Navigate } from 'react-router-dom'

import { cleanArticles } from './cartShop.slice'

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {

    },
    reducers: {

    }
})

export const buyCartThunk = (callback, errorback) => dispatch => {
    const reference = {
        "street": "Green St. 1456",
        "colony": "Southwest",
        "zipCode": 12345,
        "city": "USA",
        "references": "Some references"
    }
    let isDone = false
    axios
        .post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, reference, getConfig())
        .then(res => {
            callback(res)
            dispatch(cleanArticles())
        })
        .catch(err => {
            errorback&&errorback(err)
        })

    return isDone&&(<Navigate to='/' />)
}

export const { } = purchasesSlice.actions

export default purchasesSlice.reducer