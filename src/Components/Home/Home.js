import React from 'react';
import Header from '../Shared/Header/Header';
import Prices from './Prices/Prices';
import RecentWorks from './RecentWorks/RecentWorks';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="recent-works-container container mx-auto rounded my-16">
                <div className="recent-work-title my-16">
                    <h1 className='text-3xl text-center font-mono'>Recent Works</h1>
                </div>
                <RecentWorks></RecentWorks>
            </div>
            <div className="mb-16 container mx-auto">
                <Services></Services>
            </div>

            <Prices></Prices>

        </div >
    );
};

export default Home;