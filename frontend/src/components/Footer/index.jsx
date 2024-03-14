import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <p>© 2024 Your Company. All rights reserved.</p>
            </div>
            <div className="contact-info">
                <a href="https://github.com/kutun0901" target="_blank" rel="noreferrer">
                    <i className="contact_us_github_icon fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/tuan-tran-163853117" target="_blank" rel="noreferrer">
                    <i className="contact_us_linkedin_icon fa-brands fa-linkedin" />
                </a>
            </div>
        </div>
    )
}

export default Footer;
