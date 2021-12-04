import React from 'react'
import './Navbar.css'
import { links } from '../subcomponent/nav-data'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const nav_show = () => {
        document.getElementById("nav-menu").classList.toggle("show")
    }
    window.onClick = (event) => {
        if (!event.target.matches('#nav-show')) {
          var dropdowns = document.getElementsByClassName("nav-menu")
          var i
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show')
            }
          }
        }
    }
    const click_m = () => {
        document.getElementById('nav-menu').classList.remove("show")
    }
    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="rep">
                    <Link to="/">
                        <div className="logo">
                            <h3>MyProfile</h3>
                        </div>
                    </Link>
                    <i id="nav-show" class="fas fa-list" onClick={nav_show}></i>
                </div>
                <ul className="nav-menu" id="nav-menu">

                    {links.map((link) => {
                        return (
                            <li><NavLink to={link.url} key={link.id} className="nav-item" onClick={click_m}>{link.text}</NavLink></li>
                        )
                    })}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
