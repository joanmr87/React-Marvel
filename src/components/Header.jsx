import React from 'react';
import '../assets/styles/Header.css';

import logo from '../assets/static/logo-marvel.png';
//import userIcon from '../assets/static/user-icon.png'

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Marvel logo"/>
            <div className="header__menu">
                <div className="header__menu--profile">                   
                        <p>Perfil</p>
            </div>
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </div>
  </header>
            );

export default Header


