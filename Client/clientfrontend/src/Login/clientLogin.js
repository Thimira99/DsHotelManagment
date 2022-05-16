import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {

            val: ''
        }
        this.setNumberOfNights = this.setNumberOfNights.bind(this)
    }

 

    setNumberOfNights= (ev) => {
        console.log(ev.target.value);

        sessionStorage.setItem('LogStatus', ev.target.value);
        
    }


    render() {
        return (
            <div>

                <a href='/home'><button className='btn btn-primary'>Home</button></a>
                <a href='/JoinNow'><button className='btn btn-primary'>Join Now</button></a>
                <a href='/maps'><button className='btn btn-primary'>Maps</button></a>
                <a href='/payement'><button className='btn btn-primary'>payement</button></a>

                <form>

                    <input
                        type="text"
                        className="form-control"
                        id="numberOfNights"
                        placeholder="Enter Name"
                        onChange={ 
                            this.setNumberOfNights
                        }
                    />
                </form>

            </div>
        )


    }
}

export default ClientLogin;