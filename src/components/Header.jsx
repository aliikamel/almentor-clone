import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Fab } from "@mui/material";

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-left-container">
                    <img id="header-img" src="https://www.altdaq.com/logos/social_media/limage-12716-366-photo.png" alt="hello" />
                    <div className="header-left-container-nav-div">
                        <nav className="header-left-container-navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="dropdown-toggle" href="">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a href="">Instructors</a>
                                </li>
                                <li>
                                    <button className="btn btn-outline">Subscribe</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="navbar-spacer">
                </div>
                <div className="navbar-search-container">
                    <input className="navbar-search" type="text" placeholder="Search courses, topics, instructors..." />
                    <div className="search-icon-container">
                        <SearchIcon id="search-icon" />
                    </div>
                </div>
                <div className="vertical-spacer">
                </div>
                <div className="right-header-container">
                    <Fab size="small" id="language-fab"/>
                    <Fab size="small" id="theme-fab"/>
                    <a className="login" href="">Login</a>
                    <button className="btn red-btn">Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header