import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './NavigationBar.css';

const NavBar = () => {
   return (
       <Fragment>
           <header className="header">
            <nav>
            <div className="logo">
                <h1>Doctor's Care</h1>
            </div>
            <div className="menu">
                <ul className="nav__bar">
                    <li className="nav__bars">
                        <NavLink activeClassName="menu_active" exact className="navs"  to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="menu_active" className="navs" to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="menu_active" className="navs" to='/service' >Service</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="menu_active"  className="navs" to='/contacts'>Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="menu_active"  className="navs" to='/signup'>Sign up</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
           </header>
       </Fragment>
   );
};

export default NavBar;