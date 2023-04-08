import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Zoom, Navigation, Pagination } from "swiper";
import banner1 from '../../../../src/assets/banner1.jpg';
import banner2 from '../../../../src/assets/banner2.jpg';
import banner3 from '../../../../src/assets/banner3.jpg';

const JobPortalBanner = () => {
  return (
    <div className="relative pt-10">
      <Swiper
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          autoHeight={true}
          navigation={true}
          autoplay={{delay: 1000}}
          speed={800}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <img src={banner1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={banner2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={banner3} />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job Today</h1>
        <p className="text-xl">Browse through thousands of job opportunities</p>
      </div>
    </div>
  );
};

export default JobPortalBanner;