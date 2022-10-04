/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useNavigate } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import appStyle from '../style'
import { numberToCurrency } from '../utils'
import ImageSlider from '../components/ImageSlider'
import QuantitySelector from '../components/QuantitySelector'
import { setLoading } from '../store/slices/loading.slice'
import { appendArticle, addProductCartThunk, cleanArticles, loadUserCartThunk } from '../store/slices/cartShop.slice'
import ProductCard from '../components/ProductCard'



const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const style = appStyle['default'].product
    const { id } = useParams()
    const product = useSelector(
        state => (
            state.productDataSlice.find(p => p.id == parseInt(id))
        )
    )
    const [quantity, setQuantity] = useState(1)
    const relatedProducts = useSelector(
        state => state.productDataSlice
            .filter(prod => prod.category.name === product.category.name
            ))

    //==========================================================================
    //==============================functions===================================
    //==========================================================================
    const addProductToCart = () => {
        dispatch(addProductCartThunk({
            product: product,
            quantity: quantity
        }))

    }
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    }, [])

    return (
        <Container>
            <div css={{ display: 'flex', gap: '2rem' }}>
                <Fab onClick={goBack} color='primary' aria-label='Back'>
                    <ArrowBackIcon />
                </Fab>
                <h1 css={appStyle['default'].title1}>Product details</h1>
            </div>
            <section css={style.container}>
                <div css={appStyle['default'].flexCenter}>

                    <ImageSlider
                        id='product_slider'
                        sx={{ width: '100%', minHeight: '370px', maxHeight: '600px' }}
                        imgs={product?.productImgs} />

                </div>
                <div css={{ display: 'flex', flexFlow: 'column nowrap', gap: '1rem' }}>
                    <h2>{product?.title}</h2>
                    <p css={{ textAlign: 'justify' }}>{product?.description}</p>
                    <div css={style.addCartRow}>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                        <div css={{ textAlign: 'right' }}>
                            <span css={style.price}>{numberToCurrency(product?.price)}</span>
                        </div>
                    </div>
                    <Button
                        onClick={addProductToCart}
                        sx={style.addCartBtn}
                        variant='contained' color='hotpink' >
                        Add to Shopping Cart
                    </Button>
                </div>
            </section>
            <h2>Discover related items</h2>
            <div css={{ display: 'flex', gap: '2rem', flexFlow: 'row wrap' }}>
                {
                    relatedProducts.map(prod => (
                        <div key={`prod-${prod.id}`} css={{ width: '200px', height: '400px' }}>
                            <ProductCard width='200px' height='400px' product={prod} />
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default Product;