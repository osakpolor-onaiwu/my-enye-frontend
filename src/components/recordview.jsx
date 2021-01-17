import React, { useEffect, useState } from "react";
import { Col, CardPanel, Modal, Button, Row } from "react-materialize";
import { NavLink } from "react-router-dom";
import Record from "./recordfull";
import M from "materialize-css";

const RecordView = ({ record }) => {
    const iniState = {
        show: false,
    };

    const toggle = () => {
        setState({
            show: !state.show,
        });
    };

    const [state, setState] = useState(iniState);
    const Modal = () => {
        const modalitem = (
            <div id="modalContainer">
                <Record record={record} toggle={toggle} />
            </div>
        );

        let modalShow;
        const x = document.getElementById("mobile");
        if (state.show === true) {
            return (modalShow = modalitem);
        }
    };

    return (
        <Col key={record.UserName} m={6} l={4} s={12}>
            <CardPanel className=" cards black-text">
                <h4>
                    {record.FirstName} {record.LastName}
                </h4>
                <p>
                    <strong> Payment Method : </strong>
                    {record.PaymentMethod}
                </p>
                <p>
                    <strong>Gender : </strong> {record.Gender}
                </p>

                {/* initiates the modal */}
                <a
                    id="button-colour"
                    className=" btn-flat  center modal-trigger "
                    href="#"
                    onClick={toggle}>
                    Click to view full detail
                </a>
            </CardPanel>
            {Modal()}
        </Col>
    );
};

export default RecordView;
