import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import JNavbar from './components/JNavbar'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'

function App() {

  return (
    <HashRouter>
      <JNavbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/product/:id' element={ <Product /> } />
        <Route path='/purchases' element={ <Purchases /> } />
      </Routes>
    </HashRouter>
  )
}

export default App
