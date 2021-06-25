import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';



const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="textContent">
                    <div className="content">
                        <div className="photo-home">.
                            <img src="./media/photo-cv-fond.jpg" width="150px" height="150px" alt="Img de profil" />
                            <h3>Jules Fernsner</h3>
                            <h2>Développeur web Junior</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Signature />

        </div>
    );
};

export default home;
