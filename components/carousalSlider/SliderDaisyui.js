"use client";
import React from "react";
import { Source_Serif_4 } from 'next/font/google'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";

const serif4 = Source_Serif_4({ subsets: ['latin'] });

const SliderDaisyui = () => {
  return (
    <>
      <div className="relative">
        <div className="h-auto pt-[80px]">
          <div className="">
            <div className=" cursor-pointer swiper-button absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[15rem] left-8 right-30 border rounded-xl image-swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#fff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className=" cursor-pointer swiper-button image-swiper-button-next absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[15rem] md:left-30 left-18 md:right-20 right-5 border rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#fff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            className="mySwiper w-full md:h-[90vh] h-[65vh]"
          >
            <SwiperSlide className='h-[100vh] bg-no-repeat bg-cover bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
              <div className="w-full flex justify-center">
                <div className="md:w-[55%] w-[100%] mx-auto md:pt-[8rem] pt-44 pb-3 flex flex-col justify-center">

                  <h2 className="text-white text-center text-[3vw] font-extrabold leading-tight">
                    National Association Of Muslim <br /> Charitable Clinics
                  </h2>
                  <h2 className={`${serif4.className} text-[#94ED86] italic font-bold text-[1.5vw] leading-tight text-right px-[37px]`}>
                  <i>Bridging the healthcare gap</i>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='h-[100vh] bg-no-repeat bg-cover bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
                            <div className="w-full flex justify-center">
                <div className="md:w-[55%] w-[100%] mx-auto md:pt-[8rem] pt-44 pb-3 flex flex-col justify-center">

                  <h2 className="text-white text-center text-[3vw] font-extrabold leading-tight">
                    National Association Of Muslim <br /> Charitable Clinics
                  </h2>
                  <h2 className={`${serif4.className} text-[#94ED86] italic font-bold text-[1.5vw] leading-tight text-right px-[37px]`}>
                  <i>Bridging the healthcare gap</i>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='h-[100vh] bg-no-repeat bg-cover bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
                            <div className="w-full flex justify-center">
                <div className="md:w-[55%] w-[100%] mx-auto md:pt-[8rem] pt-44 pb-3 flex flex-col justify-center">

                  <h2 className="text-white text-center text-[3vw] font-extrabold leading-tight">
                    National Association Of Muslim <br /> Charitable Clinics
                  </h2>
                  <h2 className={`${serif4.className} text-[#94ED86] italic font-bold text-[1.5vw] leading-tight text-right px-[37px]`}>
                  <i>Bridging the healthcare gap</i>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='h-[100vh] bg-no-repeat bg-cover bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
            <div className="w-full flex justify-center">
                <div className="md:w-[55%] w-[100%] mx-auto md:pt-[8rem] pt-44 pb-3 flex flex-col justify-center">

                  <h2 className="text-white text-center text-[3vw] font-extrabold leading-tight">
                    National Association Of Muslim <br /> Charitable Clinics
                  </h2>
                  <h2 className={`${serif4.className} text-[#94ED86] italic font-bold text-[1.5vw] leading-tight text-right px-[37px]`}>
                    <i>Bridging the healthcare gap</i>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="absolute z-10 left-0 right-0 md:w-[80%] w-[90%] mx-auto mt-[-60px] shadow-lg">
        <div className="w-[100%] h-[156px] py-[30px] md:px-[80px] px-[25px] rounded-xl bg-white">
          <div className="flex mb-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#252C32]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-base text-[#252C32] font-poppins font-semibold leading-7 tracking-tighter">
              Find a Clinic
            </p>
          </div>
          <div className="relative flex">
            <input
              type="text"
              placeholder="City and State or Zip code"
              className="w-[90%] flex-1 md:px-[30px] px-[10px] py-[11px] rounded-3xl border border-[#A4A4A4] bg-[#F4F4F4] placeholder:text-[#A9A9A9] md:placeholder:text-[16px] :placeholder:text-[14px]"
            />
            <button class="absolute border right-0 bg-[#498240] hover:border hover:bg-[#F4F4F4] hover:border-[#498240] hover:text-[#498240] transition duration-300 md:py-[11px] py-[10px] md:px-[40px] px-[20px] rounded-3xl text-white">
              Find
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderDaisyui;
