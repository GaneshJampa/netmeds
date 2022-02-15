import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
import image from './images/images-png-jpeg/sign-in-banner-new.png';
import './RegisterLogin.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function  emailValidation(email){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            console.log('h')
            return true;
        }
        return false;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!email || !password || !username || password.length<6 || emailValidation(email)) {
            toast.error("Please check the details", { position: "bottom-right" });
        } else {
            try {
                await axios.post("https://netmeds-backend.herokuapp.com/register", { email, username, password });
                navigate("/login");
                toast.success("Registration Successful!", { position: "bottom-right" });
            } catch (err) {
                console.log(err.response);
                toast.error(`Username/Email already exists`, { position: "bottom-right" });
            }
        };
    }


    return (
        <>

            <Container className='py-3 px-5'>
                <Row className='signin-box'>
                    <Col md="12" lg>
                        <div className='mx-5 my-auto'>
                            <Image fluid src={image} alt='' />
                        </div>
                    </Col>
                    <Col md="12" lg>
                        <div className='my-5 mx-5'>
                            <div className=''>
                                <h2 className='signin-head'>Sign In / Sign Up</h2>
                                <p className='signin-txt'>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
                                <form onSubmit={handleRegister}>
                                    <div className='my-4'>
                                        <label className='signin-label'>USER NAME</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="username"
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Enter your user name" />
                                        </div>
                                        <label className='signin-label'>EMAIL</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="email"
                                                class="input-form"
                                                name="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your e-mail" />
                                        </div>
                                        <label className='signin-label'>PASSWORD</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="password"
                                                class="input-form"
                                                name="password"
                                                minLength="6"
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password" />
                                        </div>
                                    </div>
                                    <div class="form-check text-center p-0">
                                        <Button className="signin-btn" type='submit'>SIGN UP</Button>
                                    </div>
                                    <p className="my-4">
                                        Already have an account? <Link to="/login">Sign In</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>)
}


export default Register;
