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
          <div class="w-5/6">
            <label class="block mb-2 text-xl font-medium text-gray-900 dark:text-white" for="name">
            Name
            </label> 
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="for"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
            />
          </div>
          
          <div class="w-5/6">
            <label class="block mb-2 text-xl font-medium text-gray-900 dark:text-white" for="email">
            Email
            </label> 
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="for"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
            />
          </div>

          <div class="w-5/6">
            <label class="block mb-2 text-xl font-medium text-gray-900 dark:text-white" for="message">
            Message
            </label> 
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              label="for"
              id="message"
              class="bg-gray-50 border h-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
            />
          </div>
                    
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-xl font-medium text-center text-white border-2 border-zinc-200 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Send Message
          </button>

        </form>
      </div>
    </div>
  </div>
);


};
 
export default Contact;