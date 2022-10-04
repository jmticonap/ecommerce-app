/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../style'
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { Link } from 'react-router-dom'

const ProductCard = ({product, width, height}) => {
    const style = appStyle['default'].productCard

    return (
        <div css={{...style.container, width: width, height: height}} >
            <img
                css={{ width: '100%', height: width, objectFit:'contain' }}
                src={product.productImgs[0]}
            />
            <h3 css={{ textAlign: 'center' }}>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
        </div>
    );
};

export default ProductCard;