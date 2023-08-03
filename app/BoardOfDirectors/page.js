import React from 'react'
import Image from 'next/image';
const page = () => {
    return (
        <div>
            <div className="pt-[150px] h-[100%] bg-[#f5eeee]">
                <div className="w-[90%] mx-auto">
                    <div className="md:w-[25%] pb-10 w-[100%] flex flex-col items-start mx-auto">
                        <h2 className='md:text-[30px] text-[23px] font-bold text-[#252C32]'>Board of Director</h2>
                        <Image width={90} height={20} className='text-center' src="/Assets/images/Home-images/svg/svg-line.svg" alt='img' />
                    </div>
                <div className="w-[90%] mx-auto flex justify-start flex-wrap">
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/Ruppani.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'>Nasruddin Rupani</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Chairman</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img3.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'>Dr. Moien Butt</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img4.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'> Dr. Syed Kaleem Kazmi</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img5.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'> Dr. Olasunkanmi Adeyinka</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img6.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'> Imran Chunawala</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img7.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'> Dr. Mohamed Shalaby</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    <div className="my-5 mx-2">
                        <Image width={100} height={100} className='w-[250px]' src="/Assets/images/boardOfDirectors/img8.png" alt='img' />
                        <div>
                            <h3 className='font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]'> Dr. Imran Nathani</h3>
                            <p className='md:text-[16px] text-[14px] font-semibold text-[#444] capitalize'>Director</p>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default page;