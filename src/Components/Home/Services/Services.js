import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='service-container' >
            <div className="services-provide my-16">
                <h1 className='text-3xl text-center font-mono'>Services I provide</h1>
            </div>
            <div className="services-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">

                {
                    services.map(service => <Service key={service.id} service={service} />)
                }

            </div>


        </div>
    );
};

export default Services;