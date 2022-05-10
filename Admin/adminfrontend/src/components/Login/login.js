import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
    return (
        <div className='login'>
            <Link to='/home'><button className='btn btn-primary'>Login</button></Link>
        </div>
    )
}

export default Login;