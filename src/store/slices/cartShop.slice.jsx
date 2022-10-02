import { createSlice } from "@reduxjs/toolkit"

const cartShopSlice = createSlice({
    name: 'cart_shop',
    initialState: {
        visible: true,
        articles: []
    },
    reducers: {
        appendArticle: (state, action) => {
            return {
                visible: state.visible,
                articles:[ ...state.articles, action.payload ]
            }
        },
        cleanArticles: state => {
            return {
                visible: state.visible,
                articles:[]
            }
        }
    }
})

export const { appendArticle, cleanArticles } = cartShopSlice.actions

export default cartShopSlice.reducer