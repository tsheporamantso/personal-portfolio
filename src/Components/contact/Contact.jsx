import { CiMail } from 'react-icons/ci';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import API from '../../utils/api';
import './contact.css';

const Contact = () => {
  /**
   * Handle contact form submission and sends data to the API
   * @param { React.FormEvent<HTMLFormElement> } e
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = /** @type {HTMLFormElement} */ (e.currentTarget);

    const formData = {
      name: /** @type {HTMLInputElement} */ (form.elements.namedItem('name'))
        .value,
      email: /** @type {HTMLInputElement} */ (form.elements.namedItem('email'))
        .value,
      message: /** @type {HTMLTextAreaElement} */ (
        form.elements.namedItem('message')
      ).value,
    };

    /**
     * @type {string | number}
     */
    const toastId = toast.loading('Sending message...');

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
        toast.update(toastId, {
          render: data.msg,
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });

        form.reset();
      } else {
        toast.update(toastId, {
          render: data.msg,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: 'Server Error',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options" data-testid="articles">
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
              href="https://api.whatsapp.com/send?phone=27651443709"
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
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
