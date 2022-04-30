import React from 'react';
import CubeMaster from '../components/cube';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';




const home = () => {
    return (
        <div className="home">
            <Navigation />
            <CubeMaster />

            <Signature />

        </div>
    );
};




export default home;
