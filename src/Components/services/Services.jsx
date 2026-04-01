/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { VscCheck } from 'react-icons/vsc';
import './services.css';
import fetchData from '../../utils/fetchdata';
import API from '../../utils/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const data = await fetchData(API.services);
      if (data) {
        setServices(data.services);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    getServices();
  }, []);

  if (loading) {
    return (
      <section id="services">
        <h5>Fetching services...</h5>
        <div className="loader" />
      </section>
    );
  }

  if (error) {
    return <h2 className="error">Something went wrong loading services...</h2>;
  }

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service) => (
          <article key={service._id} className="service">
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>
            <ul className="services__list">
              {service.text.map((item, index) => (
                <li key={index}>
                  <span>
                    <VscCheck className="service__list-icon" />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
