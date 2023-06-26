import Image from 'next/image';
import React from 'react'

const HomeCards = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-[95%] mx-auto lg:py-0 py-5">
        <div className="flex lg:justify-between justify-around flex-wrap items-center lg:py-[25px] py-[0px]">
          <div className="lg:w-[45%] w-[95%] flex-shrink-0">
            <h2 className='text-gray-700 text-2xl font-montserrat font-bold'>What We Do?</h2>
            <p className='text-black text-justify md:text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam purus adipiscing etiam. Urna imperdiet suspendisse diam dignissim imperdiet quis commodo vehicula. Consectetur id</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] lg:my-0 my-5 lg:mt-0 mt-4 px-[1rem] lg:h-[182px] h-[250px] lg:w-[25%] md:w-[45%] w-[95%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-funding.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Funding</h2>
            <p className='text-black text-justify text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] lg:my-0 my-5 lg:h-[182px] h-[250px] lg:w-[25%] md:w-[45%] w-[95%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-health.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Health Equity</h2>
            <p className='text-black text-justify md:text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-0 mt-2 lg:justify-between justify-around items-center lg:py-[25px] py-[10px]">
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] lg:my-0 my-5 lg:h-[182px] h-[250px] lg:w-[24%] md:w-[45%] w-[95%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-clinic.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Clinic Support</h2>
            <p className='text-black text-justify text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] lg:my-0 my-5 lg:h-[182px] h-[250px] lg:w-[24%] md:w-[45%] w-[95%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-covid.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>COVID Response</h2>
            <p className='text-black text-justify text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] lg:my-0 my-5 lg:h-[182px] h-[250px] lg:w-[24%] md:w-[45%] w-[95%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-quality.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Quality Standard</h2>
            <p className='text-black text-justify text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] lg:my-0 my-5 lg:h-[182px] h-[250px] lg:w-[24%] md:w-[45%] w-[95%]  flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-relief.svg" alt='' />
            <h2 className='text-[#498240] md:text-base text-[14] my-2 font-medium font-montserrat '>Disaster Relief</h2>
            <p className='text-black text-justify text-base  font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCards;