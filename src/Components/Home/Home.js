import React from 'react';
import Header from '../Shared/Header/Header';
import Prices from './Prices/Prices';
import RecentWorks from './RecentWorks/RecentWorks';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="recent-work-title my-12">
                <h1 className='text-3xl text-center font-mono'>Recent Works</h1>
            </div>
            <RecentWorks></RecentWorks>

            <div className="mb-16 container mx-auto">
                <Services></Services>
            </div>

            <div className="mb-16 container mx-auto">
                <Prices></Prices>
            </div>

        </div >
    );
};

export default Home;