import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const SkillsCard = ({ language, experience }) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill />
      <div>
        <h4>{language}</h4>
        <small className="text-light">{experience}</small>
      </div>
    </article>
  );
};

SkillsCard.propTypes = {
  language: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default SkillsCard;
