import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderHtml = () => {
    return (
        <div className='fixed z-50 w-full p-[30px]shadow-xl bg-white'>
            <div className="navbar justify-between py-3">
                <div className="navbar-center pb-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Image
                            width={220}
                            height={0}
                            src="/Assets/images/logo.svg"
                            alt="Your Company"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex lg:w-[60%]">
                    <ul className="menu menu-horizontal lg:flex lg:justify-center lg:items-center px-2 text-14px leading-6 tracking-tight font-extralight">
                        <li><Link href="#">Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className=''>Our Impact</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Get Involved</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>News</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>About Us</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="#">Contacts Us</a></li>
                        <li className=''><a href="#"><MagnifyingGlassIcon class="h-6 w-6 text-gray-500" /></a></li>
                    </ul>
                </div>
                <div className="navbar-center mr-4">
                    <a className='cursor-pointer text-[#498240] text-custom-color text-center text-base font-montserrat font-medium'>Member</a>
                    <a className="btn ml-3 py-[11px] px-[24px] rounded-[10px] bg-[#498240] text-center text-base font-montserrat font-medium text-white border-[#498240] hover:bg-white hover:border-[#498240] hover:text-[#498240] transition duration-300">Donate</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderHtml