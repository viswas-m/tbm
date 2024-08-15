import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new URLSearchParams(new FormData(form));

        try {
            const response = await fetch(form.getAttribute('action'), {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('Login failed: ' + response.statusText);
                form.reset();
            } else {
                const data = await response.text();
                if (data.includes('Login successful')) {
                    // window.location.href = 'p1.html';
                    onLogin(); // Notify App component of successful login
                    navigate('/');
                } else {
                    alert(data);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new URLSearchParams(new FormData(form));

        try {
            const response = await fetch(form.getAttribute('action'), {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('User already exist: ' + response.statusText);
                form.reset();
            } else {
                const data = await response.text();
                if (data.includes('User registered...')) {
                    // window.location.href = 'p1.html';
                    onLogin(); // Notify App component of successful login
                    navigate('/');
                } else {
                    alert(data);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='main-container'>
        <div className={`container-login ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-in-container">
                <form id="loginform" action="/login" method="post" onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pass" placeholder="Password" required />
                    {/* <a href="reset.html">Forgot your password?</a> */}
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="form-container sign-up-container">
                <form id="registerform" action="/register" method="post" onSubmit={handleRegisterSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="tel" name="tel" placeholder="Phone" required />
                    <input type="password" name="pass" placeholder="Password" required />
                    <input type="password" name="confirmPass" placeholder="Re-enter Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>We Keep connected!</h1>
                        <p className='login-para'>To keep connected with us please login with your personal info</p>
                        <button className="button-l-r ghost" onClick={handleSignInClick}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Traveler!</h1>
                        <p className='login-para'>Enter your personal details and start your journey with us</p>
                        <button className="button-l-r ghost" onClick={handleSignUpClick}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
