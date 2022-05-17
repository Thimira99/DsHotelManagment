import React, { Component, useState, useEffect } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { Modal } from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";


import './clientBooking.css';



function ClientBooking() {

    const history = useHistory();

    const [customerName, setCustomerName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();
    const [roomPrice, setRoomPrice] = useState("");
    const [LoginStatus, setLoginStatus] = useState(false);
    const [show, setShow] = useState(false);
    const [logEmail, setEmail] = useState("");
    const [logUser,setUser] = useState("");

    const handleClose = () => setShow(false);



    function sendDetails(e) {
        e.preventDefault();

        console.log("inside but", LoginStatus)
        if (!LoginStatus) {

            history.push("/login")
            return -1;
        }
        const newCustomer = {
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights,
            roomPrice
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
                    setRoomPrice("10000");
                    break;

                case 'Deluxe':
                    setRoomPrice("15000");
                    break;

                case 'Luxury':
                    setRoomPrice("20000");
                    break;


            }

        }
        console.log(roomPrice)
        setReservationType(event.target.value)
    }



    useEffect(() => {
        console.log("sessionStorage.getItem('LogStatus')", sessionStorage.getItem('LogStatus'));

        const logStatus = sessionStorage.getItem('LogStatus') == 'true' ? true : false
        const logEmail = sessionStorage.getItem('LogEmail')
        const loguser = sessionStorage.getItem('Loguser')
        setUser(loguser)
        setLoginStatus(logStatus)
        setEmail(logEmail)


        console.log(LoginStatus)

    });


    function setPayNow(e) {
        e.preventDefault();
        setShow(true)

    }

    function sendMail(e) {
        console.log("eeeee", e)
        console.log("eeeee 1", logUser)
        console.log("eeeee 2", logEmail)

        const form = {
            "name": logUser,
            "email": logEmail,
            "message": "*This is an automated message. Please do not reply to this email address.",
            "paymentId": e.id,
            "cusName":customerName,
            "noDays":numberOfNights,
            "noRes":numberOfReservations,
            "roomType":reservationType,
            "payment":roomPrice
        
    }

    console.log("form", form)

        emailjs.send('service_235yth9', 'template_bogl1qi', form, '5cBXRbMJXvJdnDsz1').then(res => {
            console.log("res", res)
        }).catch((err) => {
            console.log(err)
        })

    }



    return (
        <div>

            <>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Online Payament Mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <PayPalScriptProvider options={{ "client-id": "test" }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: roomPrice,
                                                },


                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        if (details) {
                                            Swal.fire(
                                                'successful',
                                                'You have register',
                                                'success'
                                            )

                                            sendMail(details);




                                        } else {

                                            Swal.fire(
                                                'successful',
                                                'You have not register',
                                                'warning'
                                            )

                                        }
                                        console.log(details)
                                        const name = details.payer.name.given_name;

                                    }, () => {

                                    });
                                }}
                            />
                        </PayPalScriptProvider>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>

            <div class="modal fade" id="payOnlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Online Payament Mode</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>

                    </div>
                </div>
            </div>

            <ClientNavbar />
            <div className='mainOne'>
                <h1>Bookings</h1>
                <div className='viewButton'>
                    <button className='btn btn-primary'>View Room Details</button>
                </div>





                <div className='mainForm'>
                    <form >

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
                                    <button type="submit" onClick={sendDetails} className="btn btn-primary">Submit</button>
                                </div>

                            </Col>

                            <Col xs={3}>

                                {LoginStatus &&
                                    <div className='submitButton'>
                                        <button type="submit" onClick={setPayNow} className="btn btn-primary">PayNow</button>
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