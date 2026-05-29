/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer } from 'react';
import { VscCheck } from 'react-icons/vsc';
import './services.css';
import fetchData from '../../utils/fetchdata';
import API from '../../utils/api';
import { SERVICE_ITEMS, SET_LOADING, SET_ERROR } from './actions';
import reducer from './reducer';
import SkeletonCard from './SkeletonCard';

const defaultState = {
  services: [],
  isLoading: true,
  isError: false,
};

const Services = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const getServices = async () => {
      dispatch({ type: SET_LOADING, payload: true });

      const data = await fetchData(API.services);
      if (data) {
        dispatch({ type: SERVICE_ITEMS, payload: { data } });
      } else {
        dispatch({ type: SET_ERROR, payload: true });
      }
    };
    getServices();
  }, []);

  if (state.isLoading) {
    return (
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          {[...Array(3)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (state.isError) {
    return <h2 className="error">Something went wrong loading services...</h2>;
  }

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {state.services.map((service) => (
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
