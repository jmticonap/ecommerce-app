/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../style'
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const style = appStyle['default'].productCard

    return (
        <div key={product.id} css={style.container} >
            <ImageSlider
                sx={{ width: '100%', height: '300px' }}
                imgs={product.productImgs}
            />
            <h3 css={{ textAlign: 'center' }}>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
        </div>
    );
};

export default ProductCard;