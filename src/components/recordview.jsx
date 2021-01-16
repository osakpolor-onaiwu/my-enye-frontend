import React, { useEffect } from "react";
import { Col, CardPanel,Modal,Button, Row } from "react-materialize";
import { NavLink } from "react-router-dom";
import Record from "./recordfull";
import M from "materialize-css";

const RecordView = ({ record }) => {
    

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
                    id='button-colour'
                    className=" btn-flat  center modal-trigger "
                    href="#modal1"
                   
                >
                    Click to view full detail
                </a>
                <Modal
                    actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    id="modal1"
                    open={false}
                    options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                    }}
                >
                <Record record={record}/>
                </Modal>
            </CardPanel>

           
        </Col>
    );
};

export default RecordView;
