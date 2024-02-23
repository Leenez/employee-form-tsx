import React from "react"
import { Link } from "react-router-dom"

 
const Navbar: React.FC = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-center">
				<ul className="navbar-nav ">
					<li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                            <Link to="/admin">Send Forms</Link>
                        </a>
					</li>
					<li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                            <Link to="/received-forms">View Forms</Link>
                        </a>
					</li>
                </ul>
                </div>
        </nav>
    )
}

export default Navbar