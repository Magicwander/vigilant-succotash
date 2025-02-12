import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    // You can add API call here
    alert('Message sent successfully!');
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} className="bg" alt="Background" />
      <section className="contact">
        <div className="container">
          <h2 className="text-center">Get in touch</h2>
          <div className="heading-border"></div>

          <form onSubmit={handleSubmit} className="form">
            <fieldset>
              <legend>Contact Us</legend>
              <p className="label">Full Name</p>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name..."
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <p className="label">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
                value={formData.email}
                onChange={handleChange}
              />
              <p className="label">Phone Number</p>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone..."
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <p className="label">Subject</p>
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject..."
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <p className="label">Message</p>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter your message..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Submit" className="btn-primary" />
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
