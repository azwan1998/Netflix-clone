import React from 'react'
import './navbar.scss';
import { ArrowDropDown, Search, Notifications } from '@material-ui/icons';
import { useState } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false:true);
        return () => (window.onscroll = null);
    }
    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <span>Homepage</span>
                <span>Movies</span>
                <span>Series</span>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <Search className='icon-right'/>
                <span>KID</span>
                <Notifications className='icon-right'/>
                <img src="https://images4.alphacoders.com/127/thumb-1920-1273867.jpg" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon-right'/>
                    <div className="option">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar