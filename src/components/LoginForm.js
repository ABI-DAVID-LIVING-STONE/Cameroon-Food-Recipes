import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e,g login authentication)
    };

    return (
        <div>
            <h2>Login Here</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label> <input type="email" value={email} onchange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label> <input type="password" value={password} onchange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default LoginForm;