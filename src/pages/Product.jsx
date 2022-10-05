/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useNavigate } from 'react-router-dom'

import { useEffect, useState, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { Snackbar, Fab, Button, Slide } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import appStyle from '../style'
import { numberToCurrency } from '../utils'
import ImageSlider from '../components/ImageSlider'
import QuantitySelector from '../components/QuantitySelector'
import { setLoading } from '../store/slices/loading.slice'
import {
    appendArticle,
    addProductCartThunk,
    cleanArticles,
    loadUserCartThunk
} from '../store/slices/cartShop.slice'
import ProductCard from '../components/ProductCard'

export const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

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
            .filter(prod => prod.category.name === product.category.name)
    )
    const [open, setOpen] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [currentImg, setCurrentImg] = useState(0)

    //==========================================================================
    //==============================functions===================================
    //==========================================================================
    const addProductToCart = () => {
        dispatch(addProductCartThunk({
            product: product,
            quantity: quantity
        }, errMsj => {
            setErrMessage(errMsj)
            setOpen(true)
            console.log("Message error:", errMsj)
        }))

    }
    const goBack = () => {
        navigate(-1)
    }
    const closeHandler = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }
    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }
    const currentImgHandler = (index) => {
        setCurrentImg(index)
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    }, [])

    return (
        <Container>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={closeHandler}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
                <Alert onClose={closeHandler} severity="info" sx={{ width: '100%' }}>
                    {errMessage}
                </Alert>
            </Snackbar>
            <div css={{ display: 'flex', gap: '2rem' }}>
                <Fab onClick={goBack} color='primary' aria-label='Back'>
                    <ArrowBackIcon />
                </Fab>
                <h1 css={appStyle['default'].title1}>Product details</h1>
            </div>
            <section css={style.container}>
                <div css={appStyle['default'].flexCenter}>
                    <div css={style.imageControl}>
                        <ImageSlider
                            id='product_slider'
                            scrollIndex={currentImg}
                            sx={style.slider}
                            imgs={product?.productImgs} />
                        <div css={style.thumbnailWrapper}>
                            {
                                product?.productImgs.map((img, i) => (
                                    <img
                                        css={{
                                            ...style.thumbnail,
                                            border: currentImg === i
                                                ? '3px solid darkgray'
                                                : '1px solid gray'
                                        }}
                                        onClick={()=>currentImgHandler(i)}
                                        src={img} alt='Thumbnail' />
                                ))
                            }
                        </div>
                    </div>
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