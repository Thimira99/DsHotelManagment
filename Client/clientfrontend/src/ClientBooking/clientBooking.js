import React, { Component, useState } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';


import './clientBooking.css';



function ClientBooking() {

    const [customerName, setCustomerName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();

    function sendDetails(e) {
        e.preventDefault();

        const newCustomer = {
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights
        }
        const URL = 'http://localhost:8000/api/roomReservations/post';
        axios.post(URL, newCustomer).then(() => {
            alert("Cusomer Added")
        }).catch((error) => {
            alert(error);
        })

    }



    return (
        <div>
            <ClientNavbar />
            <div className='mainOne'>
                <h1>Bookings</h1>
                <div className='viewButton'>
                    <button className='btn btn-primary'>View Room Details</button>
                </div>

                <div className='mainForm'>
                    <form onSubmit={sendDetails}>
                        <div className="form-group md-6">
                            <label for="customerName">Customer Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                placeholder="Enter Name"
                                onChange={(e) => {
                                    setCustomerName(e.target.value);
                                }} />
                        </div>
                        <div className="form-group">
                            <label for="reservationType">Reservation Type:</label>
                            <select
                                id="reservationType"
                                className="form-control"
                                onChange={(e) => {
                                    setReservationType(e.target.value);
                                }}>
                                <option selected disabled>Choose...</option>
                                <option>Standard</option>
                                <option>Deluxe</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                        <div className="form-group ">
                            <label for="numberOfReservations">Number Of Reservations:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numberOfReservations"
                                placeholder="Enter Number Of Reservations"
                                onChange={(e) => {
                                    setNumberOfReservations(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group md-6">
                            <label for="numberOfNights">Number Of Nights:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numberOfNights"
                                placeholder="Enter Name"
                                onChange={(e) => {
                                    setNumberOfNights(e.target.value);
                                }}
                            />
                        </div>
                        <div className='submitButton'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default ClientBooking;