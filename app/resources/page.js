import React from 'react';
import Image from 'next/image';
const page = () => {
    return (
        <div className=' bg-[#EEEEEE]'>
            <div className="w-[90%] pt-[150px] mx-auto">
                <div className="pb-10 w-[100%] flex flex-col items-start mx-auto">
                    <h2 className='md:text-[30px] text-[23px] font-bold text-[#252C32]'>Members</h2>
                    <Image width={90} height={20} className='text-center' src="/Assets/images/Home-images/svg/svg-line.svg" alt='img' />
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-[70%] mx-auto flex sm:flex-row flex-col justify-around">
                        <div className="flex items-center">
                            <a href="https://ibnsinafoundation.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image34.png" alt='img' /> </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://www.shifausahouston.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image1.svg" alt='img' /> </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://www.assalamclinic.com/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image3.svg" alt='img' /> </a>
                        </div>
                        {/* <div className="flex items-center">
                            <a href="https://www.mercy.net/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image6.svg" alt='img' /> </a>
                        </div> */}
                    </div>
                    <div className="sm:w-[35%] mx-auto flex sm:flex-row flex-col justify-around py-[50px]">
                        <div className="flex items-center">
                            <a href="#"> <Image width={200} height={50} src="/Assets/images/slider2/image4.svg" alt='img' /> </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://trshealth.org/" target='_blank'> <Image width={200} height={50} src="/Assets/images/slider2/image5.svg" alt='img' /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page