import React from 'react';
import PopularServices from './PopularServices';
import Card from './Card';
import About from './About';

import Countries from '../countries/Countries';
import Card1 from './Card1/page';



const Homepage = () => {
    return (
        <main>
           
          
            <PopularServices></PopularServices>

            <Countries></Countries>
            {/* <Card></Card><br /> */}

            <Card1></Card1>
            
            <br /><br />

            <About></About>
        </main>
    );
};

export default Homepage;