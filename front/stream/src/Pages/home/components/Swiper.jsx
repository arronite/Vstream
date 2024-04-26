import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="flex">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full "
      >
        <SwiperSlide className="flex justify-center items-center bg-slate-900">
          <img
            className="h-full  "
            src="https://static.posters.cz/image/hp/66431.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-slate-900">
          <img
            className="h-full "
            src="https://static.posters.cz/image/hp/69167.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-slate-900">
          <img
            className="h-full "
            src="https://static.posters.cz/image/hp/80594.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-slate-900">
          <img
            className="h-full "
            src="https://static.posters.cz/image/hp/66923.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-slate-900">
          <img
            className="h-full "
            src="https://static.posters.cz/image/hp/65856.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
