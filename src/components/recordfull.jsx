import React from "react";
import { connect } from "react-redux";
import { Col, CardPanel, Row } from "react-materialize";

const Record = ({ record }) => {
    //this gives the output of full record when a user clicks the button
    //in the home page

    return (
        <Row className="contain-card">
            <Col
                className="cards black-text"
                key={record.UserName}
                m={12}
                l={12}
                s={12}>
                <div className="divider"></div>

                <Row>
                    <Col s={12} l={6}>
                        <ul id="space">
                            <li className="keys">
                                <strong>First Name </strong>
                            </li>
                            <li className="value">{record.FirstName}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Last Name </strong>
                            </li>
                            <li className="value">{record.LastName}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>User Name </strong>
                            </li>
                            <li className="value">{record.UserName}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Gender </strong>
                            </li>
                            <li className="value">{record.Gender}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Email </strong>
                            </li>
                            <li className="value">{record.Email}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Last Login </strong>
                            </li>
                            <li className="value">{record.LastLogin}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Domain Name </strong>
                            </li>
                            <li className="value">{record.DomainName}</li>
                        </ul>
                    </Col>

                    <Col s={12} l={6}>
                        <ul id="space">
                            <li className="keys">
                                <strong>Phone </strong>
                            </li>
                            <li className="value">{record.PhoneNumber}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Latitude </strong>
                            </li>
                            <li className="value">{record.Latitude}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Longitude </strong>
                            </li>
                            <li className="value">{record.Longitude}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Credit card no. </strong>
                            </li>
                            <li className="value">{record.CreditCardNumber}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Credit cart type </strong>
                            </li>
                            <li className="value">{record.CreditCardType}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Payment method </strong>
                            </li>
                            <li className="value">{record.PaymentMethod}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Mac Address </strong>
                            </li>
                            <li className="value">{record.MacAddress}</li>
                        </ul>

                        <ul id="space">
                            <li className="keys">
                                <strong>Url </strong>
                            </li>
                            <li className="value">{record.URL}</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Record;
