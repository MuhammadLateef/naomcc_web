import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div className='pt-[200px] py-[50px]'>
            {/* <div className="">
                    <dialog id="my_modal_4" className="modal border-2">
                        <form method="dialog" className="modal-box w-11/12 max-w-[50%] border-2">
                            <h3 className="font-bold md:text-lg text-base">National Association of Muslim Charitable Clinics</h3>
                            <p className="py-4 ">The National Association of Muslim Charitable Clinics (NAOMCC) will help your clinic/organization to connect with a wide range of benefits, including grant opportunities, networking, and other clinical support. To become an organizational member the clinic/organization must be charitable/not-for-profit and must be run or managed by Muslims. </p>
                            <p className='mb-[10px]'>Click here for becoming a Member </p>
                            <a href='https://forms.gle/tZhBsP63qJUB3UkG9' target='_blank' className="btn btn-outline btn-success">Membership</a>
                            <div className="modal-action">
                            </div>
                        </form>
                    </dialog>
            </div> */}
            <div className='w-[80%] mx-auto'>
                <div class="card card-side bg-base-100 shadow-xl">
                    {/* <figure><Image width={100} height={100} className='h-[100px]' src="/Assets/images/logo2.jpeg" alt="Movie" /></figure> */}
                    <div class="w-[50%] card-body">
                        <h2 class="card-title">The National Association of Muslim Charitable Clinics</h2>
                        <p>The National Association of Muslim Charitable Clinics (NAOMCC) will help your clinic/organization to connect with a wide range of benefits, including grant opportunities, networking, and other clinical support. To become an organizational member the clinic/organization must be charitable/not-for-profit and must be run or managed by Muslims.</p>
                        <div class="card-actions justify-end">
                            <a href='#' target='_blank' className="btn btn-outline btn-success">Membership</a>
                            {/* <a href='https://forms.gle/tZhBsP63qJUB3UkG9' target='_blank' className="btn btn-outline btn-success">Membership</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
