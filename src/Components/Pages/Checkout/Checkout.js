import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className="card-details flex flex-col md:flex-row items-top">
                <div className="checkout-img-area flex justify-center">
                    <img className='w-full rounded' src="https://images.unsplash.com/photo-1629756048377-09540f52caa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="checkout-btn pt-5 ml-6">
                    <p className='text-2xl font-mono text-gray-500'>
                        Thanks for select My service. I will try my best.
                    </p>
                    <p className='my-5 text-xl text-gray-500 '>
                        select your payment methods
                    </p>
                    <div className="payments">
                        <div className="payments-img flex my-7">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-12 mx-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-12 mx-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-12 mx-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                    </div>
                    <button className="my-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 bg-gray-200">
                        process checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;