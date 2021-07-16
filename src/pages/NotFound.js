import React from 'react';
import { NavLink } from 'react-router-dom';
import Signature from '../components/Signature';


const notfound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé, cette page n'existe pas...</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Acceuil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default notfound;