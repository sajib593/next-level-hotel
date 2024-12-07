import React from 'react';
import PopularServices from './PopularServices';
import Countries from '../countries/Countries';
import Card from './Card';
import About from './About';

<<<<<<< HEAD

=======
import Countries from '../countries/Countries';

import Banner from '../Banner/Banner';
>>>>>>> 62d95912185f85f7b39d6159042f107826bc0b9b



const Homepage = () => {
    return (
        <main>
<<<<<<< HEAD
            <h2>This is Home Page</h2>
            <PopularServices></PopularServices>

            <Countries></Countries>
            <Card></Card><br /><br /><br />
=======
           
           <Banner></Banner>
          
            <Card></Card>
            <PopularServices></PopularServices>

            <br /> <br /> <br />
            <Countries></Countries>

            
            
            <br /><br />

>>>>>>> 62d95912185f85f7b39d6159042f107826bc0b9b
            <About></About>
           
           
        </main>
    );
};

export default Homepage;