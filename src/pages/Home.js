import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import Icon from '../svgr/icon';
import imgProfile from '../medias/photo-cv-fond.jpg';

const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="textContent">
                    <div className="content">
                        <div className="photo-home">
                            <svg>
                                <circle class="svg-cercle-1" cx="90" cy="90" r="80" />
                                <circle class="svg-cercle-2" cx="90" cy="90" r="80" />
                            </svg>
                            <img src={imgProfile} alt="Img de profil" />
                            <h3>Jules Fernsner</h3>
                            <h2>Développeur web Junior</h2>
                        </div>
                    <Icon />
                    </div>
                </div>


            </div>

            <Signature />

        </div>
    );
};

export default home;
