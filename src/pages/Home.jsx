/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'

import { Autocomplete, TextField } from '@mui/material';

import appStyle from '../style'
import ProductCard from '../components/ProductCard'

import { setLoading } from '../store/slices/loading.slice'
import { loadUserCartThunk } from '../store/slices/cartShop.slice'
import { changeCurrentCategory } from '../store/slices/appCommons.slice'
import { getUserSesion } from '../utils'

import { Container } from 'react-bootstrap'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const style = appStyle['default'].home
    const productList = useSelector(state => state.productDataSlice)
    const categoryList = useSelector(state => state.categoryDataSlice)
    const currentCategory = useSelector(state => state.appCommonsSlice.currentCategory)

    const renderCards = () => {

    }
    const openCollaps = evt => {
        evt.target.parentElement.nextElementSibling.classList.toggle('show')
        evt.target.classList.toggle('collapsed')
    }
    const categoryFilter = (evt, category) => {
        evt.preventDefault()
        dispatch(changeCurrentCategory(category))
    }
    const filterProductList = () => {
        if (currentCategory === '*') {
            return productList
        } else {
            return productList.filter(product => product.category.name === currentCategory.name)
        }

    }
    const productTitleList = () => productList
        .map(product => ({
            id: product.id,
            label: product.title
        }))
    const goToProduct = (evt, itm) => {
        navigate(`/product/${itm.id}`)
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
            <div css={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
                <h2 css={{ color: '#ffcfca', fontWeight: '600', fontSize: '2rem' }}>Home App</h2>
                <div css={{padding:'0 0 1rem 0'}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-products"
                        options={productTitleList()}
                        onChange={goToProduct}
                        sx={{ width: '90%' }}
                        renderInput={(params) => <TextField {...params} label="Product" />}
                    />
                </div>
            </div>
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