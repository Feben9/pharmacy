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
            console.log(setIsAuthenticated); 
          
            setIsAuthenticated(true);           
            navigate('/Upload');      
        } else {
            setError('Invalid username or password. Try again.');
        }
    };

    return (
        <div className="login-container"> 
            <form className="form-container space-y-8"  onSubmit={handleSubmit}>
                <div>
                    <label for="username" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        placeholder="John Doe" 
                        onChange={(e) => setUsername(e.target.value)}
                        class="username bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    /> 
                </div>
                <br />
                <div>
                    <label for="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password} 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        class="username bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    />
                </div>
                <div>
                    <button type="submit" value="Sign In" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border-2 border-zinc-200 w-6/12 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SIGN IN</button>
                </div>

                {error && <div className="error"><br /> {error}<br /></div>}                
            </form>
        </div>
    );
}