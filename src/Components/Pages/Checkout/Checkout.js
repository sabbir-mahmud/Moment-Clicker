import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className="card-details flex items-center">
                <div className="checkout-img-area flex justify-center">
                    <img className='w-full' src="https://images.unsplash.com/photo-1629756048377-09540f52caa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="checkout-btn ml-6">
                    <p>
                        Thanks for select My service. I will try my best.
                    </p>
                    <div className="payments">
                        <div className="payments-img"></div>
                        <p>
                            select your payment methods
                        </p>
                    </div>
                    <button>
                        process checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;