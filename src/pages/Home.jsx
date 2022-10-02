/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import appStyle from '../style';
import Jh1 from '../components/basics/Jh1';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';

const Home = () => {
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

    return (
        <div>
            <Jh1>HOME APP</Jh1>
            <main css={style.main}>
                <aside css={{ width: '400px' }}>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button onClick={openCollaps} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Categories
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                <div className="accordion-body">


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
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button onClick={openCollaps} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button onClick={openCollaps} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>

                </aside>
                <section css={style.productListWrapper}>
                    {
                        filterProductList()?.map(product => {
                            return (
                                <div key={product.id} css={style.card} >
                                    <ImageSlider
                                        sx={{ width: '100%', height: '300px' }}
                                        imgs={product.productImgs}
                                    />
                                    <h3 css={{ textAlign: 'center' }}><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                                </div>
                            )
                        })
                    }
                </section>
            </main>

        </div>
    );
};

export default Home;