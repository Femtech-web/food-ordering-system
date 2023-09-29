/* eslint-disable no-unused-vars */

import React from "react";

import { SkeletonItem } from "./ProductsSectionSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function ProductsCarruselSkeleton() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
        breakpoints={{
          330: {
            width: 660,
            slidesPerView: 2,
          },

          660: {
            width: 970,
            slidesPerView: 3,
          },
          970: {
            width: 1200,
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
        <SwiperSlide>
          <SkeletonItem></SkeletonItem>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
