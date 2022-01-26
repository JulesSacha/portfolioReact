import React from 'react';
import { NavLink } from 'react-router-dom';
import darkMode from '../DarkMode.js';




const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <svg>
                        <circle class="svg-cercle" cx="205" cy="75" r="70" />
                    </svg>
                    <img src="" width="140px" height="140px" alt="Img de profil" />                    <h3>Jules Fernsner</h3>
                </div>

            </div>

            <div className="navigation">
                <ul>
                    <NavLink exact to='/' activeClassName="navActive">
                        <li>
                            <i className='fa fa-home'></i>
                            <span>Accueil</span>
                        </li>
                    </NavLink>
                    <NavLink exact to='/Competences' activeClassName="navActive">
                        <li>
                            <i class="fas fa-tools"></i>
                            <span>Compétences</span>
                        </li>
                    </NavLink>
                    <NavLink exact to='/Portfolio' activeClassName="navActive">
                        <li>
                            <i class="fas fa-project-diagram"></i>
                            <span>Portfolio</span>
                        </li>
                    </NavLink>
                    <NavLink exact to='/Contact' activeClassName="navActive">
                        <li>
                            <i class="fas fa-link"></i>
                            <span>Contact</span>
                        </li>
                    </NavLink>
                </ul>

                <label className="label">
                    <div className="toggle">
                        <input className="toggle-state" type="checkbox" name="check" value="check" onClick={darkMode} />
                        <div className="indicator"></div>
                    </div>
                    <div id="label-text">Mode nuit</div>
                </label>


            </div>

        </div>
    );
};

export default Navigation;