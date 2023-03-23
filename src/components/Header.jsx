import React from "react";


const Header = () => {


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand m-2">Cocktails DB App</p>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;