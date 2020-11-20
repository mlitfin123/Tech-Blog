import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <span class="navbar-brand text-dark font-weight-bold" ><Link to={"./"}>Fit to Tech</Link></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <span  class="nav-link text-dark"><Link to={"./"}>Blog</Link></span>
                </li>
                <li class="nav-item">
                    <span class="nav-link text-dark"><Link to={"./about"}>About Me</Link></span>
                </li>
                <li class="nav-item">
                    <span class="nav-link text-dark"><Link to={"./contact"}>Contact</Link></span>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
    </nav>
    )
}

export default Nav;