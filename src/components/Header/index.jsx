import React from 'react';
import crownImg from '../../img/crown.png';
const Header = () => {
    return (
        <header className="header">
            <div className="brand">
                <div>
                    <img src={crownImg} alt="crown" width="80" />
                </div>
                <h3 className="hotel-heading">React Hotel</h3>
            </div>
            <div className="banner">
                <h1 className="banner-heading">Welcome to React Hotel</h1>
                <p className="banner-paragraph">Make your life luxirous</p>
                <button className="banner-btn">Check Out</button>
            </div>
        </header>
    );
};

export default Header;
