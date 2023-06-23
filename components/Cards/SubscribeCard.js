import React from 'react'

const SubscribeCard = () => {
    return (
        <div className="overflow-hidden bg-center bg-[#498240] bg-[url('/Assets/images/Home-images/svg/svg-subscribe.svg')] bg-no-repeat">
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="relative mx-auto max-w-3xl grid space-y-5 sm:space-y-10">
                    <div className="text-center">
                        <h1 className="text-xl  text-gray-800 font-bold sm:text-5xl lg:text-4xl lg:leading-tight dark:text-gray-200">
                        Subscribe to our newsletter
                        </h1>
                    </div>
                    <form>
                        <div className="mx-auto max-w-4xl sm:flex sm:space-x-3 p-3 ">
                            <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                                <label for="hs-hero-name-1" className="block text-sm font-medium "><span className="sr-only">Your name</span></label>
                                <input type="text" id="hs-hero-name-1" className="bg-[#498240] py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 border border-white placeholder:text-white" placeholder="Your name" />
                            </div>
                            <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] bg-[#498240]">
                                <label for="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Your email address</span></label>
                                <input type="email" id="hs-hero-email-1" className="bg-[#498240] border py-3 px-4 block w-full placeholder:text-white rounded-md text-sm sm:p-4" placeholder="Your name" />
                            </div>
                            <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l grid sm:block sm:flex-[1_0_0%]">
                                <a className="py-3 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-white text-[#498240] hover:bg-[#498240] focus:outline-none focus:ring-2 focus:ring-[#498240] focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800 hover:border-white hover:text-white" href="#">
                                    Subscribe Now
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeCard