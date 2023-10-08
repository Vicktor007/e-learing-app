import React from "react";
// import RefactoredApp from "../RefactoredApp";
// Icons
import { FaBars } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
export default function Root() {
  return (
    <>
      <nav className="navbar bg-primary text-light mb-3">
        <div className="navbar-logo">
          {/* <a className="navbar-brand">
            <span className="logo">mm</span> Education
          </a> */}
          <NavLink
              to={`/home/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
             <a className="navbar-brand">
            <span className="logo">mm</span> Education
          </a>
            </NavLink>
          <button className="navbar-toggler btn btn-sm btn-close-white">
            <FaBars />
          </button>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href={`/home/`}>
                Home
              </a>
            </li> */}
            {/* <li className="nav-item">
              <Link to={`/home/`}>Home</Link>
            </li> */}
            <NavLink
              to={`/home/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to={`about`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              About
            </NavLink>
{/* 
<li className="nav-item">
              <a className="nav-link" href={`/About/`}>
               About
              </a>
            </li> */}

            {/* <li className="nav-item">
              <a className="nav-link" href={`/contact/`}>
                Contact
              </a>
              <Link to={`/contact/`}>Contact</Link>
            </li> */}
            <NavLink
              to={`/contact/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Contact
            </NavLink>

            <NavLink
              to={`/login/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Login
            </NavLink>

            <NavLink
              to={`/register/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Register
            </NavLink>

            

            {/* <li className="nav-item">
              <a className="nav-link" href="./Pages/logIn.html">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Pages/register.html">
                Register
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* <RefactoredApp /> */}
      <Outlet />
    </>
  );
}