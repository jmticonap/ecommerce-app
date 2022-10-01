/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import appStyle from '../style'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import { Container } from 'react-bootstrap'

const Product = () => {
    const style = appStyle['default'].product
    const { id } = useParams()
    const product = useSelector(
        state => (
            state.productDataSlice.find(p => p.id == parseInt(id))
        )
    )

    return (
        <Container>
            <h1 css={appStyle['default'].title1}>Product details</h1>
            <section css={style.container}>
                <div css={appStyle['default'].flexCenter}>
                    
                        <ImageSlider
                            id='product_slider'
                            sx={{width: '100%', minHeight: '370px'}}
                            throwRandom
                            imgs={product?.productImgs} />

                </div>
                <div>
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                </div>
            </section>
        </Container>
    );
};

export default Product;