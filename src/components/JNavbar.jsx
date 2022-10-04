/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Button } from 'react-bootstrap'
import LoginIcon from '@mui/icons-material/Login'
import ShopIcon from '@mui/icons-material/Shop'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setCartVisible } from '../store/slices/cartShop.slice'


const JNavbar = () => {
    const dispatch = useDispatch()
    const cartLength = useSelector( state => state.cartShopSlice.articles.length )
    const expand = 'md'

    const openCart = e => {
        dispatch(setCartVisible(true))
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
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
                            <Nav.Link onClick={openCart} as={Button} className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                                <ShopIcon color='white' />
                                <span css={{padding: '0 0.5rem'}}>{cartLength}</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                <LoginIcon sx={{ marginRight: 1 }} />
                                Login
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default JNavbar