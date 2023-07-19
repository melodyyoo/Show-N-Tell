import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ShowPoster from '../Shows/ShowPoster';

export default function SwiperCarousel({shows}) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {shows.map((show, i)=> <SwiperSlide  key={i}>
          <ShowPoster show={show}/>
        </SwiperSlide>)}

      </Swiper>
    </>
  );
}
