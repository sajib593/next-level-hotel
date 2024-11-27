import React from 'react';
import PopularServices from './PopularServices';
import Countries from '../countries/Countries';

const Homepage = () => {
    return (
        <main>
            <h2>This is Home Page</h2>
            <PopularServices></PopularServices>

            <Countries></Countries>
        </main>
    );
};

export default Homepage;