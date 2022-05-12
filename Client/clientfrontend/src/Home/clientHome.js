import React, { Component } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import clientHomeCss from './clientHome.module.css';

import room from '../images/deluxeking1.jpg';


function ClientHome() {
    return (
        <div className={clientHomeCss.mainPage}>

            <ClientNavbar />
            <h1>Home</h1>
            <div className={clientHomeCss.cards}>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={room} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={room} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={room} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ClientHome;