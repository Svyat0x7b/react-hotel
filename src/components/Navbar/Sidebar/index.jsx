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
                    <a
                        href="https://www.linkedin.com/in/svyatoslav-tsykaliuk-058785292/"
                        className="social-link">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Svyat0x7b" className="social-link">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/Svyat3301" className="social-link">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://instagram.com/nikocious_svyat?igshid=OGQ5ZDc2ODk2ZA=="
                        className="social-link">
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
