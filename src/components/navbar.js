import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark ">
        <div className="container-fluid">
          <h3 className="text-light">Test-Area</h3>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="linkme">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/calculator" className="linkme">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quizapp" className="linkme">
                Quiz_app
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ecommerce" className="linkme">
                {" "}
                E_commerce
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todolist" className="linkme">
                Todo_list
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
