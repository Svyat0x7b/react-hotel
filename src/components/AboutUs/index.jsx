import { useNavigate } from 'react-router-dom';
import firstImg from '../../img/about-us-img-1.jpeg';
import secondImg from '../../img/about-us-img-2.jpeg';
import thirdImg from '../../img/about-us-img-3.jpeg';
import fourthImg from '../../img/about-us-img-4.jpeg';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <section className="about-us">
            <div className="about-us-content">
                <h1 className="about-us-heading">About Us</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
                <h3 className="sub-heading">React Hotel</h3>
                <p className="about-us-paragraph">
                    Aute nulla labore eu proident esse fugiat eu laboris veniam fugiat. Commodo
                    ullamco ipsum cillum irure enim ea consequat voluptate nostrud dolor enim. Minim
                    incididunt culpa quis aute fugiat ipsum. Aute non laborum consequat Lorem
                    officia laboris nostrud id pariatur. Nulla in sit ut ea sunt cupidatat Lorem id
                    anim voluptate laborum culpa excepteur nulla. In voluptate excepteur
                    reprehenderit labore. Dolor quis ex laboris nostrud tempor ut eu ut ex
                    exercitation Lorem ipsum elit irure.
                </p>
                <button className="about-us-btn" onClick={() => navigate('/about')}>
                    Read More
                    <i className="fa-sharp fa-solid fa-angles-right btn-arrow"></i>
                </button>
            </div>

            <div className="about-us-images">
                <img src={firstImg} className="image image-1" />
                <img src={secondImg} className="image image-2" />
                <img src={thirdImg} className="image image-3" />
                <img src={fourthImg} className="image image-4" />
            </div>
        </section>
    );
};

export default AboutUs;
