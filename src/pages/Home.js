import React from 'react';
import Navigation from '../components/Navigation';


const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="textContent">
                    <div className="content">
                        <h1>Jules Fernsner</h1>
                        <h2>Développeur web Junior</h2>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;
