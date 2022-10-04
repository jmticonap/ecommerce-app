/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useEffect } from 'react'
import appStyle from '../style'
import { useState } from 'react'
import imgLoader from '../assets/img/loader.gif'

const ImageSlider = ({ sx, imgs = [], ratio, id }) => {
    const style = appStyle['default'].imageSlider
    const [currentImg, setCurrentImg] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const breakpoints = { s: 576, m: 768, l: 992, xl: 1200 }

    const goBack = evt => {
        setBottom({ bottom: '100%' })
        setTimeout(() => {
            setIsLoaded(true)
            if (currentImg === 0)
                setCurrentImg(imgs.length - 1)
            else
                setCurrentImg(currentImg - 1)
        }, 500);
    }
    const goForward = evt => {
        setBottom({ bottom: '100%' })
        setTimeout(() => {
            setIsLoaded(true)
            if (currentImg === imgs.length - 1)
                setCurrentImg(0)
            else
                setCurrentImg(currentImg + 1)
        }, 500);
    }
    const loadComplete = evt => {
        setIsLoaded(!evt.target.complete)
    }

    return (
        <div id={id} css={{ ...style.wrapper, ...sx, overflowX:'scroll' }}>
            {/* <div onClick={goBack} css={style.btnLeft}></div>
            <div onClick={goForward} css={style.btnRight}></div> */}

            <div css={style.containerImgs(imgs.length)}>
                {
                    imgs && imgs.length > 0
                        ? (imgs.map(img => (
                            <img
                                key={img}
                                css={{ ...style.img}}
                                src={img} />
                        )))
                        : <h2>No image</h2>
                }
            </div>
        </div>
    );
};

export default ImageSlider;