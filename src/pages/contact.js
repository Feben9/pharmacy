import React, {useState} from "react";

import Navbar from "../components/Navbar";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Clear error
    setError('');

    // Here you would typically handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    
    // Set success message
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };


    return (
        <div className="main-container">
            <div className="nav-container">
                <Navbar isAuthenticated={true}/>
            </div>
            <div className="page-container">
                <h1>
                    Mail us on  
                    feedback@mail.org
                </h1>
            </div>

            <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                <h2>Contact Us</h2>
                {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    </div>
                    <div>
                    <label>
                        Message:
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                </div>
        </div>
    );
};
 
export default Contact;