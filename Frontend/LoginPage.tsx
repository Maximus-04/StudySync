import LoginForm from '../UI/LoginForm';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto'}}>
            <h2>Login</h2>
            <LoginForm />
            <p style = {{ marginTop: '1rem' }}>
                Don't have an account yet? <Link to = "sign-up">Sign up here</Link>
            </p>
        </div>
    );
};

export default LoginPage;
