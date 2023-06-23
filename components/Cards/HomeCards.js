import Image from 'next/image';
import React from 'react'

const HomeCards = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center  py-[25px]">
          <div className="w-[45%] flex-shrink-0">
            <h2 className='text-gray-700 text-2xl font-montserrat font-bold'>What We Do?</h2>
            <p className='text-black text-justify md:text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam purus adipiscing etiam. Urna imperdiet suspendisse diam dignissim imperdiet quis commodo vehicula. Consectetur id</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[25%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-funding.svg" />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Funding</h2>
            <p className='text-black text-justify text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[25%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-health.svg" />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Health Equity</h2>
            <p className='text-black text-justify md:text-base font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-[25px]">
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[24%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-clinic.svg" />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Clinic Support</h2>
            <p className='text-black text-justify md:text-base text-[0.8vw] font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[24%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-covid.svg" />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>COVID Response</h2>
            <p className='text-black text-justify md:text-base text-[0.8vw] font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[24%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-quality.svg" />
            <h2 className='text-[#498240] md:text-base text-[14px] my-2 font-medium font-montserrat '>Quality Standard</h2>
            <p className='text-black text-justify md:text-base text-[0.8vw] font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
          <div className="bg-[#F2F7F6] py-[1rem] px-[1rem] h-[182px] w-[24%] flex-shrink-0">
            <Image width={30} height={50} src="/Assets/images/Home-images/svg/svg-relief.svg" />
            <h2 className='text-[#498240] md:text-base text-[14] my-2 font-medium font-montserrat '>Disaster Relief</h2>
            <p className='text-black text-justify md:text-base text-[0.8vw] font-montserrat'>Lorem ipsum dolor sit amet consectetur. Faucibus blandit non tortor diam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCards;