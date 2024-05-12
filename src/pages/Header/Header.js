import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="navBar">
                <Link to="/">Главная</Link>
                <Link to="/sale">Цены</Link>
                <Link to="/notes">О компании</Link>
                <Link to="/notes">Контакты</Link>
            </nav>
        </div>
    )
}

export default Header