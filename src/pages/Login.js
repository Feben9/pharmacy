import React, {useState} from "react";
import { BrowserRouter as Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'John Doe' && password === 'password') {
            alert('Login successful!');
            <Link to="me">Hello</Link>
            setError('');
        } else {
            setError('Invalid username or password. Try again.');
        }
    };

    return (
        <div className="login-container"> 
            <form className="form-container"  onSubmit={handleSubmit}>
                <div>
                    <label for="username" className="label">Username</label> <br/>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        className="user" 
                        placeholder="John Doe" 
                        onChange={(e) => setUsername(e.target.value)}
                    /> <br/>
                </div>
                <br />
                <div>
                    <label for="password" className="label">Password</label>  <br/>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password} 
                        className="user" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                    /> <br/>
                </div>
                <br />
                <div>
                    <input type="submit" value="Sign In" className="signin" />
                </div>
                {error && <div className="error"><br /> {error}<br /></div>}                
            </form>
        </div>
    );
}