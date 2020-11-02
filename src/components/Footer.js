import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaFileDownload} from 'react-icons/fa';
import {FaEnvelopeOpenText} from 'react-icons/fa';

const Footer = () =>(

    <footer className="footerMain">
        <nav className="navbar navbar-expand-lg sticky-bottom navbar-dark bg-dark" >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                <a className="nav-link" href="#" title="Contactez-moi"><FaEnvelopeOpenText size={28} /><br/> Contactez-moi</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/sabrina-augusty-a097857b/" title="Ma page Linkedin" target="_blank"><FaLinkedin size={28} /></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/docs/Sabrina Augusty.pdf" title="Télécharger le CV" target="_blank"><FaFileDownload size={28} /> <br/>CV à télécharger</a>
                </li>
            </ul>
        </nav>
    </footer>
)

export default Footer