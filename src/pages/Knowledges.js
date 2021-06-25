import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/knowledges/Experience';
import CV from '../components/knowledges/CV';
import Languages from '../components/knowledges/Languages';
import Otherskills from '../components/knowledges/Otherskills';
import Signature from '../components/Signature';

const knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <Otherskills />
                <CV />
            </div>
            <Signature />
        </div>
    );
};

export default knowledges;