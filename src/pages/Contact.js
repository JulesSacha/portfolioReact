import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Form from '../components/Form';

const contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
               
                <div className="contactBox">
                    
                    <h1>Contactez-moi !</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Strasbourg</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="+33 6 78 67 30 99">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié') }}>+33 6 78 67 30 99</span>
                            </CopyToClipboard>

                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="fernsner.j@gmail.com">
                                <span className="clickInput" onClick={() => { alert('Email copié') }}>fernsner.j@gmail.com</span>
                            </CopyToClipboard>

                        </li>
                    </ul>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default contact;