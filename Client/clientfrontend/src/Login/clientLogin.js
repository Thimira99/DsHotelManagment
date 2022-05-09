import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function ClientLogin() {
    return (
        <div>
            <Link to='/home'><button>Login</button></Link>
        </div>
    )
}

export default ClientLogin;