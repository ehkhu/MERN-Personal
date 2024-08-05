
// import Link from "next/link"
import { NavLink } from "react-router-dom"
export function MainNav({
  className,
  ...props
}) {
  return (
    
    <nav className="navbar" role="navigation" aria-label="dropdown navigation">
      
      <NavLink
        to="/dashboard"
        className="navbar-item"
      >
        Overviews
      </NavLink>
       
      <NavLink
        to="/users"
        className="navbar-item"
      >
        Users
      </NavLink>
    </nav>
  )
}
