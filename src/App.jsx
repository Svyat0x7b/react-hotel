import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import RoomsPage from './pages/Rooms';
import CustomersPage from './pages/Customers';
import './App.css';

function App() {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutUsPage />} path="/about" />
            <Route element={<RoomsPage />} path="/rooms" />
            <Route element={<CustomersPage />} path="/customers" />
        </Routes>
    );
}

export default App;
