import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className="header">
            <nav className="navBar">
                <Link to="/">
                    <div className="logoBlock">
                        <img src={logo} alt="" className="logo" />
                        Cosmetic Store
                    </div>
                </Link>
                {/*<Link to="/">Главная</Link>*/}
                <Link to="/sale">Цены</Link>
                <Link to="/about">О компании</Link>
                <Link to="/contacts">Контакты</Link>
            </nav>
        </div>
    )
}

export default Header