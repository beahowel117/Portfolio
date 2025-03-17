import React from 'react';
import styles from '@/styles/Contact.module.css';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

function Contact() {
  return (
    <>
      <InteractiveBackground />
      <div className="flex flex-col justify-center min-h-screen p-6 w-full z-9999">
        <form className={`w-full max-w-lg p-6 ${styles.form}`}>
          <h3 className= "header mb-6 text-center">Contact Me</h3>
          <div className="flex flex-col gap-4 items-end form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-[500px] focus:outline-none focus:ring-2 focus:ring-gray-500 form"
              id="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-[500px] focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="email"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-gray-600 bg-[#282828] text-white placeholder-gray-400 rounded-lg p-4 w-[500px] h-40 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="message"
            />
            <button
              type="submit"
              className={styles['contact-button']}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
