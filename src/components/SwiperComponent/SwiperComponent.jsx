'use client';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComponent = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay
      navigation
    >
      {data.map(({ id, imageUrl, title }) => (
        <SwiperSlide key={id}>
          <Image style={{objectFit: 'contain'}} width={450} height={500} src={imageUrl} priority alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;