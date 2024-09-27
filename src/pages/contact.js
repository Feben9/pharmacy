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
      <Navbar isAuthenticated={true} />
    </div>
    
    <div className="page-container">
      <h1 style={{padding:'20px'}}>  Contact Us</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        
        {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div style={{padding:'20px'}}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{padding:'5px', margin:'5px', marginLeft:'25px', width:'200px'}}
              />
            </label>
          </div>
          
          <div style={{padding:'20px'}}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{padding:'5px', margin:'5px', marginLeft:'25px', width:'200px'}}
              />
            </label>
          </div>
          
          <div style={{padding:'20px'}}>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{padding:'15px', marginTop:'2px', marginLeft:'5px', width:'200px'}}
              />
            </label>
          </div>
          
          <button type="submit" style={{padding:'5px', marginLeft:'15px', marginTop:'5px', background:'#ff456', border:'1px solid #ff456'}}>Send Message</button>
        </form>
      </div>
    </div>
  </div>
);


};
 
export default Contact;