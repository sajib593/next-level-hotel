import React from 'react';
import PopularServices from './PopularServices';
import Card from './Card';
import About from './About';
import Banner from '../Banner/Banner';

const Homepage = () => {
    return (
        <main>
           
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Card></Card>
            <About></About>
        </main>
    );
};

export default Homepage;