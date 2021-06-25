import './index.scss';
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Assets/images/Logo.jpg';
import { RiUser3Line } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div id="headerWrapper">
                <div>
                    <div id="menu">
                        <FiMenu />
                        <h5>Menu</h5>
                    </div>
                    <img src={ logo } alt="decathlon logo" />
                    <div id="searchBar">
                        <input type="text" placeholder="SEARCH FOR A PRODUCT, A SPORT OR BRAND..." />
                        <div id="searchButton">
                            <div>
                                <span>
                                    <AiOutlineSearch />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="headerNav">
                    <nav>
                        <span>
                            <AiOutlineQuestionCircle />
                            <h5>Contact us</h5>
                        </span>
                        <span>
                            <FaRegBuilding />
                            <h5>Find a store</h5>
                        </span>
                        <span>
                            <RiUser3Line />
                        </span>
                        <span>
                            <AiOutlineShoppingCart />
                            <h5>My Basket</h5>
                            <div></div>
                        </span>
                    </nav>
                </div>
            </div>
            <div className="underHeader">
                <ul>
                    <li>All sports</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Nutrition & Body Care</li>
                </ul>
            </div>
        </div>

    );
}

export default Header;