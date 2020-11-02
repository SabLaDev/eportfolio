import React from 'react';
import {FaSearch} from 'react-icons/fa';
import logo from '../img/logo_ePortfolio.png';


const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg"> 
            <a className="navbar-brand" href="#presentation"><img src={logo} alt="logo" width="60" height="60" className="d-inline-block align-top" loading="lazy"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                    <li className="nav-item">
                        <a className="nav-link" href="#presentation">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#competences">Mes Compétences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#realisations">Mes Réalisations</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><FaSearch /></button>
                </form>
            </div>
        </nav>
    </header>
)

export default Header;
