import { Col, CardPanel, Row } from "react-materialize";


//this component is a template for returning each record. it returns them as cards
const Record = ({ record }) => {
    return (
        <Col key={record.id} m={12} l={6} s={12}>
            <CardPanel className="black white-text">
                <Row>
                    <Col s={12} m={6}>
                        <p>
                            <strong>First Name: </strong>
                            {record.FirstName}
                        </p>
                        <p>
                            <strong>Last Name : </strong>
                            {record.LastName}
                        </p>
                        <p>
                            <strong>User Name : </strong>
                            {record.UserName}
                        </p>
                        <p>
                            <strong>Gender : </strong> {record.Gender}
                        </p>
                    </Col>
                    <Col s={12} m={6}>
                        <p>
                            <strong>Email : </strong>
                            {record.Email}
                        </p>
                        <p>
                            <strong> Phone Number : </strong>

                            {record.PhoneNumber}
                        </p>
                        <p>
                            <strong> Latitude : </strong>
                            {record.Latitude}
                        </p>
                        <p>
                            <strong>Longitude : </strong>

                            {record.Longitude}
                        </p>
                    </Col>
                    <Col s={12} m={6}>
                        <p>
                            <strong> Credit Card Number: </strong>
                            {record.CreditCardNumber}
                        </p>
                        <p>
                            <strong>Credit Card Type: </strong>
                            {record.CreditCardType}
                        </p>
                        <p>
                            <strong> Payment Method : </strong>
                            {record.PaymentMethod}
                        </p>

                        <p>
                            <strong>Mac Address : </strong>
                            {record.MacAddress}
                        </p>
                    </Col>
                    <Col s={12} m={6}>
                        <p>
                            <strong>Domain Name : </strong>
                            {record.DomainName}
                        </p>
                        <p>
                            <strong>Url : </strong> {record.URL}
                        </p>
                        <p>
                            <strong> Last Login: </strong>
                            {record.LastLogin}
                        </p>
                    </Col>
                </Row>
            </CardPanel>
        </Col>
    );
};

export default Record;
