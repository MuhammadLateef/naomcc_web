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
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <SliderDaisyui />
    
      <div className="">
        <div className="hero pt-32 bg-[#EEE]">
          <div className="hero-content w-[95%] mx-auto pt-[10px] mt-[20px] flex-col lg:flex-row">
            <div className="max-w-sm md:mr-[30px] mr-0">
            <Image width={3000} height={0} src="/Assets/images/Home-images/home-3.png" alt='img' className=" rounded-lg" />
            </div>            
            <div className='max-w-xl py-2 md:ml-[60px] ml-0'>
              <h1 className="text-3xl md:text-[30px] text-[20px] text-[#252C32] font-bold">National Association Of Muslim <br />Charitable Clinics</h1>
              <Image width={90} height={20} src="/Assets/images/Home-images/svg/svg-line.svg" alt='img' />
              <p className="py-6 mb-1 text-[15px] text-[#18181B] font-montserrat">The National Association of Muslim Charitable Clinics (NAOMCC), an initiative of <a className='text-blue-500 hover:text-green-500' target='_blank' href="https://ibnsinafoundation.org/">Ibn Sina Foundation</a>, a nationwide community-based, non-profit, 501 (c)(3), Muslim charitable clinics alliance operating in the country. The aim is to unite healthcare organizations and clinics to share common interests and collaborate in concerted efforts to uplift communities. It provides a wide range of support to member organizations through navigating various fundraising sources, education, training, advocacy efforts, collaboration, and works toward resource pooling to improve and expand quality service delivery.</p>
              <Link href="/AboutUs" type='button' className='mt-[20px] font-montserrat text-white bg-[#498240] border hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300 md:py-[11px] py-[8px] md:px-[24px] px-[15px] rounded-[10px]'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <IncrementCard />
      </div>
      <div className="">
        <HomeCard2 />
      </div>
      <div className="">
        <SubscribeCard />
      </div>
    </div>
  )
}

export default HomePage;