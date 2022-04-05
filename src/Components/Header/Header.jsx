/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <section>
            <header className="header-container">
                <h2 className="logo">
                    <a href="#">
                        <img src="./images/logo.svg" alt="Tesla" />
                    </a>
                </h2>

                <nav className="center-nav">
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </nav>

                <nav className="right-nav">
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#" onClick={() => setMenuStatus(!menuStatus)}>Menu</a>
                </nav>
            </header>
            <nav className={menuStatus ? "hidden-nav show" : "hidden-nav"}>
                <button className="close-button" onClick={() => setMenuStatus(!menuStatus)}>
                    <span class="material-icons">
                        &#xe5cd;
                    </span>
                </button>
                <a href=""><span>Existing Inventory</span></a>
                <a href=""><span>Used Inventory</span></a>
                <a href=""><span>Trade-In</span></a>
                <a href=""><span>Test Drive</span></a>
                <a href=""><span>Cybertruck</span></a>
                <a href=""><span>Roadster</span></a>
                <a href=""><span>Semi</span></a>
                <a href=""><span>Charging</span></a>
                <a href=""><span>Powerwall</span></a>
                <a href=""><span>Commercial Energy</span></a>
                <a href=""><span>Utilities</span></a>
                <a href=""><span>Find Us</span></a>
                <a href=""><span>Support</span></a>
                <a href=""><span>Invenstor Relations</span></a>
            </nav>
        </section>
    );
};

export default Header;