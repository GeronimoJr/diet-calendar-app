import React from 'react';
import './css/Header.css';

const Header = ({ user }) => (
    <header className="header">
        <div className="container header__container">
            <nav className="header__nav">
                <ul className="header__navList">
                    <li>Dashboard</li>
                    <li>Recipes</li>
                    <li>Challenge</li>
                </ul>
            </nav>
            <div className="header__userPanel">
                <img className="header__userImg" src={user.profilePicture} alt='user' />
                <p className="header__userName">{user.firstName} {user.lastName}</p>
            </div>
        </div>
    </header>
)

export default Header;