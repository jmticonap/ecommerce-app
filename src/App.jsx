import { useEffect } from 'react'
import './App.css'
import JNavbar from './components/JNavbar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'

import { loadProductDataThunk } from './store/slices/productData.slice'
import { loadCategoryDataThunk } from './store/slices/categoryData.slice'
import { useDispatch } from 'react-redux'
import Loading from './components/Loading'
import { useSelector } from 'react-redux'
import CartPanel from './components/CartPanel'

function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.loadingSlice)
    const isCartVisible = useSelector( state => state.cartShopSlice.visible )

    useEffect(() => {
        dispatch(loadProductDataThunk())
        dispatch(loadCategoryDataThunk())
    }, [])

    return (
        <HashRouter>
            {
                isLoading && <Loading />
            }
            {
                isCartVisible && <CartPanel visible={true} />
            }
            <JNavbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/purchases' element={<Purchases />} />
            </Routes>
        </HashRouter>
    )
}

export default App
