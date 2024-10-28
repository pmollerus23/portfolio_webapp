import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = { username, email };

        try {
            const response = await fetch('http://localhost:8080/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setMessage('User created successfully: ' + result);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to create user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Create User</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default UserForm;
