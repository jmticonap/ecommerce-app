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
        }
    }
})


export const loadUserCartThunk = () => dispatch => {
    if (localStorage.getItem('token') != '') {
        return axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
            .then(res => {
                res.data.data.cart.products.forEach( async product => {
                    const resp = await axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${product.id}`)
                    const article = {
                        product: resp.data.data.product,
                        quantity: product.productsInCart.quantity
                    }
                    dispatch(appendArticle(article))
                })
            })
            .catch(err => console.log(err))
    }
}

export const addProductCartThunk = article => dispatch => {
    const data = {
        id: article.product.id,
        quantity: article.quantity
    }

    if (localStorage.getItem('token') != '') {
        return axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', data, getConfig())
            .then ( res => {
                dispatch(appendArticle(article))
            } )
            .catch( err => {
                alert( err.response.data.message )
            } )
    }
}

export const removeProductCartThunk = id => dispatch => {
    if (localStorage.getItem('token') != ''){
        dispatch(deleteArticle(id))
        return axios
            .delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
            .then(res => console.log("Product removed", res))
            .catch(err => alert(err))
    }
}

export const {
    appendArticle,
    cleanArticles,
    deleteArticle,
    setCartVisible,
    increaseQuantity,
    decreaseQuantity } = cartShopSlice.actions

export default cartShopSlice.reducer