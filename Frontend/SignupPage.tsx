import SignupForm from '../UI/SignupForm';
import React from 'react';
import { Link } from 'react-router-dom';


const SignupPage = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto'}}>
            <h2>Create an Account</h2>
            <SignupForm />
            <p style = {{ marginTop: '1rem' }}>
                Already have one? <Link to="/login">Log in here</Link>
            </p>
        </div>
    );
};

export default SignupPage;
