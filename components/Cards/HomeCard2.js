'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";
const HomeCard2 = () => {
    return (
        <>
            <div className="relative bg-[#EDEDED]">
                <h2 className='text-[#0A7750] text-[20px] font-semibold pl-[30px] pt-[30px]'>Our Member Organizations</h2>
                <div className='h-[40vh] flex justify-center items-center'>
                    <div className=''>
                        <div className=" cursor-pointer swiper-button absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[7rem] left-4 right-30 border border-green-400 rounded-xl image-swiper-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className=" cursor-pointer swiper-button image-swiper-button-next absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[7rem] md:left-30 left-18 md:right-10 right-5 border border-green-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <Swiper
                        //  spaceBetween={20}
                        //  slidesPerView={6}                        
                        effect={"fade"}
                        breakpoints={{
                            576: {
                                // width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 2,
                            },
                            840: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                            1024: {
                                // width: 768,
                                slidesPerView: 6,
                            },
                        }}
                        // centeredSlides={true}
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
                        modules={[Autoplay,Navigation]}
                        className="mySwiper w-[80%] mx-auto h-auto flex items-center"
                    >
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="https://www.shifausahouston.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image1.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="https://ibnsinafoundation.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image34.png" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh] w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://www.assalamclinic.com/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image3.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide className='h-[20vh] w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://trshealth.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image5.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide className='h-[20vh] flex items-center justify-center w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://www.mercy.net/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image6.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="#"> <Image width={200} height={50} src="/Assets/images/slider2/image4.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="https://www.shifausahouston.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image1.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="https://ibnsinafoundation.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image34.png" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh] w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://www.assalamclinic.com/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image3.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide className='h-[20vh] w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://trshealth.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image5.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide className='h-[20vh] flex items-center justify-center w-full'>
                                <div className="w-full flex items-center">
                                <a href="https://www.mercy.net/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image6.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="#"> <Image width={200} height={50} src="/Assets/images/slider2/image4.svg" alt='img' /> </a>
                                </div>
                            </SwiperSlide>
                          
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeCard2