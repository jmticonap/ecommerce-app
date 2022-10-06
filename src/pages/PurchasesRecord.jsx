/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../store/slices/loading.slice'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'
import { numberToCurrency } from '../utils';
import { Container } from 'react-bootstrap';

const PurchasesRecord = () => {
    const dispatch = useDispatch()
    const purchasesRecord = useSelector(state => state.purchasesSlice.registry)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 500);
    }, [])


    return (
        <Container>


            <section>
                <h2>Purchases rocord</h2>
                <div>
                    {
                        purchasesRecord?.map((itm, i) => {
                            return (
                                <div key={`purchase_${(new Date(itm.createdAt)).getTime()}_${i}`}>
                                    <h4>{(new Date(itm.createdAt)).toLocaleString()}</h4>
                                    <div>

                                        <TableContainer component={Paper} sx={{ maxWidth: '700px' }}>
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
                                                    {itm.cart.products?.map(article => (
                                                        <TableRow
                                                            key={article.title}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {article.title}
                                                            </TableCell>
                                                            <TableCell align="right">{article.productsInCart.quantity}</TableCell>
                                                            <TableCell align="right">{numberToCurrency(article.price)}</TableCell>
                                                            <TableCell align="right">{numberToCurrency(article.productsInCart.quantity * article.price)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <div css={{ textAlign: 'right', width: '100%', maxWidth: '700px', padding: '1rem 0' }}>
                                            <span>
                                                TOTAL:{' '}
                                                {
                                                    numberToCurrency(itm.cart.products.reduce((a, b) => a + (b.price * b.productsInCart.quantity), 0))
                                                }
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </Container>
    );
};

export default PurchasesRecord;