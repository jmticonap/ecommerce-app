import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { getUserSesion, getConfig } from "../../utils"

const cartShopSlice = createSlice({
    name: 'cart_shop',
    initialState: {
        visible: false,
        articles: []
    },
    reducers: {
        appendArticle: (state, action) => {
            const article = state.articles
                .find(itm => itm.product.id === action.payload.product.id)
            if (!article) {
                return {
                    visible: state.visible,
                    articles: [...state.articles, action.payload]
                }
            }
        },
        cleanArticles: state => {
            return {
                ...state,
                articles: []
            }
        },
        deleteArticle: (state, action) => {
            state.articles = state.articles.filter(itm => itm.product.id != action.payload)
        },
        setCartVisible: (state, action) => {
            return {
                ...state,
                visible: action.payload
            }
        },
        increaseQuantity: (state, action) => {
            state.articles.forEach(article => {
                if (article.product.id == action.payload) {
                    article.quantity += 1
                }
            })
        },
        decreaseQuantity: (state, action) => {
            state.articles.forEach(article => {
                if (article.product.id == action.payload) {
                    article.quantity -= 1
                }
            })
        },
        changeQuantity: (state, action) => {
            state.articles.forEach(article => {
                if (article.product.id == action.payload.id) {
                    article.quantity = action.payload.newQuantity
                }
            })
        }
    }
})


export const loadUserCartThunk = (callback) => dispatch => {
    if (localStorage.getItem('token') != '') {
        return axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
            .then(res => {
                res.data.data.cart.products.forEach(async product => {
                    const resp = await axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${product.id}`)
                    const article = {
                        product: resp.data.data.product,
                        quantity: product.productsInCart.quantity
                    }
                    dispatch(appendArticle(article))
                })
                callback && callback()
            })
            .catch(err => console.log(err))
    }
}


export const addProductCartThunk = (article, errorback) => dispatch => {
    const data = {
        id: article.product.id,
        quantity: article.quantity
    }

    if (localStorage.getItem('token') != '') {
        return axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', data, getConfig())
            .then(res => {
                dispatch(appendArticle(article))
            })
            .catch(err => {
                errorback && errorback(err.response.data.message)
            })
    }
}

export const removeProductCartThunk = id => dispatch => {
    if (localStorage.getItem('token') != '') {
        dispatch(deleteArticle(id))
        return axios
            .delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
            .then(res => console.log("Product removed", res))
            .catch(err => alert(err))
    }
}

export const updateProductCartThunk = newQuantity => dispatch => {
    if (localStorage.getItem('token') != '') {
        return axios
            .patch(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, newQuantity, getConfig())
            .then(res => {
                console.log("Product updated", res)
                dispatch(changeQuantity(newQuantity))
            })
            .catch(err => console.log)

    }
}

export const {
    appendArticle,
    cleanArticles,
    deleteArticle,
    setCartVisible,
    increaseQuantity,
    decreaseQuantity,
    changeQuantity } = cartShopSlice.actions

export default cartShopSlice.reducer