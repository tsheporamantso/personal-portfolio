import React from 'react';
import { GoCheck } from 'react-icons/go';
import './services.css';

const Services = () => (
  <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX</h3>
        </div>
        <ul className="services__list">
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="services__list">
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="services__list">
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
          <li>
            <GoCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, tempore.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
