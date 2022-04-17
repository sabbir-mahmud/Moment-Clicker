import React from 'react';
import about from '../../../images/about.jpg'
import shape from '../../../images/shape-1.png'
import './About.css'

const About = () => {
    return (
        <div className="container mx-auto overflow-hidden">
            <div className='mt-16 mb-16 flex flex-col md:flex-row md:items-center relative'>
                <div className="img-wrapper overflow-hidden shadow rounded-3xl ml-7">
                    <img className='w-full' src={about} alt="" />
                    <img className='absolute w-12 shape-css' src={shape} alt="" />
                    <img className='absolute w-24 top-shape-css' src={shape} alt="" />
                    <img className='absolute w-12 right-shape-css' src={shape} alt="" />
                </div>
                <div className="about-info ml-5 mt-8 md:ml-16 md:w-2/4">
                    <h1 className='text-4xl font-mono font-bold text-gray-600'>Assalamu'alaikum.  </h1>
                    <h1 className='text-2xl my-3 font-mono font-bold text-gray-600'>I'm SM Sabbir Mahmud.</h1>
                    <p className='text-gray-600'>
                        I'm a professional full-stack web developer. I'm an expert in || Python || Django || JavaScript || Node.js || React.js || Express.js || I have more than 1.5 Years of experience in Web Developing. If you need a web developer just hire me.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;