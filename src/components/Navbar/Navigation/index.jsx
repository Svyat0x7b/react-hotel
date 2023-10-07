import React from 'react';

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
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        home
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        about us
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        rooms
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        events
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        customers
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#" className="navigation-link">
                        contacts
                    </a>
                </li>
            </ul>

            <div className="copyright">
                <p>&copy; 2023, React Hotel. All rights reserved.</p>
            </div>
        </nav>
    );
};

export default Navigation;
