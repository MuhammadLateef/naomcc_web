import HomeCards from '@/components/Cards/HomeCards';
import HomeCard2 from '@/components/Cards/HomeCard2';
import SliderDaisyui from '@/components/carousalSlider/SliderDaisyui';
import Image from 'next/image';
import React from 'react'
import TeamCard from '@/components/Cards/TeamCard';
import IncrementCard from '@/components/Cards/IncrementCard';
import TeamCard2 from '@/components/Cards/TeamCard2';
import HomeCard3 from '@/components/Cards/HomeCard3';
import SubscribeCard from '@/components/Cards/SubscribeCard';

const HomePage = () => {
  return (
    <div>
      <SliderDaisyui />
      <div className="">
        <div className="hero min-h-screen bg-[#EEE]">
          <div className="hero-content w-[95%] mx-auto pt-[50px] mt-[80px] flex-col  lg:flex-row">
            <Image width={3000} height={0} src="/Assets/images/Home-images/home-3.png" alt='img' className="max-w-sm mr-[30px] rounded-lg" />
            <div className='max-w-xl py-2 ml-[60px]'>
              <h3 className='text-[14px] md:text-[18px] my-4 font-bold text-[#498240]'>Our Association</h3>
              <h1 className="text-3xl md:text-[30px] text-[20px] text-[#252C32] font-bold">National Association Of Muslim <br />Charitable Clinics</h1>
              <Image width={90} height={20} src="/Assets/images/Home-images/svg/svg-line.svg" alt='img' />
              <p className="py-6 mb-1 text-[12px] text-[#18181B] font-montserrat">The National Association of Muslim Charitable Clinics (NAMCC) is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. The aim is to unite healthcare organizations and clinics to share common interests and collaborate in a concerted effort to uplift communities. It provides a wide range of support to member organizations through navigating various funding sources, education, training, advocacy efforts, collaboration, and work toward resource pooling to improve and expand quality service delivery.</p>
              <a href="#" type='button' className='mt-[20px] font-montserrat text-white bg-[#498240] border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 py-[11px] px-[24px] rounded-[10px]'>Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <HomeCards />
      </div>
      <div className="">
        <HomeCard2 />
      </div>
      <div className="">
        <TeamCard />
      </div>
      <div className="">
        <TeamCard2 />
      </div>
      <div className="">
        <IncrementCard />
      </div>
      <div className="">
        <HomeCard3 />
      </div>
      <div className="">
        <SubscribeCard />
      </div>
    </div>
  )
}

export default HomePage;