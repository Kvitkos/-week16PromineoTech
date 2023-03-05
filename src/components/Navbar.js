import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/'>
                    Dogg Days
                </Link>
                <button 
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                <span className='navbar-toggler-icon' />
                </button>
                <div className='collape navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact to='/members' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Members
                            </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink exact to='/members/iggy' className="dropdown-item">Iggy</NavLink>
                                <NavLink exact to='/members/bonnie' className="dropdown-item">Bonnie</NavLink>
                                <NavLink exact to='/members/buster' className="dropdown-item">Buster</NavLink>
                                <NavLink exact to='/members/oswald' className="dropdown-item">Oswald</NavLink>
                                <NavLink exact to='/members/ella' className="dropdown-item">Ella</NavLink>
                                <NavLink exact to='/members/pickles' className="dropdown-item">Pickles</NavLink>
                                <NavLink exact to='/read' className="dropdown-item">Coming Soon</NavLink>
                                </div>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/create' className='nav-link'>Enroll</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
