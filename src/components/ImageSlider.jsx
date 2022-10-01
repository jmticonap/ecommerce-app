/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../style';
import { useState } from 'react';
import imgLoader from '../assets/img/loading-36.gif'

const ImageSlider = ({ sx, imgs, width, height }) => {
    const style = appStyle['default'].imageSlider
    const [currentImg, setCurrentImg] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    const goBack = evt => {
        setIsLoaded(true)
        if (currentImg === 0)
            setCurrentImg(imgs.length - 1)
        else
            setCurrentImg(currentImg - 1)
    }
    const goForward = evt => {
        setIsLoaded(true)
        if (currentImg === imgs.length - 1)
            setCurrentImg(0)
        else
            setCurrentImg(currentImg + 1)
    }
    const loadComplete = evt => {
        setIsLoaded(!evt.target.complete)
    }

    return (
        <div css={style.wrapper(width)}>
            <div onClick={goBack} css={style.btnLeft}></div>
            <div onClick={goForward} css={style.btnRight}></div>
            {
                isLoaded && (
                    <img
                        css={style.loader(height)}
                        src={imgLoader}
                        alt="Loader" />
                )
            }
            <div css={style.container(width, height)}>
                {
                    imgs && imgs.length > 0
                        ? (<img
                            className='slideshow-img'
                            onLoad={loadComplete}
                            css={style.img}
                            src={imgs[currentImg]} />)
                        : <h2>No image</h2>
                }
            </div>
        </div>
    );
};

export default ImageSlider;