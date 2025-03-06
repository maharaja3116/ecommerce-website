import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './log.css';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const response = await fetch('http://localhost:3000/users');

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const users = await response.json();

      
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                navigate('/product'); 
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="log">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
            </form>
        </div>
    );
}

export default LoginPage;