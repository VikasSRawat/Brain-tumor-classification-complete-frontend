import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Our Network</h1>
                <p className="clientDesc">
                    We had the opportunity to work with a diverse group of companies and manage the data by helping various companies.
                </p>
                <div className="clientImgs">
                    {/* <img src={ } alt="" className="clientImg" />
                    <img src={ } alt="" className="clientImg" />
                    <img src={ } alt="" className="clientImg" />
                    <img src={ } alt="" className="clientImg" /> */}
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
