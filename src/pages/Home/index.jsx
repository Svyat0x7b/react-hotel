import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import Rooms from '../../components/Rooms';
import Customers from '../../components/Customers';
import Footer from '../../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Rooms />
            <Customers />
            <Footer />
        </>
    );
};

export default HomePage;
