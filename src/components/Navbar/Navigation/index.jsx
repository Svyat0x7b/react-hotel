import React from 'react';
import { Link } from 'react-router-dom';
import { NAVLINKLIST } from '../../../utils/LinkData';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-header">
                <h1 className="navigation-heading">React Hotel</h1>

                <form className="navigation-search">
                    <input
                        type="text"
                        className="navigation-search-input"
                        placeholder="Search..."
                    />
                    <button className="navigation-search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <ul className="navigation-list">
                {NAVLINKLIST.map((link) => (
                    <li className="navigation-item">
                        <Link to={link.path} className="navigation-link">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="copyright">
                <p>&copy; 2023, React Hotel. All rights reserved.</p>
            </div>
        </nav>
    );
};

export default Navigation;
