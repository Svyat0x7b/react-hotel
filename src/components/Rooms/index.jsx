import React from 'react';
import { useNavigate } from 'react-router-dom';
import singleRoomImg from '../../img/single-room.jpeg';
import doubleRoomImg from '../../img/double-room.jpeg';
import luxImg from '../../img/lux.jpeg';
import vipImg from '../../img/vip.jpeg';

const Rooms = () => {
    const navigate = useNavigate();
    return (
        <section className="rooms">
            <div className="common-header">
                <h1 className="common-heading">Rooms in React Hotel</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
            </div>
            <div className="rooms-cards-wrapper">
                <div className="room-card">
                    <img src={singleRoomImg} alt="room" className="room-img" />
                    <div className="room-card-content">
                        <h4 className="room-card-heading">Single Room</h4>
                        <p className="room-card-paragraph">
                            Lorem in pariatur id enim ad labore velit irure proident incididunt ut
                            qui nisi est. Lorem elit amet aliqua anim eiusmod ipsum velit pariatur
                            amet amet quis occaecat non. Consectetur esse nostrud ex mollit
                            adipisicing. Commodo veniam pariatur elit ipsum in.
                        </p>
                        <p className="room-price">$99.00</p>
                        <button className="room-card-btn">
                            Book Now
                            <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                        </button>
                    </div>
                </div>
                <div className="room-card">
                    <img src={doubleRoomImg} alt="room" className="room-img" />
                    <div className="room-card-content">
                        <h4 className="room-card-heading">Double Room</h4>
                        <p className="room-card-paragraph">
                            Lorem in pariatur id enim ad labore velit irure proident incididunt ut
                            qui nisi est. Lorem elit amet aliqua anim eiusmod ipsum velit pariatur
                            amet amet quis occaecat non. Consectetur esse nostrud ex mollit
                            adipisicing. Commodo veniam pariatur elit ipsum in.
                        </p>
                        <p className="room-price">$199.00</p>
                        <button className="room-card-btn">
                            Book Now
                            <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                        </button>
                    </div>
                </div>
                <div className="room-card">
                    <img src={luxImg} alt="room" className="room-img" />
                    <div className="room-card-content">
                        <h4 className="room-card-heading">Lux Room</h4>
                        <p className="room-card-paragraph">
                            Lorem in pariatur id enim ad labore velit irure proident incididunt ut
                            qui nisi est. Lorem elit amet aliqua anim eiusmod ipsum velit pariatur
                            amet amet quis occaecat non. Consectetur esse nostrud ex mollit
                            adipisicing. Commodo veniam pariatur elit ipsum in.
                        </p>
                        <p className="room-price">$299.00</p>
                        <button className="room-card-btn">
                            Book Now
                            <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                        </button>
                    </div>
                </div>
                <div className="room-card">
                    <img src={vipImg} alt="room" className="room-img" />
                    <div className="room-card-content">
                        <h4 className="room-card-heading">VIP Room</h4>
                        <p className="room-card-paragraph">
                            Lorem in pariatur id enim ad labore velit irure proident incididunt ut
                            qui nisi est. Lorem elit amet aliqua anim eiusmod ipsum velit pariatur
                            amet amet quis occaecat non. Consectetur esse nostrud ex mollit
                            adipisicing. Commodo veniam pariatur elit ipsum in.
                        </p>
                        <p className="room-price">$399.00</p>
                        <button className="room-card-btn">
                            Book Now
                            <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="rooms-btn-wrapper">
                <button className="rooms-btn" onClick={() => navigate('/rooms')}>
                    Check All Rooms
                </button>
            </div>
        </section>
    );
};

export default Rooms;
