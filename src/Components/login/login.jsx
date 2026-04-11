import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/api';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      const resp = await fetch(API.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await resp.json();

      if (resp.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.msg);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <section id="contacts">
        <h5>Fetching contacts...</h5>
        <div className="loader" />
      </section>
    );
  }

  return (
    <section id="login">
      <h5>Get in Touch</h5>
      <div className="container login__container">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
