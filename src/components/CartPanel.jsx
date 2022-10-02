/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import imgEmptyCart from '../assets/img/empty-cart.png'
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import appStyle from '../style';

const CartPanel = ({visible}) => {
    const style = appStyle['default'].cart

    return (
        <section id="shop" css={style.shop(visible)}>
            <Button variant='text'>
                <CloseIcon />
            </Button>
            <h2 css={style.shopTitle}>My Cart</h2>
            <div id="shop-container" className="shop-container">
                <div className="empty-cart">
                    <img src={imgEmptyCart} css={{width:'100%', height:'auto'}} alt="Empty Cart" />
                        <h2 css={{textAlign: 'center',paddingBottom: '5rem'}}>Your cart is empty</h2>
                        <p>You can add items to your cart by clicking on the "" button on the product page.</p>
                </div>
            </div>
            <div css={style.shopResume}>
                <p css={style.shopResumeItems}>
                    <span className="shop-resume__number">0</span>
                    Items
                </p>
                <h3 css={style.shopResumeTotal}>S/ 0.00</h3>
            </div>
            <div css={style.shopBtnContainer}>
                <Button>Delete All</Button>
            </div>
        </section>
    );
};

export default CartPanel; <section>
</section>