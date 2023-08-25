import React from "react";
import "./navbar1.css";

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark nav-color">
        <a className="navbar-brand mx-3" href="https://localhost:3000">
          ShopNow
        </a>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000">
                  Fashion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000">
                  Phones and Tablets
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className=" shop-in"
                type="text"
                placeholder="Search for products"
              />
              <button className=" btn-success shop-but" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

{/* <nav className="navbar navbar-expand-sm navbar-dark nav-color">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">ShopNow</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Phones and Tablets</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}




    </div>
  );
};

export default Navbar1;
