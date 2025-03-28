import React, {useState} from "react";
import { Link } from "react-scroll";
import './index.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-2">
            <div class="container">
                <Link class="navbar-brand curser-pointer" to="banner" smooth={true} duration={100} activeClass="active">Phongsakorn</Link>
                <button class="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav text-end">
                        <li class="nav-item">
                            <Link className="nav-link curser-pointer" to="banner" smooth={true} duration={100} activeClass="active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link curser-pointer" to="About" smooth={true} duration={100} activeClass="active">About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link curser-pointer" to="Education" smooth={true} duration={100} activeClass="active">Education</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link curser-pointer" to="Work" smooth={true} duration={100} activeClass="active">Work Experience</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar