import React, { useContext } from 'react';
import Context from './context'

function Footer() {
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-links">
                    <div>
                        <img src="tt.png" alt="tt-logo"/>
                    </div>
                    <div className="sosial-networks">
                        <img src="fb.png" alt="fb-logo"/>
                        <img src="inst.png" alt="inst-logo"/>
                    </div>
                </div>
                <div className="footer-contacts">
                    <div className="left-contacts">
                        <h2>MENU</h2>
                        <div>
                        <ul>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Design Your Own Gift</li>
                            <li>Press</li>
                            <li>Contact</li>
                        </ul>
                        <ul>
                            <li>571-347-7582</li>
                            <li>FAQ</li>
                            <li>Corporate</li>
                            <li>Wedding Pros</li>
                            <li>Login</li>
                        </ul>
                        </div>
                    </div>
                    <div className="right-contacts">
                        <h2>&nbsp;&nbsp;JOIN</h2>
                        <div>
                            <a>Sign up to receive 10% off your first order, plus weekly gifting inspiration.</a>
                            <form className="form">
                                <input placeholder="Email address" type="email" className="inputField"/>
                                <button type="submit" className="submit-btn">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="rights">
                    <div>
                        <a>© 2021 Flomater.shaue. All rights reserved.</a>
                    </div>
                    <div>
                        <a>Made without ♥ by iDisbalance.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;