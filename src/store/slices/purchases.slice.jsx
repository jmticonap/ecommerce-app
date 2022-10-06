import { createSlice } from '@reduxjs/toolkit'
import { getConfig } from '../../utils'
import axios from 'axios'

import { Navigate } from 'react-router-dom'

import { cleanArticles } from './cartShop.slice'

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        registry: []
    },
    reducers: {
        appendItemRegistry: (state, action) => {
            if (action.payload)
                state.registry.push(...action.payload)
        },
        cleanRegistry: state => {
            state.registry = []
        }

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

export const loadPurchasesRecordThunk = () => dispatch => {
    axios
        .get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then(res => {
            dispatch(appendItemRegistry(res.data.data.purchases))
        })
}

export const { 
    appendItemRegistry, 
    cleanRegistry } = purchasesSlice.actions

export default purchasesSlice.reducer