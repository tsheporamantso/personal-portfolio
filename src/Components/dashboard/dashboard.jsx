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
  const [tips, setTips] = useState([]);
  const [tipsLoading, setTipsLoading] = useState(true);
  const navigate = useNavigate();

  // Total helper
  const totalTips = tips.reduce((sum, t) => sum + (t.amount_total || 0), 0);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const resp = await fetch(API.contacts, {
          credentials: 'include',
        });

        if (resp.status === 401) {
          navigate('/login');
          return;
        }

        const data = await resp.json();
        setContacts(data.contacts);
        const tipsResp = await fetch(API.tips, {
          credentials: 'include',
        });
        const tipsData = await tipsResp.json();
        setTips(tipsData.tips || []);
        setTipsLoading(false);
      } catch (err) {
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleDelete = async (id) => {
    setDeletingId(id);

    try {
      const resp = await fetch(API.deleteContact(id), {
        method: 'DELETE',
        credentials: 'include',
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

  const handleLogout = async () => {
    await fetch(API.logout, {
      method: 'GET',
      credentials: 'include',
    });
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

        <div className="dashboard__tips">
          <h2>Tips 💸 ({tips.length})</h2>
          <p className="dashboard__tips-total">
            Total: R{(totalTips / 100).toFixed(2)}
          </p>

          {tipsLoading ? (
            <p className="dashboard__state">Loading tips...</p>
          ) : tips.length === 0 ? (
            <p className="dashboard__state">
              No tips yet — share your portfolio!
            </p>
          ) : (
            tips.map((tip) => (
              <article key={tip.id} className="dashboard__card">
                <div className="dashboard__card-header">
                  <div className="dashboard__avatar">
                    {(tip.metadata?.name || 'A').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3>{tip.metadata?.name || 'Anonymous'}</h3>
                    <span className="dashboard__meta">
                      R{(tip.amount_total / 100).toFixed(2)}
                    </span>
                  </div>
                  <span className="dashboard__date">
                    {new Date(tip.created * 1000).toLocaleDateString()}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>

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
