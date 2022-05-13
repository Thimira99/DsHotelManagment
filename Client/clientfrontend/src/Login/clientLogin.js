import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>

                <a href='/home'><button className='btn btn-primary'>Home</button></a>
                <a href='/JoinNow'><button className='btn btn-primary'>Join Now</button></a>
                
            </div>
        )


    }
}

export default ClientLogin;