/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useState } from 'react'

import appStyle from '../style'
import { Link } from 'react-router-dom'
import PriceTag from './PriceTag'

const ProductCard = ({ product, width, height }) => {
    const style = appStyle['default'].productCard

    const [isIn, setIsIn] = useState(false)

    const hoverHandler = evt => setIsIn(true)
    const outHandler = evt => setIsIn(false)

    return (
        <div
            onMouseOver={hoverHandler}
            onMouseOut={outHandler}
            css={{
                ...style.container,
                width: width,
                height: height,
                position: 'relative'
            }} >
            <PriceTag price={product.price} sx={style.priceTag(isIn)} />
            <div css={{
                width: '100%',
                height: width,
                backgroundColor: '#FFF',
                borderTopLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
                overflow: 'hidden'
            }}>
                <img
                    css={{ width: '100%', height: width, objectFit: 'contain' }}
                    src={product.productImgs[0]}
                />
            </div>
            <h3 css={{ textAlign: 'center' }}>
                <Link to={`/product/${product.id}`} css={{textDecoration:'none'}} >{product.title}</Link>
            </h3>
        </div>
    );
};

export default ProductCard;