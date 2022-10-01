/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react'
import appStyle from '../style';
import { useState } from 'react';
import imgLoader from '../assets/img/loader.gif'

const ImageSlider = ({ sx, imgs = [], width = 300, height = 300, throwRandom }) => {
    const style = appStyle['default'].imageSlider
    const [currentImg, setCurrentImg] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [bottom, setBottom] = useState({ bottom: '0' })

    const goBack = evt => {
        setBottom({ bottom: '100%' })
        setTimeout(() => {
            setIsLoaded(true)
            if (currentImg === 0)
                setCurrentImg(imgs.length - 1)
            else
                setCurrentImg(currentImg - 1)
        }, 1000);
    }
    const goForward = evt => {
        setBottom({ bottom: '100%' })
        setTimeout(() => {
            setIsLoaded(true)
            if (currentImg === imgs.length - 1)
                setCurrentImg(0)
            else
                setCurrentImg(currentImg + 1)
        }, 1000);
    }
    const goRandom = () => {
        //Change image between 10 and 50 seconds
        const time = (10 + parseInt(Math.random() * 40)) * 1000

        setTimeout(() => {
            goForward()
        }, time)
    }
    const loadComplete = evt => {
        setIsLoaded(!evt.target.complete)
            if (throwRandom)
                goRandom()
        setTimeout(() => {
            setBottom({ bottom: '0' })
        }, 1000);
    }

    useEffect(() => {
        if (throwRandom)
            goForward()
    }, [])

    return (
        <div css={style.wrapper(width)}>
            <div onClick={goBack} css={style.btnLeft}></div>
            <div onClick={goForward} css={style.btnRight}></div>
            {
                isLoaded && (
                    <img
                        css={style.loader(height/2)}
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
                            css={{...style.img, ...bottom}}
                            src={imgs[currentImg]} />)
                        : <h2>No image</h2>
                }
            </div>
        </div>
    );
};

export default ImageSlider;