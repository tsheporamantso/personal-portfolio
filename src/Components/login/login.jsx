import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import './login.css';
import { toast } from 'react-toastify';
import API from '../../utils/api';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { mutate: createUser, isPending } = useMutation({
    mutationFn: async ({ email, password }) => {
      await axios.post(
        API.login,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    },
    onSuccess: () => {
      toast.success('Logged in successfully.');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error.response?.data?.msg || 'Something went wrong');
    },
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser({ email: user.email, password: user.password });
  };

  if (isPending) {
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
            value={user.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
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
