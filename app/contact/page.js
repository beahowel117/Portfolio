'use client';
import React, {useState} from 'react';
import styles from '@/styles/Contact.module.css';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <InteractiveBackground />
      <div className="flex flex-col justify-center min-h-screen p-6 w-full z-9999 form-container">
        <form className={`w-full max-w-lg p-6 ${styles.form}`}>
          <h3 className= "header mb-6 text-center">Contact Me</h3>
          <div className="flex flex-col gap-4 items-end form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-full sm:w-[500px] focus:outline-none focus:ring-2 focus:ring-gray-500 form"
              id="name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-full sm:w-[500px] focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-full sm:w-[500px] h-40 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="message"
            />
            <button
              type="submit"
              className={styles['contact-button']}
            >
              Submit
            </button>
            {status && <p className="text-white mt-2">{status}</p>}
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
