import { useState } from "react";
import { Container } from "react-bootstrap";
import { Loader, User } from "../components";
import Icon from '../assets/img/logo.png';

const Home = () => {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        first_name: "John",
        last_name: "Alpha",
        email: "johnalpha@gmail.com",
        avatar: Icon,
        phone_number: "+243 162-726-6866 x7981",
        date_of_birth: "1993-08-13",
        gender: "Female",
        address: {
            country: "United States",
            state: "Minnesota"
        }
    });

    const getRandomUser = async () => {
        setLoading(true);
        const response = await fetch('https://random-data-api.com/api/users/random_user');
        if (!response) console.log(response.error);
        const data = await response.json();
        if (data) {
            setUser({ ...data });
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Container className="h-100 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <User user={user} getRandomUser={getRandomUser} />
                    </div>
                </Container>
            )
            }
        </>
    )
}

export default Home