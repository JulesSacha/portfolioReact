import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import Signature from '../components/Signature';
const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation />
            <ProjectList />
            <Signature />
        </div>
    );
};

export default Portfolio;