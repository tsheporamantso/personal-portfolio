import React from 'react';
import { CiMail } from 'react-icons/ci';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import './contact.css';

const Contact = () => (
  <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <CiMail />
          <h4>Email</h4>
          <h5>tshepo.ramantso@outlook.com</h5>
          <a href="mailto:tshepo.ramantso@outlook.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine />
          <h4>Messenger</h4>
          <h5>Facebook</h5>
          <a href="https://m.me/profile.php?id=100000171080452" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp />
          <h4>WhatsApp</h4>
          <h5>+27651443709</h5>
          <a href="https://api.whatsapp.com/send?phone+27651443709" target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>

      <form action="https://formspree.io/f/moqbgzon" method="post" target="_blank">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="text" name="email" placeholder="Your Email Address" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
