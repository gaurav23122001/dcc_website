import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-light.png'
import menu from './hamburger.svg'

import './navbar.css'

export const Navbar = ({ page, setPage }) => {

    useEffect(() => {
        console.log(page)
    })

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt='' />
                    Developers & Coders Club
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <img scr={menu} alt='' />
                    </span>

                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link onClick={() => setPage('home')} class={page === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class={page === 'cpHub' ? 'nav-link active' : 'nav-link'} target='_blank' href="http://cphub.dccnita.tech">CP Hub</a>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setPage('events')} class={page === 'events' ? 'nav-link active' : 'nav-link'} to="/events">Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setPage('timeline')} class={page === 'timeline' ? 'nav-link active' : 'nav-link'} to="/timeline">Timeline</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setPage('about')} class={page === 'about' ? 'nav-link active' : 'nav-link'} to="/teams">Teams</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};