import React from 'react';
import Header from '../Shared/Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="my-5 container mx-auto">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;