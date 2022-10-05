/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setCartVisible,
    cleanArticles,
    removeProductCartThunk,
    updateProductCartThunk
} from '../store/slices/cartShop.slice'

import imgEmptyCart from '../assets/img/empty-cart.png'
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'

import appStyle from '../style';
import { numberToCurrency } from '../utils'



const ItemCart = ({ article }) => {
    const dispatch = useDispatch()

    const increaseQuantityHandler = () => dispatch(
        updateProductCartThunk(
            {
                id: article.product.id,
                newQuantity: article.quantity+1
            }
        )
    )
    const decreaseQuantityHandler = () => dispatch(
        updateProductCartThunk(
            {
                id: article.product.id,
                newQuantity: article.quantity-1
            }
        )
    )
    const deleteArticleHandler = () => dispatch(removeProductCartThunk(article.product.id))

    return (
        <div css={{ display: 'grid', gridTemplateColumns: '128px auto' }}>
            <div css={{ width: '128px', height: '128px' }}>
                <img css={{ width: '100%', height: '100%', objectFit: 'contain' }} src={article.product.productImgs[0]} />
            </div>
            <div css={{ paddingLeft: '0.5rem' }}>
                <p>{article.product.title}</p>
                <div>
                    <span>sub-total: </span>
                    <span>{numberToCurrency(article.product.price * article.quantity)}</span>
                </div>
            </div>
            <div css={{ gridColumn: '1/3', justifyContent: 'space-between', display: 'flex' }}>
                <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={decreaseQuantityHandler} variant='text'>
                        <RemoveIcon />
                    </Button>
                    <span>{article.quantity}</span>
                    <Button onClick={increaseQuantityHandler} variant='text'>
                        <AddIcon />
                    </Button>
                </div>
                <Button onClick={deleteArticleHandler}>
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    )
}

const CartPanel = () => {
    const style = appStyle['default'].cartPanel
    const [isCartVisible, setIsCartVisible] = useState(false)
    const dispatch = useDispatch()
    const articles = useSelector(state => state.cartShopSlice.articles)



    const closePanel = e => {
        setIsCartVisible(false)
        setTimeout(() => {
            dispatch(setCartVisible(false))
        }, 500);
    }
    const cleanArticlesHandler = e => {
        dispatch(cleanArticles())
    }

    useEffect(() => {
        setIsCartVisible(true)
    }, [])

    return (
        <div css={style.container(isCartVisible)}>
            <section id="shop" css={style.shop(isCartVisible)}>
                <Button onClick={closePanel} variant='text'>
                    <CloseIcon />
                </Button>
                <h2 css={style.shopTitle}>My Cart</h2>
                <div id="shop-container" css={{ display: 'flex', flexFlow: 'column nowrap', gap: '2rem' }}>
                    {
                        articles.length > 0
                            ? (
                                articles.map(article => (
                                    <ItemCart
                                        key={`cart_prod_${article.product.id}`}
                                        article={article} />)
                                )
                            )
                            : (
                                <div >
                                    <img src={imgEmptyCart} css={{ width: '100%', height: 'auto' }} alt="Empty Cart" />
                                    <h2 css={{ textAlign: 'center', paddingBottom: '5rem' }}>Your cart is empty</h2>
                                    <p>You can add items to your cart by clicking on the "Add to shopping cart" button on the product page.</p>
                                </div>
                            )
                    }

                </div>
                <div css={style.shopResume}>
                    <p css={style.shopResumeItems}>
                        <span css={{ paddingRight: '1rem' }}>{articles.length}</span>
                        {articles.length > 1 ? 'Items' : 'Item'}
                    </p>
                    <h3 css={style.shopResumeTotal}>
                        {
                            numberToCurrency(articles.reduce((a, b) => a + (b.product.price * b.quantity), 0))
                        }
                    </h3>
                </div>
                <div css={style.shopBtnContainer}>
                    <Button onClick={cleanArticlesHandler} variant='contained' color='error'>Delete All</Button>
                </div>
            </section >
        </div >
    );
};

export default CartPanel; <section>
</section>