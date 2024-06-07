import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // State to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform actions like sending the form data to a server or processing it in some way
        console.log(formData);
        // Optionally, you can clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Our Network</h1>
                <p className="clientDesc">
                    We had the opportunity to work with a diverse group of companies and manage the data by helping various companies.
                </p>
                <div className="clientImgs">
                    {/* Render client images here if needed */}
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="name" 
                        placeholder="Your Name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                    />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder="Your Email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                    />
                    <textarea 
                        className="message" 
                        rows="5" 
                        placeholder="Your Message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                    ></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
