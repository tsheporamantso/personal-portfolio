/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';
import API from '../../utils/api';
import './dashboard.css';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // ✅ tracks which card is deleting
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const resp = await fetch(API.contacts, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (resp.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        const data = await resp.json();
        setContacts(data.contacts);
      } catch (err) {
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    setDeletingId(id);

    try {
      const resp = await fetch(API.deleteContact(id), {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (resp.ok) {
        // ✅ remove from state without refetching
        setContacts((prev) => prev.filter((c) => c._id !== id));
      } else {
        const data = await resp.json();
        setError(data.msg);
      }
    } catch (err) {
      setError('Failed to delete message');
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <p className="dashboard__state">Loading...</p>;
  if (error) {
    return <p className="dashboard__state dashboard__state--error">{error}</p>;
  }

  return (
    <section id="dashboard">
      <h5>Admin</h5>
      <h2>Messages ({contacts.length})</h2>

      <div className="container dashboard__container">
        {contacts.length === 0 ? (
          <p className="dashboard__state">No messages yet.</p>
        ) : (
          contacts.map((contact) => (
            <article key={contact._id} className="dashboard__card">
              <div className="dashboard__card-header">
                <div className="dashboard__avatar">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3>{contact.name}</h3>
                  <span className="dashboard__meta">{contact.email}</span>
                </div>
                <span className="dashboard__date">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </span>
                {/* ✅ Delete button */}
                <button
                  type="button"
                  className="dashboard__delete"
                  onClick={() => handleDelete(contact._id)}
                  disabled={deletingId === contact._id}
                  title="Delete message"
                >
                  <IoTrashOutline />
                </button>
              </div>
              <p className="dashboard__message">{contact.message}</p>
            </article>
          ))
        )}

        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-primary dashboard__logout"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
