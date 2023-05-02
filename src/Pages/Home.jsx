import React from 'react';
import Banner from '../Components/Header/Banner';
import Chefs from '../Components/Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <Banner />
            <Chefs />
        </div>
    );
};

export default Home;