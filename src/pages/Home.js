import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import Icon from '../svgr/icon';
import imgProfile from '../media/photo-cv-fond.jpg';

const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="textContent">
                    <div className="content">
                        <div className="photo-home">
                            <svg>
                                <circle class="svg-cercle" cx="75" cy="75" r="70" />
                            </svg>
                            <img src={imgProfile} width="140px" height="140px" alt="Img de profil" />
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
