import Image from 'next/image'
import React from 'react'

const HomeCard3 = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-[#444]">What&apos;s New?</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image width={5000} height={0} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/Assets/images/Home-images/cards-img1.png" alt="Image Description" />
                        </div>

                        <div className="mt-7">
                            <p className='text-[#498240] font-semibold text-sm mb-4'>Location • 17 Jan 2022</p>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 dark:text-[#101828]">
                            Lorem, ispa nshkjh
                            </h3>
                            <p className="mt-3 text-green-800 dark:text-[#667085]">
                            Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                            </p>
                            <p href='#' className="mt-4 inline-flex items-center gap-x-1.5 border cursor-pointer bg-[#498240] text-[12px] font-medium px-4 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                        </div>
                    </a>

                    <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image width={5000} height={10} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/Assets/images/Home-images/cards-img2.png" alt="Image Description" />
                        </div>

                        <div className="mt-7">
                            <p className='text-[#498240] font-semibold text-sm mb-4'>Demi WIlkinson • 16 Jan 2022</p>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 dark:text-[#101828]">
                            Lorem, ispa nshkjh
                            </h3>
                            <p className="mt-3 text-green-800 dark:text-[#667085]">
                            Mental models are simple expressions of complex processes or relationships.
                            </p>
                            <p href='#' className="mt-4 inline-flex items-center gap-x-1.5 border cursor-pointer bg-[#498240] text-[12px] font-medium px-4 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                        </div>
                    </a>
                    <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image width={5000} height={0} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/Assets/images/Home-images/cards-img3.png" alt="Image Description" />
                        </div>

                        <div className="mt-7">
                            <p className='text-[#498240] font-semibold text-sm mb-4'>Candice Wu • 15 Jan 2022</p>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 dark:text-[#101828]">
                            Lorem, ispa nshkjh
                            </h3>
                            <p className="mt-3 text-green-800 dark:text-[#667085]">
                            Introduction to Wireframing and its Principles. Learn from the best in the industry.
                            </p>
                            <p href='#' className="mt-4 inline-flex items-center gap-x-1.5 border cursor-pointer bg-[#498240] text-[12px] font-medium px-4 py-2 rounded-[13.924px] text-white hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">
                                    Read more
                                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeCard3