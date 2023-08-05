'use client'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderHtml = () => {
    return (
        <div className='fixed z-50 w-full shadow-xl bg-white'>
            <div className="navbar justify-between md:px-12 px-auto py-0">
                <div className="pb-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52">
                            <li><Link href="/AboutUs">About Us</Link></li>
                            <li><Link href="/resources">Resources</Link></li>
                            <li>
                            <a href='/Membership' className="">Membership</a>
                            </li>
                            <li><Link href="#">News & Events</Link></li>
                            <li><Link href="Contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="normal-case text-base py-1">
                        <Image
                            width={280}
                            height={0}
                            className='h-[100px]'
                            // src="/Assets/images/logo.svg"
                            src="/Assets/images/logo3.png"
                            alt="Your Company"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:justify-center lg:w-[75%]">
                    <ul className="menu menu-horizontal lg:flex lg:justify-center lg:items-center px-2 text-[16px] leading-6 tracking-tight font-semibold text-[#18181B]">
                        <li><Link href="/">Home</Link></li>
                        <li tabIndex={0}> <Link href="AboutUs">About Us</Link>
                        </li>
                        <li tabIndex={0}> <Link href="/resources">Resources</Link>
                        </li>
                        <li><Link href="/News">News & Events</Link></li>
                        <li><Link href="/Membership">Membership</Link></li>
                        <li><Link href="/Contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-center mr-3">
                    <a  href='/Donations' className="ml-2 md:py-[12px] border py-[10px] md:px-[20px] px-[18px] rounded-[10px] bg-[#498240] text-center md:text-[16px] text-xs font-semibold capitalize text-white hover:cursor-pointer border-[#498240] hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">Donate</a>
                </div>
            </div>
        </div >
    )
}

export default HeaderHtml;