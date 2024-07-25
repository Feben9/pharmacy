import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'John Doe' && password === 'password') {            
            setIsAuthenticated(true);           
            navigate('/Upload');      
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