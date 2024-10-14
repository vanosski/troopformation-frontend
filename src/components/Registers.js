import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        // Log the data being sent to the server
        console.log({ name, email, password }); // Log the data

        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: name, email, password }), // Send username instead of name
        });

        const data = await response.json();
        setLoading(false);
        
        if (response.ok) {
            setMessage('Registration successful!'); // Success message
            navigate('/login'); // Redirect to troop formation page after successful registration
        } else {
            setMessage(data.message || 'Registration failed'); // Error message
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name" // Unique id added
                    name="name" // Unique name added
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email" // Unique id added
                    name="email" // Unique name added
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password" // Unique id added
                    name="password" // Unique name added
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {message && <p>{message}</p>} {/* Display success/error message */}
        </div>
    );
};

export default Register;
