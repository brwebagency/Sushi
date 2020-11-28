import React from "react";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="our_services">
                <h3>Our services</h3>
                <ul className="regular">
                    <li>Pricing</li>
                    <li>Tracking</li>
                    <li>Our menu</li>
                    <li>Terms of services</li>
                </ul>
            </div>

            <div className="our_company">
                <h3>Our company</h3>
                <ul className="regular">
                    <li>Orders</li>
                    <li>Get in Touch</li>
                    <li>Management</li>
                </ul>
            </div>
            
            <div className="address">
                <h3>Address</h3>
                <ul className="non-regular">
                    <li>121 King St,</li>
                    <li>VIC3000, US</li>
                </ul>
                <ul className="non-regular">
                    <li>888-123-42278</li>
                    <li>info@example.com</li>
                </ul>
            </div>
        </footer>
    )
}