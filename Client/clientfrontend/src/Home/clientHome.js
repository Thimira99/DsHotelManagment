import React, { Component } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import clientHomeCss from './clientHome.module.css';

import mainlogo from '../images/bgImage.jpg';
import Deluxe from '../images/deluxeking1.jpg';
import Standard from '../images/standard.jpg';
import VIP from '../images/vip.jpg';

import room from '../images/deluxeking1.jpg';
import { Carousel } from 'react-bootstrap';


function ClientHome() {
    return (
        <div className={clientHomeCss.mainPage}>

            <ClientNavbar />
            <div className={clientHomeCss.main}>
                <img src={mainlogo} alt='Key' />
                <div className={clientHomeCss.mainElement}>
                    <h1>Relaxing Rooms</h1>
                    <h3><span>Your Room Your Stay</span></h3>
                    <a href='#section2'>
                        <button className='btn btn-primary'>Get Started</button>
                    </a>

                </div>

            </div>
            <h1>Rooms</h1>
            <div id='section2' className={clientHomeCss.cards}>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={Standard} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Standard Rooms</h5>
                        <a href="/standardRoom" className="btn btn-primary">View Prices and Details</a>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={Deluxe} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Deluxe Rooms</h5>
                        <a href="/deluxeRoom" className="btn btn-primary">View Prices and Details</a>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src={VIP} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">VIP Rooms</h5>
                        <a href="/vipRoom" className="btn btn-primary">View Prices and Details</a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ClientHome;