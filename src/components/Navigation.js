import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/photo-cv-fond.jpg" width="150px" height="150px" alt="Img de profil" />
                    <h3>Jules Fernsner</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName="navActive">
                            <i className='fa fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Competences' activeClassName="navActive">
                            <i className='fa fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Portfolio' activeClassName="navActive">
                            <i className='fa fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Contact' activeClassName="navActive">
                            <i className='fa fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="blank"
                            rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="blank"
                            rel="noopener noreferrer"><i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="blank"
                            rel="noopener noreferrer"><i className="fab fa-twitter"></i> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="blank"
                            rel="noopener noreferrer"><i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Jules Fernsner | développeur web junior</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;