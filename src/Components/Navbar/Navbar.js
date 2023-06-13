import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { Header } from "../Header";
export const Navbar = () => {
  return (
    <div>
      <Header></Header>
      <nav className="navbar  navbar-dark  bg-black ">
        <div className="container-fluid">
          <div className="navbar">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className="nav-link active">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
