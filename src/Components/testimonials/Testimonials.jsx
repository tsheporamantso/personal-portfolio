/* eslint-disable react/no-array-index-key */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SkeletonTestimonial from './SkeletonCard';

import API, { BASE_URL } from '../../utils/api';

const Testimonials = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data } = await axios.get(API.testimonials);
      return data;
    },
  });
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Recommendations</h2>

      {isError && (
        <h2 className="error">Something went wrong loading testimonials...</h2>
      )}

      {isLoading ? (
        <div className="container testimonials__container">
          {[...Array(1)].map((_, i) => (
            <SkeletonTestimonial key={i} />
          ))}
        </div>
      ) : (
        <Swiper
          className="container testimonials__container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {data?.testimonial.map((testimonial) => (
            <SwiperSlide className="testimonial" key={testimonial._id}>
              <div className="client__avatar">
                {testimonial.links?.github ? (
                  <a
                    href={testimonial?.links?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${BASE_URL}${testimonial.avatar}`}
                      alt={testimonial.name}
                    />
                  </a>
                ) : (
                  <img
                    src={`${BASE_URL}${testimonial.avatar}`}
                    alt={testimonial.name}
                  />
                )}
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <small className="client__review">{testimonial.review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonials;
