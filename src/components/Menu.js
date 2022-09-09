import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='navbar nav-expand-md navbar-dark bg-secondary'>
        <div className='container'>
            <NavLink to={'/'} className="navbar-brand">Music Player</NavLink>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="menu">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to={'/music'} className="nav-link" >Music</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu