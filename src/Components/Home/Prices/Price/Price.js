import React from 'react';
import { useNavigate } from 'react-router-dom';

const Price = (price) => {
    const { name, type, days, img, packagePrice } = price.price;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/checkout');
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {type}
                </p>
                <p className="text-gray-700 text-base">
                    Day: {days} days
                </p>
                <p className="text-gray-700 text-base">
                    Price: ${packagePrice}
                </p>
                <button onClick={handleClick} type="button" className="my-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 bg-gray-200">Book Now</button>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wedding</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wedding photography</span>
            </div>
        </div>
    );
};

export default Price;