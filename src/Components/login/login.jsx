import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
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
    setLoading(true);

    try {
      const resp = await fetch(API.login, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await resp.json();

      if (resp.ok) {
        navigate('/dashboard');
      } else {
        setError(data.msg);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="login">
        <h5>Admin</h5>
        <h2>Signing in...</h2>
        <div className="loader" />
      </section>
    );
  }

  return (
    <section id="login">
      <h5>Admin</h5>
      <h2>Login</h2>
      <div className="login__container container">
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login__error">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {/* ✅ Back home link */}
          <Link to="/" className="login__back">
            <IoArrowBackOutline /> Back to Portfolio
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
