import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientLogin extends Component {

constructor(props){
    super(props)

    this.state={

    }
}


    render() {
        return(
            <div>
                  <Link to='/home'><button>Login</button></Link>
                  <Link to='/JoinNow'><button>Join Now</button></Link>
            </div>
        )


    }
}

export default ClientLogin;