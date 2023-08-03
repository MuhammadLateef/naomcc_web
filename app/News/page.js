import React from 'react'

const page = () => {
  return (
    <div w-full>
      <div className='w-[80%] mx-auto h-[80vh] w pt-[150px] bg-no-repeat bg-cover bg-[url("/Assets/images/Home-images/Slider-home1.jpg")]'>
        <h2 className='text-white text-center text-[2vw] font-extrabold leading-tight'>News and Events</h2>
        {/* <marquee direction="left"
             behavior="alternate"
             className="my-12 text-red-700 font-bold"
            >
The National Association of Muslim Charitable Clinics (NAOMCC) is an initiative of Ibn Sina Foundation is a nationwide community-based, not-for-profit, voluntary membership association supporting to develop the Muslim charitable clinics operating in the country. 
    </marquee> */}
      </div>
    </div>

  )
}

export default page