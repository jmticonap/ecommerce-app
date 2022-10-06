/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { Button } from '@mui/material'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import appStyle from '../style';
import { setLoading } from '../store/slices/loading.slice'
import { loadPurchasesRecordThunk } from '../store/slices/purchases.slice';

const Login = () => {
    const dispatch = useDispatch()
    const style = appStyle['default'].login
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    
    const [email, setEmail] = useState('kobe@gmail.com')
    const [password, setPassword] = useState('kobe1234')

    const submit = data => {
        axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem('email', res.data.data.user.email)
                localStorage.setItem('token', res.data.data.token)
                dispatch(loadPurchasesRecordThunk())
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    },[])

    return (
        <div css={style.container}>
            <h1>LOGIN</h1>
            <div css={style.tryPanel}>
                <h3>Credencials for try out</h3>
                <small>Just click login</small>
            </div>
            <div css={{maxWidth:'450px'}}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            value={email} 
                            {...register('email')} 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            value={password}
                            {...register('password')} 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" />
                    </div>                
                    <Button type="submit" variant='contained' color='primary'>Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;