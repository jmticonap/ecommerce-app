/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import cartEmptyImg from '../assets/img/empty-cart.png'
import sellsmanImg from '../assets/img/consumidor.webp'
import { useEffect, useState } from 'react'
import {
    Button,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableContainer,
    TableCell
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loadUserCartThunk } from '../store/slices/cartShop.slice'
import { buyCartThunk } from '../store/slices/purchases.slice';
import { setLoading } from '../store/slices/loading.slice'
import { numberToCurrency } from '../utils';


const Purchases = () => {
    const articles = useSelector(state => state.cartShopSlice.articles)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [successPurchase, setSuccessPurchase] = useState(0)
    const [currentImg, setCurrentImg] = useState(cartEmptyImg)

    const checkoutHandler = () => {
        dispatch(buyCartThunk(res => {
            if (res.data.status === 'success') {
                setCurrentImg(sellsmanImg)
                setSuccessPurchase(successPurchase + 1)
            }
        }))
    }

    useEffect(() => {
        if(articles.length===0) dispatch(loadUserCartThunk(()=>{
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 500)
        }))

        if (successPurchase > 0) {
            setCurrentImg(sellsmanImg)
        } else {
            setCurrentImg(cartEmptyImg)
        }
    }, [])

    return (
        <div css={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
            <h1>Purchases</h1>

            {
                articles.length === 0
                    ? (<>
                        {successPurchase === 0
                            ? <h1> There is no articles to show </h1>
                            : <h1> Thank you for your purchase </h1>}
                        <img src={currentImg} alt="Empty List" />
                    </>)
                    : (<><TableContainer component={Paper} sx={{ maxWidth: '700px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Sub-Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {articles?.map((article) => (
                                    <TableRow
                                        key={article.product.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {article.product.title}
                                        </TableCell>
                                        <TableCell align="right">{article.quantity}</TableCell>
                                        <TableCell align="right">{numberToCurrency(article.product.price)}</TableCell>
                                        <TableCell align="right">{numberToCurrency(article.quantity * article.product.price)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                        <div css={{ textAlign: 'right', width: '100%', maxWidth: '700px', padding: '1rem 0' }}>
                            <span>
                                TOTAL:{' '}
                                {
                                    numberToCurrency(articles.reduce((a, b) => a + (b.product.price * b.quantity), 0))
                                }
                            </span>
                        </div></>)

            }



            <Button
                disabled={articles.length === 0}
                onClick={checkoutHandler}
                sx={{ width: '15rem', borderRadius: '2rem' }}
                color='primary'
                variant='contained'>
                Checkout
            </Button>
        </div>
    );
};

export default Purchases;