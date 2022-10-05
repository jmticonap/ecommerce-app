/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

import appStyle from '../style'
import Jh1 from '../components/basics/Jh1'
import ProductCard from '../components/ProductCard'

import { setLoading } from '../store/slices/loading.slice'
import { loadUserCartThunk } from '../store/slices/cartShop.slice'
import { getUserSesion } from '../utils';

import { Container } from 'react-bootstrap';

const Home = () => {
    const dispatch = useDispatch()
    const style = appStyle['default'].home
    const productList = useSelector(state => state.productDataSlice)
    const categoryList = useSelector(state => state.categoryDataSlice)
    const [currentCategory, setCurrentCategory] = useState('*')

    const renderCards = () => {

    }
    const openCollaps = evt => {
        evt.target.parentElement.nextElementSibling.classList.toggle('show')
        evt.target.classList.toggle('collapsed')
    }
    const categoryFilter = (evt, category) => {
        evt.preventDefault()
        setCurrentCategory(category)
    }
    const filterProductList = () => {
        if (currentCategory === '*') {
            return productList
        } else {
            return productList.filter(product => product.category.name === currentCategory.name)
        }

    }

    useEffect(() => {
        if (getUserSesion().token != '')
            dispatch(loadUserCartThunk())

        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    }, [])

    return (
        <Container>
            <Jh1>HOME APP</Jh1>
            <main css={style.main}>
                <aside css={{ width: '250px' }}>

                    <div id="accordionExample">
                        <div>
                            <h2>Categories</h2>
                                    <ul>
                                        <li
                                            css={style.filterLi}>
                                            <a
                                                onClick={evt => categoryFilter(evt, '*')}
                                                css={currentCategory == '*' ? style.filterLinkActive : style.filterLink}
                                                href=''>All categories</a>
                                        </li>
                                        {
                                            categoryList?.map(cat => (
                                                cat.status == 'active' &&
                                                <li css={style.filterLi} key={cat.name}>
                                                    <a
                                                        onClick={evt => categoryFilter(evt, cat)}
                                                        css={currentCategory.id == cat.id ? style.filterLinkActive : style.filterLink}
                                                        href=''>
                                                        {cat.name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                            
                        </div>

                    </div>

                </aside>
                <section css={style.productListWrapper}>
                    {
                        filterProductList()?.map(product => <ProductCard key={product.title} product={product} width='250px' height='400px' />)
                    }
                </section>
            </main>

        </Container>
    );
};

export default Home;