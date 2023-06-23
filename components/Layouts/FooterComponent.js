import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, PiInstagramLogoFill } from "react-icons/fa"
import { AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const FooterComponent = () => {
    return (
        <div className="bg-[#282828]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex-wrap flex justify-between">
                <div className="p-5">
                    <div className=" text-lg uppercase text-white font-medium">Company</div>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Why Choose us <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Pricing <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Testimonial <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                   
                </div>
                <div className="p-5">
                    <div className=" text-lg uppercase text-white font-medium">Resources</div>

                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Terms and Condition <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Blog <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Contact Us <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                </div>
                <div className="p-5">
                    <div className=" text-lg uppercase text-white font-medium">Support</div>

                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a className="my-4 hover:tracking-[0.05px] block text-white text-xs" href="/#">Contact Us <span className="text-teal-600 text-xs p-1"></span>
                    </a>
                </div>
                <div className="p-5">
                    <div className=" text-lg uppercase text-white font-medium"><a href="#">
                        <Image width={1000} height={0} className=' w-48 h-auto' src="/Assets/images/logo.svg" alt='logo' />
                    </a>
                    </div>
                    <ul className="flex list-none space-x-3 my-2">
                        <li><a className=' text-[20px] hover:text-gray-400 text-white' href="#"><AiFillTwitterSquare /></a></li>
                        <li><a href="#" className=' text-[20px] hover:text-gray-400 text-white'><FaFacebookSquare /></a> </li>
                        <li><a className=' text-[20px] hover:text-gray-400 text-white' href="#"><AiFillInstagram /></a></li>
                        <li><a className=' text-[20px] hover:text-gray-400 text-white' href="#"><AiFillLinkedin /></a></li>
                    </ul>
                    <p className='text-white font-semibold md:text-lg text-sm my-2'>Subscribe to our Newsletter</p>
                    <div className="my-2 flex flex-col -space-x-5 items-center gap-2 sm:flex-row sm:gap-3">
                        <div className="w-full">
                            <label for="hero-input" className="sr-only">Search</label>
                            <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full bg-[#498240] placeholder:text-white placeholder:text-base border border-[#498240] shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 text-white" placeholder="Enter your email" />
                        </div>
                        <a className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-white hover:bg-[#498240] border hover:border-white  text-[#498240] hover:text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
