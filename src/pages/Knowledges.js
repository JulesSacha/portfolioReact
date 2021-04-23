import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import Otherskills from '../components/knowledges/Otherskills';

const knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <Otherskills />
                <Hobbies />
            </div>
        </div>
    );
};

export default knowledges;