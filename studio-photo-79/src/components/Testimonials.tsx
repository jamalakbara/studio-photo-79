'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "Studio Photo 79 captured our wedding day perfectly. Every moment was beautifully documented with such artistry and emotion.",
    author: "Alexandra & Fabian",
    location: "Adelaide, SA"
  },
  {
    id: 2,
    text: "The attention to detail and creative vision exceeded all our expectations. We couldn't be happier with our wedding photos.",
    author: "Mariah & Christopher",
    location: "Barossa Valley, SA"
  },
  {
    id: 3,
    text: "Professional, talented, and an absolute pleasure to work with. Our photos are stunning and we'll treasure them forever.",
    author: "Helena-Marie & Michael",
    location: "McLaren Vale, SA"
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Kind Words</h2>
          <p className={styles.description}>
            What our couples say about their experience
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className={styles.swiper}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={styles.testimonial}>
                <p className={styles.quote}>{testimonial.text}</p>
                <div className={styles.author}>
                  <p className={styles.name}>{testimonial.author}</p>
                  <p className={styles.location}>{testimonial.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
