import React, { Component } from 'react';
import './adminNavbar.css';

function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand light" href="#">Admin Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='main'>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Room Managment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Taxi Managmnet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Payments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Notifications</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default AdminNavbar;