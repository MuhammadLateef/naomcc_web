'use client'
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";
// const SliderDaisyui = () => {
//     return (
//         <div className="pt-[400px]">
//             <Swiper
//                 spaceBetween={30}
//                 effect={"fade"}
//                 navigation={true}
//                 pagination={{
//                     clickable: false,
//                 }}
//                 modules={[EffectFade, Navigation, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide className="w-full h-[30vh]">
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-full h-[30vh]">
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-full h-[30vh]">
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-full h-[30vh]">
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default SliderDaisyui;


import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";
const SliderDaisyui = () => {
    return (
        <>
            <div className="relative">
                <div className='h-auto pt-[80px]'>
                    <div className=''>
                        <div className=" cursor-pointer swiper-button absolute z-10 py-[19px] px-[19px] bottom-[15rem] left-20 right-30 border rounded-xl image-swiper-button-next">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className=" cursor-pointer swiper-button image-swiper-button-prev absolute z-10 py-[19px] px-[19px] bottom-[15rem] left-30 right-20 border rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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
                            disabledClass: "swiper-button-disabled"
                        }}
                        modules={[Navigation]}
                        className="mySwiper w-full h-[90vh]"
                    >
                        <SwiperSlide className='h-[100vh] bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[50%] mx-auto pt-24 pb-3 flex flex-col justify-center items-center">
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>The Journey of National </h2>
                                    <h2 className='text-[#498240] text-center text-9xl text-[6.4vw] font-montserrat font-extrabold leading-tight'>Association</h2>
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>of Muslim Charitable Clinics</h2>
                                    <p className='w-[75%] text-white text-[0.8vw] my-[20px] font-montserrat text-center'>The National Association of Muslim Charitable Clinics (NAMCC) is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. </p>
                                    <a href="#" className='mt-[20px] bg-[#498240] hover:border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[24px] rounded-[10px]'>Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[100vh] bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[50%] mx-auto pt-24 pb-3 flex flex-col justify-center items-center">
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>The Journey of National </h2>
                                    <h2 className='text-[#498240] text-center text-9xl text-[6.4vw] font-montserrat font-extrabold leading-tight'>Pakistan</h2>
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>of Muslim Charitable Clinics</h2>
                                    <p className='w-[75%] text-white text-[0.8vw] my-[20px] font-montserrat text-center'>The National Association of Muslim Charitable Clinics (NAMCC) is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. </p>
                                    <a href="#" className='mt-[20px] bg-[#498240] hover:border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[24px] rounded-[10px]'>Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[100vh] bg-[url("/Assets/images/Home-images/Slider-home1.png")] bg-no-repeat'>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[50%] mx-auto pt-24 pb-3 flex flex-col justify-center items-center">
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>The Journey of National </h2>
                                    <h2 className='text-[#498240] text-center text-9xl text-[6.4vw] font-montserrat font-extrabold leading-tight'>Association</h2>
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>of Muslim Charitable Clinics</h2>
                                    <p className='w-[75%] text-white text-[0.8vw] my-[20px] font-montserrat text-center'>The National Association of Muslim Charitable Clinics (NAMCC) is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. </p>
                                    <a href="#" className='mt-[20px] bg-[#498240] hover:border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[24px] rounded-[10px]'>Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[100vh] bg-[url("/Assets/images/Home-images/Slider-home1.png")]'>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[50%] mx-auto pt-24 pb-3 flex flex-col justify-center items-center">
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>The Journey of National </h2>
                                    <h2 className='text-[#498240] text-center text-9xl text-[6.4vw] font-montserrat font-extrabold leading-tight'>Association</h2>
                                    <h2 className='text-white text-center text-4xl text-[1.7999999999999998vw] font-montserrat font-extrabold leading-tight'>of Muslim Charitable Clinics</h2>
                                    <p className='w-[75%] text-white text-[0.8vw] my-[20px] font-montserrat text-center'>The National Association of Muslim Charitable Clinics (NAMCC) is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. </p>
                                    <a href="#" className='mt-[20px] bg-[#498240] hover:border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[24px] rounded-[10px]'>Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="absolute z-10 left-0 right-0 w-[80%] mx-auto mt-[-60px] shadow-lg">
                <div className="w-[100%] h-[156px] py-[30px] px-[80px] rounded-xl bg-white">
                    <div className="flex mb-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#252C32]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='text-base text-[#252C32] font-poppins font-semibold leading-7 tracking-tighter'>Find a Clinic</p>
                    </div>
                    <div className="relative flex">
                        <input type="text" placeholder='City and State or Zip code' className='w-[90%] flex-1 px-[30px] py-[11px] rounded-3xl border border-[#A4A4A4] bg-[#F4F4F4] placeholder:text-[#A9A9A9] placeholder:text-[16px]' />
                        <button class="absolute border right-0 bg-[#498240] hover:border hover:bg-[#F4F4F4] hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[40px] rounded-3xl text-white">Find</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderDaisyui