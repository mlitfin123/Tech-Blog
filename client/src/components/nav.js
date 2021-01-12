import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('blog');
            break;
            case '/products':
                setActivePage('products');
            break;
            case '/services':
                setActivePage('services');
            break;
            case '/mission':
                setActivePage('mission');
            break;
            case '/contact':
                setActivePage('contact');
            break;
            default: 
                setActivePage('/');
            break;
    }
}, [location.pathname]);

return (
    <div>
    <Link id="navHead" onClick={() => setActivePage('blog')} className={activePage === 'blog' ? 'nav-link active' : 'nav-link'} to="/"><h2>Fit-To-Tech Technologies</h2></Link>
    <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('blog')} className={activePage === 'blog' ? 'nav-link active' : 'nav-link'} to="/">Articles</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('products')} className={activePage === 'products' ? 'nav-link active' : 'nav-link'} to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('services')} className={activePage === 'services' ? 'nav-link active' : 'nav-link'} to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('mission')} className={activePage === 'mission' ? 'nav-link active' : 'nav-link'} to="/mission">Mission</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
}

export default Nav;