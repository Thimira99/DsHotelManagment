import React, { Component } from 'react';
import './register.css';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';

class register extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {
        return (
            <div>

                <div class="register_title">
                    <h3>Join Shangri-La Circle</h3>
                    <h5>Join as a member to enjoy exclusive benefits and a seamless digital experience.</h5>
                </div>

                <div class="register_content">
                    <div class="m-register">
                        <Form >
                            <Row>
                                <Col>

                                    <Form.Label>Email address</Form.Label>
                                    <Form.Select aria-label="Default select example">

                                        {/* <option>Open this select menu</option> */}
                                        <option value="1">Mr</option>
                                        <option value="2">Ms</option>
                                        <option value="3">Mrs</option>
                                        <option value="3">Sir</option>
                                        <option value="3">Dr</option>
                                        <option value="3">Mdm</option>
                                        <option value="3">Professor</option>
                                    </Form.Select>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Second Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                </Col>



                            </Row>
                            <Row>
                                <Col>

                                    <Form.Label>Email address</Form.Label>
                                    <Form.Select aria-label="Default select example">

                                        {/* <option>Open this select menu</option> */}
                                        <option value="1">Mr</option>
                                        <option value="2">Ms</option>
                                        <option value="3">Mrs</option>
                                        <option value="3">Sir</option>
                                        <option value="3">Dr</option>
                                        <option value="3">Mdm</option>
                                        <option value="3">Professor</option>
                                    </Form.Select>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Second Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                </Col>






                            </Row>

                        </Form>
                    </div>

                </div>

            </div>
        );
    }
}

export default register;