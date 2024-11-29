import React from 'react';
import PopularServices from './PopularServices';
import Card from './Card';
import About from './About';

import Countries from '../countries/Countries';



const Homepage = () => {
    return (
        <main>
           
          
            <PopularServices></PopularServices>

            <Countries></Countries>
            <Card></Card><br /><br /><br />

            <About></About>
        </main>
    );
};

export default Homepage;