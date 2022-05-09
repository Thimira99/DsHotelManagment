import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <Link to='/home'><button className='btn btn-primary'>Login</button></Link>
        </div>
    )
}

export default Login;