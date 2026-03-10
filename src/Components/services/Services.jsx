import React from 'react';
import { VscCheck } from 'react-icons/vsc';
import './services.css';

const Services = () => (
  <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Professional</h3>
        </div>
        <ul className="services__list">
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>Remote Pair-Programming and Teamwork</p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>Mentored junior web developers, providing technical support through code reviews</p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>Provided advice and tips on maintaining motivation and longevity in the program.</p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              Proposed improvements to code organisation
              to improve code quality
              and overall performance.
            </p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="services__list">
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              I have built over 20 projects using different tech stacks:
              HTML5/CSS3, JavaScript, React/Redux, Ruby on Rails.
            </p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              Spent 300+ hours mastering algorithms, data structures,
              and full-stack development while simultaneously developing
              projects with Ruby, Rails, JavaScript, React, and Redux.
            </p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              Smart Budget - A mobile Ruby on Rails web application,
              that simplifies budget management by
              providing expense tracking, categorization, insights,
              and customizable budgeting to empower users on their path to financial success.
            </p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              Book Store - A web app that allows you to display a list of books
              and add/Remove a book.
              This application utilizes React and Redux to manage state;
              Data is received from, mutated,
              and sent/Preserved in the server through API call actions.
              The app helps One manage their reading and track their reading progress
            </p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>
              Math Magicians - A Single Page App (SPA) that allows users to:
              Make graphical real-time calculations and
              Read a random math-related quote pulled from an API.
            </p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Tools & Methods</h3>
        </div>
        <ul className="services__list">
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>Git and GitHub</p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>Chrome Developers Tools, React/Redux Developers Tools</p>
          </li>
          <li>
            <span><VscCheck className="service__list-icon" /></span>
            <p>TDD, Testing Library, Jest, RSpec, API Documentation(Rswagger)</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
