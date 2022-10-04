/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import appStyle from '../style';

import React, { useState } from 'react';

const QuantitySelector = ({quantity, setQuantity}) => {
    const style = appStyle['default'].quantitySelector

    return (
        <div css={style.container}>
            <span>Qty:</span>
            <input 
                css={style.input}
                onChange={e=>setQuantity(parseInt(e.target.value))} 
                value={quantity} 
                type='number' />
        </div>
    )
}

export default QuantitySelector