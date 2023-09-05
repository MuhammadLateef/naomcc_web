import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { MdLocationOn} from "react-icons/md";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
const FooterComponent = () => {
  return (
    <div className="bg-white pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-gray-800 flex-wrap flex flex-col justify-center items-center">
        <div className="p-5">
          <div className="text-lg uppercas font-medium">
            <a href="/">
              <Image
                width={1000}
                height={0}
                className=" w-72 h-auto"
                src="/Assets/images/logo3.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="md:w-[70%] w-full mx-auto flex flex-wrap justify-around items-center">
          <Link
            href="/AboutUs"
            className="my-4 hover:tracking-[0.05px] block text-[#4A525E] font-semibold text-base"
          >
            About Us <span className="text-teal-600 text-base p-1"></span>
          </Link>
          <Link
            className="my-4 hover:tracking-[0.05px] block text-[#4A525E] font-semibold text-base"
            href="/resources"
          >
            Resources <span className="text-teal-600 text-base p-1"></span>
          </Link>
          <Link
            href="/News"
            className="my-4 hover:tracking-[0.05px] block text-[#4A525E] font-semibold text-base"
          >
            News & Events <span className="text-teal-600 text-base p-1"></span>
          </Link>
          <Link
            className="my-4 hover:tracking-[0.05px] block text-[#4A525E] font-semibold text-base"
            href="/Contactus"
          >
            Contact Us <span className="text-teal-600 text-base p-1"></span>
          </Link>
          <Link
            href="/Membership"
            className="my-4 hover:tracking-[0.05px] block text-[#4A525E] font-semibold text-base"
          >
            Membership <span className="text-teal-600 text-base p-1"></span>
          </Link>
        </div>
        <div className="p-3 flex items-center justify-center">
          <a className="text-[40px] hover:text-green-500 text-[#4A525E]">
            <MdLocationOn />
          </a>
          <p>
            11226 S. Wilcrest Dr., Houston, TX 77099 Ph: 832-586-062
          </p>
        </div>
        <div className="p-3 flex items-center justify-center">
          <a className="text-[30px] hover:text-green-500 text-[#4A525E] mr-[10px]">
            <AiOutlineMail />
          </a>
          <p>
            info@naomcc.org
          </p>
        </div>
        <ul className="flex list-none space-x-6 my-2">
          <li>
            <a
              className=" text-[40px] hover:text-green-500 text-[#4A525E]"
              href="#"
            >
              <AiFillTwitterSquare />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/NationalAssociationofmuslimcharitableclinics"
              className=" text-[40px] hover:text-green-500 text-[#4A525E]"
            >
              <FaFacebookSquare />
            </a>{" "}
          </li>
          <li>
            <a
              className=" text-[40px] hover:text-green-500 text-[#4A525E]"
              href="https://www.instagram.com/nationalassociationofmcc/"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              className=" text-[40px] hover:text-green-500 text-[#4A525E]"
              href="#"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;
