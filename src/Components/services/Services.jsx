import React, { useEffect } from 'react';
import { VscCheck } from 'react-icons/vsc';
import './services.css';
import { useSelector, useDispatch } from 'react-redux';
import ServicesSkeletonCard from './ServicesSkeletonCard';
import { getServicesData } from '../../features/services/servicesSlice';

const Services = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, services } = useSelector(
    (store) => store.services,
  );

  useEffect(() => {
    dispatch(getServicesData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          {[...Array(3)].map((_, i) => (
            <ServicesSkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <h2 className="error">
        {isError || 'Something went wrong loading services'}
      </h2>
    );
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
