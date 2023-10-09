import React from 'react';
import { useNavigate } from 'react-router-dom';
import customer1 from '../../img/customer-1.jpeg';

const Customers = () => {
    const navigate = useNavigate();
    return (
        <section className="customers">
            <div className="common-header">
                <h1 className="common-heading">Our Customers</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
            </div>
            <p className="customers-paragraph">
                Aliqua amet sunt anim velit commodo irure officia sunt commodo ad.
            </p>
            <div className="customers-card-wrapper">
                <div className="customer-card">
                    <div className="customer-img-wrapper">
                        <img src={customer1} alt="customer-1" className="customer-img" />
                    </div>
                    <div className="customer-info">
                        <h3 className="customer-fullname">Helen Doe</h3>
                        <p className="customer-paragraph-1">Happy Customer</p>
                        <p className="customer-paragraph-2">
                            "Aute amet officia adipisicing proident minim non ex labore ut deserunt
                            aliquip. Qui sit ea adipisicing enim commodo irure voluptate
                            reprehenderit Lorem est quis. Do id tempor ad enim aliquip. Sit elit
                            deserunt duis adipisicing commodo culpa labore nisi dolore tempor culpa
                            nulla eiusmod labore."
                        </p>
                    </div>
                </div>
                <div className="customer-card">
                    <div className="customer-img-wrapper">
                        <img src={customer1} alt="customer-2" className="customer-img" />
                    </div>
                    <div className="customer-info">
                        <h3 className="customer-fullname">Monika Smith</h3>
                        <p className="customer-paragraph-1">Happy Customer</p>
                        <p className="customer-paragraph-2">
                            "Aute amet officia adipisicing proident minim non ex labore ut deserunt
                            aliquip. Qui sit ea adipisicing enim commodo irure voluptate
                            reprehenderit Lorem est quis. Do id tempor ad enim aliquip. Sit elit
                            deserunt duis adipisicing commodo culpa labore nisi dolore tempor culpa
                            nulla eiusmod labore."
                        </p>
                    </div>
                </div>
            </div>
            <div className="rooms-btn-wrapper">
                <button className="rooms-btn" onClick={() => navigate('/customers')}>
                    Check All Reviews
                </button>
            </div>
        </section>
    );
};

export default Customers;
