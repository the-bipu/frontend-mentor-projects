import React from "react"
import Attribution from "./Attribution"

export default function Main() {

    const [email, setEmail] = React.useState("");
    const [isValidEmail, setIsValidEmail] = React.useState(true);

    const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (newEmail.match(mailRegex)) {
        setIsValidEmail(true);
        } else {
        setIsValidEmail(false);
        }
    };

    return (
        <div className="main--Div" role="main">
            <img src="./images/logo.svg" class="logo--Img" alt="ping logo" />

            <p class="heading--Div">We are launching <span class="extra--Heading">soon!</span></p>

            <p class="text--Div">Subscribe and get notified</p>

            <div className={`search--Div ${isValidEmail ? "" : "invalid-email"}`}>
                <input 
                    value={email}
                    type="email" 
                    placeholder="Your email address..." 
                    className={`search--Input ${!isValidEmail ? "invalid" : ""}`}
                    onChange={handleEmailChange}
                    required />

                <div class="mobile-warning">
                    {!isValidEmail && (<p className="error-msg">Please provide a valid email address</p>)}
                </div>

                <button class="notify--Button">Notify Me</button>
                
                <div class="desktop-warning">
                    {!isValidEmail && (<p className="error-msg">Please provide a valid email address</p>)}
                </div>
            </div>

            <img src="./images/illustration-dashboard.png" class="main--Img" alt="Illustarion Desktop Image" />

            <div class="icons--Div">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>

            <p class="footer-Div" role="contentinfo">&copy; Copyright Ping. All rights reserved.</p>

            <Attribution />
        </div>
    )
}