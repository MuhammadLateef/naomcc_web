import Image from 'next/image'
import React from 'react'

const IncrementCard = () => {
    return (
        <div>
            <section className="bg-gray-700 body-font">
                <div className=" max-w-[95%] px-5 py-10 mx-auto">
                    <div className="flex flex-wrap justify-between items-center -m-4 text-center">
                        <div className="p-4 md:w-[19%] sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <Image width={200} height={100} className='w-12 h-12 mb-3 inline-block' src="/Assets/images/Home-images/svg/svg-patient.svg" alt='img' />
                                <p className="leading-relaxed text-white text-[12px] font-bold">Patients Visited</p>
                                <h2 className="text-white text-[24px] font-bold">30,000</h2>
                            </div>
                        </div>                        
                        <div className="p-4 md:w-[19%] sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                  <Image width={200} height={100} className='w-12 h-12 mb-3 inline-block' src="/Assets/images/Home-images/svg/svg-medical.svg" alt='img' />
                                
                                <p className="leading-relaxed text-white text-[12px] font-bold">Medical & Surgical</p>
                                <h2 className="text-white text-[24px] font-bold">30,000</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-[19%] sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <Image width={200} height={100} className='w-12 h-12 mb-3 inline-block' src="/Assets/images/Home-images/svg/svg-healths.svg" alt='img' />
                            <p className="leading-relaxed text-white text-[12px] font-bold">Clinics</p>
                                <h2 className="text-white text-[24px] font-bold">30,000</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-[19%] sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <Image width={200} height={100} className='w-12 h-12 mb-3 inline-block' src="/Assets/images/Home-images/svg/svg-world.svg" alt='img' />
                            <p className="leading-relaxed text-white text-[12px] font-bold">States</p>
                                <h2 className="text-white text-[24px] font-bold">30,000</h2>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IncrementCard