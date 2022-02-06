import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
import image from './images/images-png-jpeg/sign-in-banner-new.png';
import './RegisterLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../redux/actions/authsActions";
import { useDispatch } from 'react-redux';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function emailValidation(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) {
            console.log('h')
            return true;
        }
        return false;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password || password.length < 6 || emailValidation(email)) {
            toast.error("Please check the details", { position: "bottom-right" });
        } else {
            dispatch(loginStart());
            try {
                axios.post("https://netmeds-backend.herokuapp.com/login", { email, password })
                    .then(res => {
                        console.log(res);
                        toast.success("Login Successful", { position: "bottom-right" });
                        dispatch(loginSuccess(res.data));
                        navigate("/");
                    }).catch(err => {
                        toast.error("Invalid Credentials!", { position: "bottom-right" });
                        console.log(err.response)
                    });
            } catch (err) {
                toast.error("Invalid Credentials!", { position: "bottom-right" });
                dispatch(loginFailure());
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
                                <form>
                                    <div className='my-4'>
                                        <label className='signin-label'>EMAIL</label>
                                        <div class="input-box my-2">
                                            <input type="email"
                                                class="input-form"
                                                name="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your e-mail" />
                                        </div>
                                        <label className='signin-label'>PASSWORD</label>
                                        <div class="input-box my-2">
                                            <input type="password"
                                                class="input-form"
                                                name="password"
                                                minLength="6"
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password" />
                                        </div>
                                    </div>
                                    <div class="form-check text-center p-0">
                                        <Button className="signin-btn" onClick={handleLogin}>SIGN IN</Button>
                                    </div>
                                    <p className="my-4">
                                        Don't have an account? <Link to="/register">Sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>)

};

export default Login;
