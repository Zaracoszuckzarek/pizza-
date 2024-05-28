import { Link, NavLink } from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header className="main--header">
  <Link to="/">Hammerman</Link>
<nav className="main-header-nav">
        <NavLink to="/" className={({isActive})=> isActive ? "active-links": null}>Home</NavLink>
        <NavLink to="/pizzas" className={({isActive})=> isActive ? "active-links" : null}>Pizzas</NavLink>
        <Link to="/world" className={({isActive})=> isActive ? "active-links" : null}>world</Link>
        <NavLink to="/about" className={({isActive})=> isActive ? "active-links" : null}>About</NavLink>
        <NavLink to="/login" className={({isActive})=> isActive ? "active-links" : null}>Login</NavLink>
        </nav>
    </header>
  )
}

export default Header