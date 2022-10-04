/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import appStyle from '../style';

import React from 'react';
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
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
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div css={{display: 'flex', flexFlow:'column nowrap', alignItems:'center', justifyContent:'center', height:'100%'}}>
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