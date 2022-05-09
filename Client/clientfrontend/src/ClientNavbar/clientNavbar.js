import React, { Component } from 'react';
import './clientNavbar.css';

import { MdSupervisorAccount } from "react-icons/md";

function ClientNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className='navTopic'>
                    <div className='image'>
                        <MdSupervisorAccount />
                    </div>

                    <a className="navbar-brand light" href="#">Client Navbar</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='main'>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default ClientNavbar;