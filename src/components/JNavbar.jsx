/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import ShopIcon from '@mui/icons-material/Shop'
import { Button } from '@mui/material'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavDropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCartVisible, cleanArticles } from '../store/slices/cartShop.slice'
import { cleanRegistry } from '../store/slices/purchases.slice'

import { getUserSesion } from '../utils'
import { useNavigate } from 'react-router-dom'


const JNavbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartLength = useSelector(state => state.cartShopSlice.articles.length)
    const userSession = getUserSesion()
    const expand = 'md'

    const openCart = e => {
        dispatch(setCartVisible(true))
    }
    const logoutHandler = () => {
        localStorage.setItem('token', '')
        localStorage.setItem('email', '')
        //clean article from cartShop
        dispatch(cleanArticles())
        dispatch(cleanRegistry())
        navigate('/')
    }

    return (
        <Navbar key={expand} bg="primary" variant='dark' expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#">eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3" css={{gap:'2rem'}}>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <NavDropdown title='Purchases'>
                                <NavDropdown.Item>
                                    <Nav.Link as={Link} to='/purchases'>Current list</Nav.Link>
                                    <Nav.Link as={Link} to='/purchases/record'>Purchases record</Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link onClick={openCart} as={Button} variant='text' color='white'>
                                <ShopIcon color='white' />
                                <span css={{ padding: '0 0.5rem' }}>{cartLength}</span>
                            </Nav.Link>

                            {
                                userSession.token != ''
                                    ? (<>
                                        <Nav.Item css={{lineHeight:'41px', color:'#FFF'}}>{userSession.email}</Nav.Item>
                                        <Nav.Link as={Button} onClick={logoutHandler} variant='text' color='white'>
                                            <LogoutIcon sx={{ marginRight: 1 }} />
                                            Logout
                                        </Nav.Link></>)
                                    : (<Nav.Link as={Link} to='/login'>
                                        <LoginIcon sx={{ marginRight: 1 }} />
                                        Login
                                    </Nav.Link>)
                            }

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}

export default JNavbar