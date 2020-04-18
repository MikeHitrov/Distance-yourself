import React, { useCallback } from 'react';
import "./Home.css";

const Home = () => {
    const token = localStorage.getItem("jwt");

    const handleLogout = useCallback(async e => {
        e.preventDefault();

        localStorage.removeItem("jwt")
        window.location.replace("/")
    })

    var userMenu;
    if (!token) {
        userMenu = <>
            <li class="nav-item">
                <a class="nav-link text-dark float-right" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="/register">Register</a>
            </li>
        </>
    } else {
        userMenu = <li class="nav-item">
            <a class="nav-link text-dark float-right" href="/" onClick={handleLogout}>Logout</a>
        </li>
    }

    var main;
    if (!token) {
        main = <div class="container back">
            <div class="text-center vertical-center back">
                <h1 class="display-2">Welcome to Distance yourself</h1>
                <h3 class="display-4">If you want to be safe from coronavirus you are in the right place.</h3>
            </div>
        </div>
    } else {
        main = <>

        </>
    }

    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div class="container">
                        <a class="navbar-brand" href="/"> Distance yourself</a>
                        <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            <ul class="navbar-nav flex-grow-1">
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="/">Home</a>
                                </li>
                                {userMenu}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {main}

            <footer class="border-top footer text-muted">
                <div class="container">
                    &copy; 2020 - Distance yourself
                </div>
            </footer>
        </div>
    )
}

export default Home;