import React from 'react';
import PopularServices from './PopularServices';
import Countries from '../countries/Countries';
import Card from './Card';
import About from './About';

const Homepage = () => {
    return (
        <main>
            <h2>This is Home Page</h2>
            <PopularServices></PopularServices>

            <Countries></Countries>
            <Card></Card><br /><br /><br />
            <About></About>
        </main>
    );
};

export default Homepage;