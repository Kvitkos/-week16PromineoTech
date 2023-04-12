import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/'>
                    Vitkos National
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
                                <NavLink exact to='/members/Tiger Woods' className="dropdown-item">Tiger Woods</NavLink>
                                <NavLink exact to='/members/Justin Thomas' className="dropdown-item">Justin Thomas</NavLink>
                                <NavLink exact to='/members/Fred Couples' className="dropdown-item">Fred Couples</NavLink>
                                <NavLink exact to='/members/Brooks Keopka' className="dropdown-item">Brooks Keopka</NavLink>
                                <NavLink exact to='/members/Jordan Spieth' className="dropdown-item">Jordan Spieth</NavLink>
                                <NavLink exact to='/members/Jon Rahm' className="dropdown-item">Jon Rahm</NavLink>
                                <NavLink exact to='/read' className="dropdown-item">Waiting List</NavLink>
                                </div>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/create' className='nav-link'>Apply for Membership</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
