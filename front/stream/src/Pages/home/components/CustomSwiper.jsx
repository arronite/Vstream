import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const CustomSwiper = ({ dataImages, images, style }) => {
  console.log(images);
  return dataImages ? (
    <div className="flex">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={style}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full "
      >
        {dataImages?.map((image) => {
          console.log(image);
          return (
            <SwiperSlide
              key={image.rand_id}
              className="flex justify-center items-center bg-slate-950"
            >
              <a className="h-full  " href={image.url}>
                <img className="h-full  " src={image} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    <div className="flex">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={style}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full "
      >
        {images?.map((image) => {
          console.log(image);
          return (
            <SwiperSlide
              key={image.rand_id}
              className="flex justify-center items-center bg-slate-950"
            >
              <a className="h-full  " href={image.url}>
                <img className="h-full  " src={image.image} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default CustomSwiper;
