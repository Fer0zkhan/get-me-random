import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

const User = ({ user, getRandomUser }) => {
    const [gender, setGender] = useState('Male');

    useEffect(() => {
        if (user) {
            setGender(user.gender);
        }
    }, [user]);

    const onButtonClick = () => {
        getRandomUser();
    };

    return (
        <div className="user-card px-4 py-2 d-flex justify-content-center align-items-center flex-column">
            <div
                className="image d-flex justify-content-center align-items-center"
                style={{ border: gender === 'Male' ? "2px solid #E83A14" : "2px solid #712B75" }}>
                <img src={user.avatar} alt="..." />
            </div>
            <Row className="mt-2">
                <Col className="d-flex justify-content-center align-items-center">
                    <h3 className="text-white">{user.first_name} {user.last_name}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <span className="text-email text-white">{user.email}</span>
                </Col>
            </Row>
            <Row className="my-4">
                <Col className="d-flex justify-content-center align-items-center">
                    <button
                        style={{
                            border: gender === 'Male' ? "1px solid #E83A14" : "1px solid #712B75",
                            backgroundColor: gender === 'Male' ? "#E83A14" : "#712B75"
                        }}
                        className="find-btn"
                        onClick={onButtonClick}
                    >Find Me Random</button>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <span className="text-white address">{user.address.country}, {user.address.state}</span>
                </Col>
            </Row>
        </div >
    )
}

export default User