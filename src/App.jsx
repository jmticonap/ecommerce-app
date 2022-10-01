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

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("Cargando productos")
    dispatch(loadProductDataThunk())
    dispatch(loadCategoryDataThunk())
  },[])

  return (
    <HashRouter>
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
