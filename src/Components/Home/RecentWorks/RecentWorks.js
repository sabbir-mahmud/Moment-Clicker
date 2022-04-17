import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

const RecentWorks = () => {
    const fadeImages = [
        {
            url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 1,
        },
        {
            url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 2,
        },
        {
            url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 3,
        },
        {
            url: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 4,
        },
    ];
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img className='w-full' src={fadeImage.url} alt="recent works" />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default RecentWorks;