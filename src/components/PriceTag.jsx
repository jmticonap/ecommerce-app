/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'
import { numberToCurrency } from '../utils'

const PriceTag = ({ price, sx }) => {
    return (
        <div css={sx}>
            <svg width="194.94" height="57.94" version="1.1" viewBox="0 0 194.94 57.94" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-597.55 -519.89)">
                    <path d="m607.77 519.89c-5.6619 0-10.22 4.5582-10.22 10.22v37.5c0 5.6619 4.5587 10.141 10.22 10.22h141.44v-0.0124c1.9275-0.0293 5.6379-1.1966 7.3239-2.2551l33.263-21.263c3.5913-2.2957 3.5913-8.5852 0-10.881l-33.263-21.263c-1.7381-1.1438-5.3964-2.2252-7.3239-2.2545v-0.0124zm171.64 24.011c2.7389 0 4.9592 2.2203 4.9592 4.9592s-2.2203 4.9592-4.9592 4.9592c-2.7389-1e-5 -4.9591-2.2203-4.9591-4.9592s2.2203-4.9591 4.9591-4.9592z"
                        fill="#f55"
                        strokeLinejoin="round" strokeWidth="11.509" />
                </g>
                <text x="16" y="36.283756" fill="#e6e6e6"
                    fontFamily="Caveat" fontSize="28px"
                    strokeWidth=".65" style={{lineHeight:1.25}}
                    xmlSpace="preserve">
                    <tspan x="16" y="36.283756" fill="#e6e6e6" strokeWidth=".65">{numberToCurrency(price)}</tspan></text>
            </svg>
        </div>
    )
}

export default PriceTag