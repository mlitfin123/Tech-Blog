import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('articles');
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
                setActivePage('articles');
            break;
    }
}, [location.pathname]);
    return (
        <footer>
            <br></br>
            <br></br>
            <div class="nav justify-content-center">
                <Link id="navFoot" onClick={() => setActivePage('articles')} className={activePage === 'articles' ? 'nav-link active' : 'nav-link'} to="/">Articles</Link>
                <Link id="navFoot" onClick={() => setActivePage('products')} className={activePage === 'products' ? 'nav-link active' : 'nav-link'} to="/products">Products</Link>
                <Link id="navFoot" onClick={() => setActivePage('about')} className={activePage === 'services' ? 'nav-link active' : 'nav-link'} to="/services">Services</Link>
                <Link id="navFoot" onClick={() => setActivePage('about')} className={activePage === 'mission' ? 'nav-link active' : 'nav-link'} to="/mission">Mission</Link>
                <Link id="navFoot" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
            </div>
            <div className="footer-content">
                <p>Copyright � 2020 <b>Fit-To-Tech (FTT) Technologies, LLC</b>&nbsp;&nbsp; All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer