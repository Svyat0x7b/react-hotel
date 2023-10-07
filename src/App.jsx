import Navbar from './components/Navbar/';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import Customers from './components/Customers';
import Footer from './components/Footer';
import './App.css';

function App() {
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
}

export default App;
