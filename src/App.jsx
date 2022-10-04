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

import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.loadingSlice)
    const isCartVisible = useSelector( state => state.cartShopSlice.visible )

    useEffect(() => {
        //Init local schema for user sesion
        if(localStorage.getItem('token') === null){
            localStorage.setItem('token', '')
        }
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

                <Route element={ <ProtectedRoutes /> } >
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/purchases' element={<Purchases />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
