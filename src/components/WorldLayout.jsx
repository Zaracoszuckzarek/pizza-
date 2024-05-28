import { NavLink, Outlet } from "react-router-dom"
import "./worldlayout.css"


const WorldLayout = () => {
  return (
    <div className="world-header-elements">
        <nav className="world-nav">
            <NavLink to = "/world" className={({ isActive })=> isActive ? "worldlinks" : null } end>Dashboard</NavLink>
            <NavLink to = "/world/details" className={({ isActive }) => isActive ? "worldlinks" : null}>Details</NavLink>
            <NavLink to = "/world/reviews" className={({ isActive }) => isActive ? "worldlinks" : null}>Reviews</NavLink>
            <NavLink to = "/world/kiss" className={({ isActive }) => isActive ? "worldlinks" : null}>Kiss</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default WorldLayout