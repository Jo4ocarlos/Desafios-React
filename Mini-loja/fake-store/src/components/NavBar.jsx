import { NavLink } from "react-router-dom"
import './NavBar.css'
const NavBar = ()=>{

    return(
        <nav className="navbar-header">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">about</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar