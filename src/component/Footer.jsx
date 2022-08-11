import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm" style={{minHeight: "300px"}}>
                <div className="container text-white">
                    <div className='d-flex w-100 justify-content-between flex-wrap'>
                        <div className='footer-group' style={{width: "200px"}}>
                            <h2 className='display-5'>Company</h2>
                            <div>
                                <ul className='marco-navbar-nav'>
                                    <li className=''><NavLink className="marco-nav-link" to="/">About us </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Our Services </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Privacy Policy </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Affiliate Program </NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-group' style={{width: "200px"}}>
                            <h2 className='display-5'>Get Help</h2>
                            <div>
                                <ul className='marco-navbar-nav footer-nav'>
                                    <li className=''><NavLink className="marco-nav-link" to="/">FAQ </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Shipping </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Returns </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Order Status </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Payment Options </NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-group' style={{width: "200px"}}>
                            <h2 className='display-5'>Online Shop</h2>
                            <div>
                                <ul className='marco-navbar-nav'>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Watch </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Bag </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Shoes </NavLink></li>
                                    <li className=''><NavLink className="marco-nav-link" to="/">Dress </NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-group' style={{width: "200px"}}>
                            <h2 className='display-5'>Follow Us</h2>
                            <div>
                                <ul className='marco-navbar-nav' style={{flexDirection: "row"}}>
                                    <li className=''><a className="marco-nav-link" href="/"><i className="fa fa-facebook me-4"  style={{fontSize: "20px"}}> </i> </a></li>
                                    <li className=''><a className="marco-nav-link" href="https://www.instagram.com/marcagbeti/"><i className="fa fa-instagram me-4" style={{fontSize: "20px"}}> </i> </a></li>
                                    <li className=''><a className="marco-nav-link" href="/"><i className="fa fa-twitter me-4" style={{fontSize: "20px"}}> </i> </a></li>
                                    <li className=''><a className="marco-nav-link" href="https://www.linkedin.com/in/merveilles-agbeti-messan-3bb03b1ba/"><i className="fa fa-linkedin me-4" style={{fontSize: "20px"}}> </i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Footer;