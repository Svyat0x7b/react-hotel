import React from 'react';
import gallery1 from '../../img/gallery-img-1.jpeg';
import gallery2 from '../../img/gallery-img-2.jpeg';
import gallery3 from '../../img/gallery-img-3.jpeg';
import gallery4 from '../../img/gallery-img-4.jpeg';
import gallery5 from '../../img/gallery-img-5.jpeg';
import gallery6 from '../../img/gallery-img-6.jpeg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="main-part">
                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">React Hotel</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                support@reacthotel.com
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                New York, Main Street 123
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Tel: +123 456 789
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">Explore</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Home
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                About Us
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Rooms
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Events
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Customers
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h3 className="footer-heading">Contact</h3>
                    <p>Sign Up for News</p>
                    <form action="#" className="footer-form">
                        <input type="text" className="footer-input" placeholder="Your E-mail" />
                        <button className="footer-btn">Sign Up</button>
                    </form>
                </div>
                <div className="gallery">
                    <h3 className="footer-heading">Gallery</h3>
                    <div className="gallery-imgs">
                        <div className="img-wrapper">
                            <img src={gallery1} alt="Hotel Photo" className="footer-img" />
                        </div>
                        <div className="img-wrapper">
                            <img src={gallery2} alt="Hotel Photo" className="footer-img" />
                        </div>
                        <div className="img-wrapper">
                            <img src={gallery3} alt="Hotel Photo" className="footer-img" />
                        </div>
                        <div className="img-wrapper">
                            <img src={gallery4} alt="Hotel Photo" className="footer-img" />
                        </div>
                        <div className="img-wrapper">
                            <img src={gallery5} alt="Hotel Photo" className="footer-img" />
                        </div>
                        <div className="img-wrapper">
                            <img src={gallery6} alt="Hotel Photo" className="footer-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="creator-part">
                <div className="copyright-text">
                    <p>Copyright &copy; 2023 React Hotel. All Rights Reserved</p>
                </div>

                <div className="text-right">
                    <p>
                        Made By <i className="fa-solid fa-heart"></i>
                        <span>
                            <a
                                href="https://github.com/Svyat0x7b"
                                style={{ textDecoration: 'none' }}>
                                Svyat0x7b
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
