import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className="navbar-brand" >MLC</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/beerpong">Beer Pong </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/flipcup">Flip Cup</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/beersbee">Beersbee</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;