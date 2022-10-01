/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../style';
import Jh1 from '../components/basics/Jh1';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import ImageSlider from '../components/ImageSlider';

const Home = () => {
    const style = appStyle['default'].home
    const productList = useSelector(state => state.productDataSlice)

    return (
        <div>
            <Jh1>HOME APP</Jh1>
            <div css={style.productListWrapper}>
                {
                    productList?.map(product => {
                        return (
                            <div style={{width:200}}>
                                <ImageSlider
                                    key={product.id}
                                    width={200}
                                    height={200}
                                    imgs={product.productImgs}
                                />
                                <h2>{product.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;