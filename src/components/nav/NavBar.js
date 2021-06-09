import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

/*The <Link/> and the <Route/> JSX elements are complementary to each other. 
If you add a new Link element in your application with a new URL, then you 
must create a matching Route element.*/

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels Home</Link>    
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
        </ul>
    )
}