import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand m-2">Cocktails DB App</Link>
            </nav>
        </header>
    );
};

export default Header;