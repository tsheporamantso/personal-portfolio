import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import API from '../../utils/api';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    try {
      const resp = await fetch(API.contacts, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();

      if (data.success) {
        setStatus(data.msg);
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail />
            <h4>Email</h4>
            <h5>tshepo.ramantso@outlook.com</h5>
            <a
              href="mailto:tshepo.ramantso@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a
              href="https://m.me/profile.php?id=100000171080452"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+27651443709</h5>
            <a
              href="https://api.whatsapp.com/send?phone+27651443709"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
