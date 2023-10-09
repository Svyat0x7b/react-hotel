import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Categories from '../../components/Categories';
import { ROOMSDATA } from '../../utils/RoomsData';
import { getRoomNameByType, castPriceToTemplate } from '../../utils/RoomsUtils';
import './rooms.scss';

const RoomsPage = () => {
    const [serachValue, setSerachValue] = useState('');
    const changeSearchHandler = (e) => {
        setSerachValue(e.target.value);
    };
    return (
        <>
            <Navbar />
            <section className="rooms">
                <div className="common-header">
                    <h1 className="common-heading">Rooms in React Hotel</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>
                </div>
                <div className="rooms-search">
                    <input
                        type="text"
                        name="search"
                        value={serachValue}
                        onChange={changeSearchHandler}
                    />
                    <div className="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#fff"
                            height="25px"
                            width="25px"
                            version="1.1"
                            id="Capa_1"
                            viewBox="0 0 488.4 488.4"
                            xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="underline">
                    <div className="small-underline"></div>
                </div>
                <Categories />
                <div className="rooms-cards-wrapper">
                    {ROOMSDATA.map((room) => (
                        <div className="room-card">
                            <img src={room.imgUrl} alt="room" className="room-img" />
                            <div className="room-card-content">
                                <h4 className="room-card-heading">
                                    {getRoomNameByType(room.type)}
                                </h4>
                                <p className="room-card-paragraph">{room.description}</p>
                                <p className="room-price">${castPriceToTemplate(room.price)}</p>
                                <button className="room-card-btn">
                                    Book Now
                                    <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default RoomsPage;
