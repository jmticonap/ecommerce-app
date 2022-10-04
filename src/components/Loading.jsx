/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react';
import './css/Loading.css'
import appStyle from '../style';
import { useSelector } from 'react-redux'

const Loading = () => {
    const isLoading = useSelector( state => state.loadingSlice )
    const style = appStyle.loading
    const h1Style = {
        fontSize: '2rem',
        color: 'var(--bs-blue)',
        fontWeight: '600'
    }

    return (
        <div css={style.container}>
            <span className="loader"></span>
            <h1 css={h1Style}>Your best choice</h1>
        </div>
    );
};

export default Loading;