import React from 'react';
import Airlines from './Airlines/Airlines';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import WhyTravelWith from './TravelWith/WhyTravelWith';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Airlines></Airlines>
            <WhyTravelWith></WhyTravelWith>
        </div>
    );
};

export default Home;