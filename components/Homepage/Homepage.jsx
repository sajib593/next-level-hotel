import React from 'react';
import PopularServices from './PopularServices';
import Card from './Card';
import About from './About';

const Homepage = () => {
    return (
        <main>
            <h2>This is Home Page</h2>
            <PopularServices></PopularServices>
            <Card></Card>
            <About></About>
        </main>
    );
};

export default Homepage;