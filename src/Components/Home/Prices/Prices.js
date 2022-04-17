import React, { useEffect, useState } from 'react';
import Price from './Price/Price';

const Prices = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('price-data.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>

            <div className="price-title">
                <h1 className='text-3xl my-16 text-center font-mono'>Prices</h1>
            </div>


            <div className="mb-9 price-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    prices.map(price => <Price key={price.id} price={price} ></Price>)

                }

            </div>
        </div>
    );
};

export default Prices;