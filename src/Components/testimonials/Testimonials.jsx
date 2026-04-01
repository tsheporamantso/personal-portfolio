import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import fetchData from '../../utils/fetchdata';

const API_BASE = 'https://personal-portfolio-data.onrender.com';
const BASE_URL = `${API_BASE}/api/v1/testimonials`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTestimonials = async () => {
      setLoading(true);
      const data = await fetchData(BASE_URL);

      if (data) {
        setTestimonials(data.testimonial);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    getTestimonials();
  }, []);

  if (loading) {
    return (
      <section id="testimonials">
        <h5>Fetching avatars...</h5>
        <div className="loader" />
      </section>
    );
  }

  if (error) {
    return <h2 className="error">Something went wrong loading projects...</h2>;
  }

  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Recommendations</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="testimonial" key={testimonial._id}>
            <div className="client__avatar">
              {testimonial.links?.github ? (
                <a
                  href={testimonial?.links?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${API_BASE}${testimonial.avatar}`}
                    alt={testimonial.name}
                  />
                </a>
              ) : (
                <img
                  src={`${API_BASE}${testimonial.avatar}`}
                  alt={testimonial.name}
                />
              )}
            </div>
            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
