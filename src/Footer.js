import React from 'react';
import './css/Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__info">
                <h2 className="footer__header">Running out of products?</h2>
                <p className="footer__text">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <button className="footer__button">Buy now</button>
            </div>
            <div className="footer__info">
                <h2 className="footer__header">Bod<span>•</span>e Trainer in your pocket</h2>
                <p className="footer__text">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <button className="footer__button"><i className="fab fa-apple"></i>iOS</button>
                <button className="footer__button"><i className="fab fa-android"></i>Android</button>
            </div>
            <div className="footer__info">
                <h2 className="footer__header">Frequently Asked Questions</h2>
                <p className="footer__text">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <button className="footer__button">Read FAQs</button>
            </div>
        </div>
    </footer>
)

export default Footer;