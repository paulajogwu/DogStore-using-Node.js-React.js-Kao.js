import React, { useState, useEffect,useContext } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import "./Navbar.css";
import {UserContext} from './context/UserContext'



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [breed, setSearch] = useState("");
const {email} = useContext(UserContext)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  //const details = UserContext(UserContext)
  let history = useHistory()
  const SearchDogs = () => {
    history.push("/Search/"+`${breed}`)
  };
  


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            SHELTER
            <i class="fab fa-typo3" />
          </Link>
          <span>Welcome: {email}</span>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div    className="nav-form">
                <input className="inputs"  onChange={(e) => {
              setSearch(e.target.value);
            }}  name="search"  placeholder="Search" style={{color:'black'}}  />  &nbsp;
                <Button  onClick={() => {
              SearchDogs();
            }} type="submit" buttonStyle="btn--outline">Search</Button>
                </div>
            </li>
           

            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/doglist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Breeds
              </Link>
            </li> */}

            <li>
              {/* <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> */}
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          <Link to="/favourite" className="ml-auto">
          <Button className="myfav">
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my favourite
          </Button>       
           </Link>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
