import React, { Component, useState, useEffect } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';




function ClientUpdate() {

    const { id } = useParams();
    const [customerName, setCustomerName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();
    const [roomPrice, setRoomPrice] = useState("");


    useEffect(() => {
        function getBookingById() {
            axios.get(`http://localhost:8000/api/roomReservations/${id}`).then((res) => {
                setCustomerName(res.data.data.customerName);
                setReservationType(res.data.data.reservationType);
                setNumberOfReservations(res.data.data.numberOfReservations);
                setNumberOfNights(res.data.data.numberOfNights);
                setRoomPrice(res.data.data.roomPrice)
            }).catch((error) => {
                alert(error)
            })
        }

        getBookingById();
    }, [])

    function handleSelectChange(event){
        console.log("event",event.target.value)
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
    

    function updateDetails(e) {
        e.preventDefault();

        const newCustomer = {
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights,
            roomPrice
        }


        function setDetails() {
            axios.put(`http://localhost:8000/api/roomReservation/update/${id}`, newCustomer).then(() => {
                alert("Cusomer Updated")
            }).catch((error) => {
                alert(error);
            });


        }
        setDetails();


    }



    return (
        <div>
            <ClientNavbar />
            <div className='mainOne'>
                <h1>Update Booking</h1>
                <div className='viewButton'>
                    <button className='btn btn-primary'>View Room Details</button>
                </div>

                <div className='mainForm'>
                    <form onSubmit={updateDetails}>
                        <Row >
                            <div className="form-group md-6">
                                <label for="customerName">Customer Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerName"
                                    value={customerName}
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
                                    value={reservationType}
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
                                    value={numberOfReservations}
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
                                    value={numberOfNights}
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
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>

                            </Col>

                            <Col xs={3}>


                                <div className='submitButton'>
                                    <button type="submit" className="btn btn-primary">PayNow</button>
                                </div>
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

export default ClientUpdate;