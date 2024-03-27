import React from 'react';
// import Swiper core and required modules
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import avatar1 from '../../assets/george.jpg';
import avatar2 from '../../assets/May.jpg';
// import avatar3 from '../../assets/mandla.jpg';
import avatar4 from '../../assets/spencer.jpg';

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Johannes Georg Hamman',
    review: 'I am so glad I had the pleasure of working with Gladwin. His continuous positivity and outlook on life is a true inspiration. We collaborated well. Solved some challenges together and it made the project working with him, a breeze and also something we can all be proud of. He is highly professional and keeps to his word. He is determined and hard-working. I have no doubt he will continue to excel in his endeavors and I am sure he will be a true asset to his future employer.',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'May Pyone',
    review: 'Gladwin is an invaluable team member, demonstrating exceptional coding skills and a collaborative spirit. Throughout our challenging pair programming activities, Gladwin consistently showcased dedication and expertise, making him a standout colleague. I highly recommend working with Gladwin, as he not only delivers exceptional results but also enhances the team dynamic with his positive attitude. His contributions were pivotal to our projects success.',
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Okyere Spencer',
    review: 'I had the pleasure of working with Tshepo during a pair programming session, and I can state with certainty that he is a superb developer. Tshepo excels at communication, teamwork, and leadership in addition to having great technical skills.I saw Tshepos outstanding ability to clearly convey difficult thoughts and concepts while we were both working together. He promoted a cooperative and productive environment by actively listening to recommendations and clearly outlining his justifications. The fact that Tshepo is open-minded and has strong people skills is a major factor in our productive collaboration.',
  },
];

const Testimonials = () => (
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
      {
        data.map((item) => (
          <SwiperSlide className="testimonial" key={item.id}>
            <div className="client__avatar">
              <img src={item.avatar} alt="" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">
              {item.review}
            </small>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
);

export default Testimonials;
