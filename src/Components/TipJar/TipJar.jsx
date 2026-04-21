/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import { IoArrowBackOutline } from 'react-icons/io5';
import API from '../../utils/api';
import './tipjar.css';

const AMOUNTS = [
  { label: 'Quick Sip', emoji: '☕', amount: 'R20', value: 2000 },
  { label: 'Full Cup', emoji: '🍵', amount: 'R50', value: 5000 },
  { label: 'Tank Up', emoji: '🚀', amount: 'R100', value: 10000 },
];

const TipJar = () => {
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTip = async () => {
    if (!selected) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API.createTipCheckout, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selected, name }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Could not initiate payment. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tipjar">
      <div className="tipjar__wrapper">
        {/* Header */}
        <div className="tipjar__header">
          <span className="tipjar__icon-wrap">
            <FaCoffee />
          </span>
          <h5>Appreciate the work?</h5>
          <h2>Buy Me a Coffee</h2>
          <p className="tipjar__subtitle">
            Fuel the late-night coding sessions — every sip counts. ☕
          </p>
        </div>

        {/* Name input */}
        <div className="tipjar__field">
          <label htmlFor="tip-name">Your name (optional)</label>
          <input
            id="tip-name"
            type="text"
            placeholder="Anonymous"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="tipjar__input"
          />
        </div>

        {/* Amount cards */}
        <div className="tipjar__amounts">
          {AMOUNTS.map(({ label, emoji, amount, value }) => (
            <button
              key={value}
              type="button"
              className={`tipjar__amount-card ${selected === value ? 'tipjar__amount-card--active' : ''}`}
              onClick={() => setSelected(value)}
            >
              <span className="tipjar__amount-emoji">{emoji}</span>
              <span className="tipjar__amount-label">{label}</span>
              <span className="tipjar__amount-price">{amount}</span>
            </button>
          ))}
        </div>

        {/* Error */}
        {error && <p className="tipjar__error">{error}</p>}

        {/* CTA */}
        <button
          type="button"
          className="btn-primary tipjar__cta"
          onClick={handleTip}
          disabled={!selected || loading}
        >
          {loading ? 'Redirecting to payment...' : 'Send Tip 💸'}
        </button>

        <Link to="/" className="login__back">
          <IoArrowBackOutline /> Back to Portfolio
        </Link>

        <p className="tipjar__secure">🔒 Secured by Stripe</p>
      </div>
    </section>
  );
};

export default TipJar;
