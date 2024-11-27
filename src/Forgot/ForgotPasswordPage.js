import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Forgot.css';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           
            const response = await fetch('/api/request-reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Check your email for a link to reset your password.');
            } else {
                setMessage(data.message || 'There was an error. Please try again.');
            }
        } catch (error) {
            setMessage('There was an error. Please try again.');
        }
    };

    return (
        <div className="container forgot-password-container">
            <h2 className="re">Forgot password?</h2>
            <h5 className="en">Enter your email address and we will send you a link to reset your password</h5>
            <form onSubmit={handleSubmit} className="ha">
                <p>
                    <label id="reset_pass_lbl" className="la">Email address</label><br/>
                    <input className="ipt"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <button type="submit" className='btre'>Reset Password</button>
                </p>
            </form>
            {message && <p className="message">{message}</p>}
            <footer className='ft'>
                <p>First time? <Link to="/SignIn" className="pes">Create an account</Link>.</p>
                <p><Link to="/" className="pes">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}
