/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

import './experience.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import API from '../../utils/api';
import SkillsCard from './SkillsCard';
import SkillsCardSkeleton from './SkillsSkeletonCard';

const SKELETON_COUNT = 5;
const skeletons = Array.from({ length: SKELETON_COUNT });

const Experience = () => {
  const {
    data: experiences,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const { data } = await axios(API.experience);
      return data.experiences;
    },
  });

  const frontend = experiences?.filter(
    (experience) => experience.category === 'frontend',
  );
  const backend = experiences?.filter(
    (experience) => experience.category === 'backend',
  );

  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      {error && <h2>{error.message}</h2>}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {isLoading
              ? skeletons.map((_, i) => <SkillsCardSkeleton key={i} />)
              : frontend.map((item) => (
                  <SkillsCard
                    key={item._id}
                    language={item.language}
                    experience={item.experience}
                  />
                ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {isLoading
              ? skeletons.map((_, i) => <SkillsCardSkeleton key={i} />)
              : backend.map((item) => (
                  <SkillsCard
                    key={item._id}
                    language={item.language}
                    experience={item.experience}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
