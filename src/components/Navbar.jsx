import React, { Component } from 'react'

import {FaStream} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import home from '../images/home.png'

export default class Navbar extends Component {
    state={
        isOpen:false
    }

    handleToggle = ()=>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="header-link">
                            <div className="nav-head">
                                <img src={home} alt="home"/>
                                <span>HOME & AWAY</span>
                            </div>
                        </Link>

                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaStream className="nav-icon"/>
                        </button>
                    </div>

                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Explore</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
