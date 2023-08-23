import logo from './pantry_stocker_logo.svg';
import { Link } from "react-router-dom";
export const Header = function () {
    return (
        <div className="Header">

            <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
            <ul className="Menu">
                <li className="MenuItem"><Link to="/ShoppingList">Shopping list</Link></li>
                <li className="MenuItem">Ingredients</li>
                <li className='MenuItem'>Expired Ingredients</li>
                <li className="MenuItem"><Link to="/Stores">Stores</Link></li>
                <li className="MenuItem">Categories</li>
            </ul>
        </div>
    );
}