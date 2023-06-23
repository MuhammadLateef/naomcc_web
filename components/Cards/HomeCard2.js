'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCard2 = () => {
    return (
        <div className='w-full bg-[#282828]'>
            <div className="max-w-[95%] mx-auto flex lg:flex-row flex-col justify-between items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="lg:w-[48%] w-[100%]">
                    <div className="">
                        <Image width={5000} height={100} className="" src="/Assets/images/Home-images/cards-member1.png" />
                        <div className="">
                            <p className="text-[16px] my-[16px] text-white text-justify">
                                Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam purus adipiscing etiam. Urna imperdiet suspendisse diam dignissim imperdiet quis commodo vehicula. Consectetur idLorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam purus adipiscing etiam. Urna imperdiet suspendisse diam dignissim imperdiet quis commodo vehicula. Consectetur
                            </p>
                            <p href='#' className="my-4 inline-flex items-center gap-x-1.5  cursor-pointer bg-[#498240] text-[12px] font-medium px-3 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[50%] w-[100%] gap-10">
                    <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image fill className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="/Assets/images/Home-images/cards-member2.png" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                                <h3 className="text-xl font-semibold text-[#498240] text-[16px] group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Our Mission
                                </h3>
                                <p className="mt-3 text-white text-justify text-[16px]">
                                    Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                                </p>
                                <p href='#' className="mt-4 inline-flex items-center gap-x-1.5  cursor-pointer bg-[#498240] text-[12px] font-medium px-3 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image fill className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="/Assets/images/Home-images/cards-member3.png" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                                <h3 className="text-xl text-[#498240] text-[16px] font-semibold group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                Our Vision
                                </h3>
                                <p className="mt-3 text-white text-justify text-[16px]">
                                    Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                                </p>
                                <p href='#' className="mt-4 inline-flex items-center gap-x-1.5  cursor-pointer bg-[#498240] text-[12px] font-medium px-3 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeCard2