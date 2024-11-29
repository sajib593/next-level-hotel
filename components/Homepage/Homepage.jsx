import React from 'react';
import PopularServices from './PopularServices';
import Card from './Card';
import About from './About';

import Countries from '../countries/Countries';

import Banner from '../Banner/Banner';



const Homepage = () => {
    return (
        <main>
           
           <Banner></Banner>
          
            <PopularServices></PopularServices>

            <Countries></Countries>
            <Card></Card><br />

            
            
            <br /><br />

            <About></About>
        </main>
    );
};

export default Homepage;