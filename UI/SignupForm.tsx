import { useState } from 'react';
import React from 'react';

const SignupForm = () => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signing up with:', email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "email"
                value = {email}
                onChange = {(e) => getEmail(e.target.value)}
                placeholder = "Email"
                required
            />
            <input
                type = "password"
                value = {password}
                onChange = {(e) => getPassword(e.target.value)}
                placeholder = "Password"
                required
            />
            <button type = "submit">Sign up</button>
        </form>
    );
};

export default SignupForm;