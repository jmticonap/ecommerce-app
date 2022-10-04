import { createSlice } from "@reduxjs/toolkit"

const cartShopSlice = createSlice({
    name: 'cart_shop',
    initialState: {
        visible: true,
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
            } else {
                article.quantity += 1
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

export const {
    appendArticle,
    cleanArticles,
    deleteArticle,
    setCartVisible,
    increaseQuantity,
    decreaseQuantity } = cartShopSlice.actions

export default cartShopSlice.reducer