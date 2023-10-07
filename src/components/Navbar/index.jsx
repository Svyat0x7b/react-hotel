import Sidebar from './Sidebar/index';
import Navigation from './Navigation/index';

const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" className="checkbox" id="click" hidden />
            <Sidebar />
            <Navigation />
        </div>
    );
};

export default Navbar;
