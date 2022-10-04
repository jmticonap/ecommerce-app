/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import appStyle from '../style'
import { numberToCurrency } from '../utils'
import ImageSlider from '../components/ImageSlider'
import QuantitySelector from '../components/QuantitySelector'
import { setLoading } from '../store/slices/loading.slice'
import { appendArticle } from '../store/slices/cartShop.slice'



const Product = () => {
    const dispatch = useDispatch()
    const style = appStyle['default'].product
    const { id } = useParams()
    const product = useSelector(
        state => (
            state.productDataSlice.find(p => p.id == parseInt(id))
        )
    )
    const [quantity, setQuantity] = useState(1)

    const addProductToCart = () => {
        dispatch(appendArticle({
            product: product,
            quantity: quantity
        }))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    }, [])

    return (
        <Container>
            <h1 css={appStyle['default'].title1}>Product details</h1>
            <section css={style.container}>
                <div css={appStyle['default'].flexCenter}>

                    <ImageSlider
                        id='product_slider'
                        sx={{ width: '100%', minHeight: '370px' }}
                        throwRandom
                        imgs={product?.productImgs} />

                </div>
                <div css={{display:'flex', flexFlow:'column nowrap', gap: '1rem'}}>
                    <h2>{product?.title}</h2>
                    <p css={{textAlign:'justify'}}>{product?.description}</p>
                    <div css={style.addCartRow}>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                        <div css={{ textAlign: 'right' }}>
                            <span css={style.price}>{numberToCurrency(product?.price)}</span>
                        </div>
                    </div>
                    <button 
                        onClick={addProductToCart}
                        css={style.addCartBtn}>
                        Add to Shopping Cart
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Product;