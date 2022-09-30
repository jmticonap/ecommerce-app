/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../../style'

const Jh1 = ({ children, style }) => {
    
    return (
        <h1 css={appStyle[style||'default'].title1}>{children}</h1>
    );
};

export default Jh1;