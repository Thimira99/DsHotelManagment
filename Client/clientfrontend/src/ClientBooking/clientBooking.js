import React, { Component, useState, useEffect } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';
import {  useHistory } from "react-router-dom"



import './clientBooking.css';



function ClientBooking() {

    const history = useHistory();

    const [customerName, setCustomerName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();
    const [roomPrice, setRoomPrice] = useState("");
    const [LoginStatus, setLoginStatus] = useState(false);


    function sendDetails(e) {
        e.preventDefault();

        console.log("inside but", LoginStatus)
        // if (!LoginStatus) {


        //     Swal.fire({
        //         title: 'direct to login page',
        //         icon: 'warning',


        //         showCancelButton: false,
        //         showCloseButton: true
        //     })

        //     return -1;
        // }
        const newCustomer = {
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights,
            roomPrice

            history.push("/login")
            return -1;

        }
        const URL = 'http://localhost:8000/api/roomReservations/post';
        axios.post(URL, newCustomer).then(() => {
            alert("Cusomer Added")
        }).catch((error) => {
            alert(error);
        })


    }

    function handleSelectChange(event) {
        console.log("event", event.target.value)
        if (event.target.value) {

            switch (event.target.value) {
                case 'Standard':
                    setRoomPrice("20000");
                    break;

                case 'Deluxe':
                    setRoomPrice("50000");
                    break;

                case 'Luxury':
                    setRoomPrice("90000");
                    break;


            }

        }
        console.log(roomPrice)
        setReservationType(event.target.value)
    }



    useEffect(() => {
        console.log("sessionStorage.getItem('LogStatus')", sessionStorage.getItem('LogStatus'));

        const logStatus = sessionStorage.getItem('LogStatus') == 'true' ? true : false
        console.log("zzz", logStatus)
        setLoginStatus(logStatus)


        console.log(LoginStatus)

    });



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

                        <Row >
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

                        </Row>

                        <Row>

                            <div className="form-group">
                                <label for="reservationType">Reservation Type:</label>
                                <select
                                    id="reservationType"
                                    className="form-control"
                                    onChange={
                                        handleSelectChange
                                    }>
                                    <option selected disabled>Choose...</option>
                                    <option>Standard</option>
                                    <option>Deluxe</option>
                                    <option>Luxury</option>
                                </select>
                            </div>

                        </Row>

                        <Row>


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

                        </Row>

                        <Row>

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

                        </Row>

                        <Row>

                            <Col xs={2}>

                                <div className='submitButton'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </Col>

                            <Col xs={3}>

                                {LoginStatus &&
                                    <div className='submitButton'>
                                        <button type="submit" className="btn btn-primary">PayNow</button>
                                    </div>


                                }


                            </Col>

                            <Col>

                                <p style={{ "font-family": "Montserrat,Verdana,Helvetica,Arial,sans-serif", "font-size": "23px", "marginTop": "20px", "margin-left": "160px" }}>Rs {roomPrice}</p>



                            </Col>




                        </Row>







                    </form>
                </div>
            </div>

        </div>
    )
}

export default ClientBooking;