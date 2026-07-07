import React from 'react';
import './articles.css';

const Articles = () => {
  return (
    <section id="articles">
      <h5>Beyond Code</h5>
      <h2>Articles & Thoughts</h2>

      <div className="container articles__container">
        <article className="article__card">
          <div className="article__content" data-testid="paragraphs">
            <h3>Imposter Syndrome as a Developer</h3>
            <p className="article__meta">
              Written in 2023 • Personal Growth • Career Transition
            </p>
            <p className="article__description">
              A reflection on transitioning from Accounting to Software
              Development, navigating self-doubt, and embracing a growth
              mindset. This piece explores how failure, collaboration, and
              persistence shape the journey of becoming a developer.
            </p>
            <p className="article__reflection">
              <strong>Reflection:</strong> Looking back, this was written at a
              time when everything felt uncertain. Today, I see those moments as
              a necessary stepping stone that strengthened my confidence and
              resilience as a developer.
            </p>
            <a
              href="https://medium.com/@tgramantso/dealing-with-imposter-syndrome-4310ecb3deea"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read Full Article
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Articles;
