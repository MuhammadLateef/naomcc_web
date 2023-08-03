'use client'
import React from 'react'
import { useState } from 'react';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default async function Page () {
    const [isDisabled, setIsDisabled] = useState(false);
    const handleSubmit = async (event) => {

        setIsDisabled(true);
        event.preventDefault();
        const data = {
            FName: event.target.fname.value,
            LName: event.target.lname.value,
            Email: event.target.email.value,
            Subject: event.target.subject.value,
            Message: event.target.message.value,
        };

        const JSONdata = JSON.stringify(data);

        // const response = await fetch('/api/Contact');
        const response = await fetch('/api/Contact', {
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
            cache: 'no-store',
          });
        const result = await response.json();
        console.log(result.data);
        if (result.data === 'Success') {
            // setToastStatus('Success');
            // setTimeout(() => {
            //              setToastStatus('hidden');
            //           }, 3000);
            toast.success('Message sent successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsDisabled(false);
        }
        else {
            toast.error('Error sending your message!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsDisabled(false);
        }
    }
    return (
        <div className='bg-[#D9D9D9] h-auto pt-[120px]'>
            <form onSubmit={handleSubmit} className="w-[90%] mx-auto py-4 flex flex-col justify-center items-center">
                <h3 className='md:text-[30px] text-[20px] text-[#444] my-3 font-bold'>Contact Us</h3>
                <div className="md:w-[65%] w-[90%] flex flex-col justify-center items-center mx-auto">
                    <div className="w-full flex flex-wrap flex-row justify-between md:my-3 my-0">
                        <input name='fname' className='md:w-[48%] w-full py-4 md:my-0 my-3 px-2 bg-white text-[#6E7191] md:text-[16px] text-[14px] rounded-lg' type="text" placeholder='First Name' />
                        <input name='lname' className='md:w-[48%] w-full py-4 md:my-0 my-3 px-2 bg-white text-[#6E7191] md:text-[16px] text-[14px] rounded-lg' type="text" placeholder='Last Name' />
                    </div>
                    <div className="w-full flex flex-wrap justify-between md:my-3 my-0">
                        <input name='email' className='md:w-[48%] w-full py-4 md:my-0 my-3 px-2 bg-white text-[#6E7191] md:text-[16px] text-[14px] rounded-lg' type="text" placeholder='Email' />
                        <input name='subject' className='md:w-[48%] w-full py-4 md:my-0 my-3 px-2 bg-white text-[#6E7191] md:text-[16px] text-[14px] rounded-lg' type="text" placeholder='Subject' />
                    </div>
                    <textarea name="message" className='w-full h-44 my-3 py-4 px-2 bg-white text-[#6E7191] md:text-[16px] text-[14px] rounded-lg' placeholder='Message' id="" rows="30" cols="10"></textarea>
                    <button disabled={isDisabled} className={clsx(`w-auto text-[18px] my-3 font-semibold text-white py-2 border px-2 rounded-xl bg-[#0A7750] hover:bg-white hover:text-[#0A7750] hover:border-[#0A7750] transition duration-300`, isDisabled ? 'cursor-not-allowed' : 'cursor-pointer')} type='submit'>
                        <svg aria-hidden="true" role="status" className={clsx(`inline mr-3 w-4 h-4 text-white animate-spin`, isDisabled ? 'visible' : 'hidden')} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                        </svg>
                        Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
