import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <label for="click">
                <div className="menu-icon">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </label>
            <ul className="social-icons-list">
                <li>
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <div className="year">
                <p>2023</p>
            </div>
        </div>
    );
};

export default Sidebar;
