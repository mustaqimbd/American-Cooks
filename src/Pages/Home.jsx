import React from 'react';
import Banner from '../Components/Header/Banner';
import Chefs from '../Components/Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import OurRecipe from '../Components/Recipe/OurRecipe';

const Home = () => {

    return (
        <div>
            <Banner />
            <Chefs />
            <OurRecipe />
        </div>
    );
};

export default Home;