import React from "react";
import Footer from "./Footer";

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
        <div class="main--div">
            <div class="content--div">

                <div class="logo--div">
                    <img src="./images/logo.svg" />
                </div>

                <div class="image--div-2">
                    <img src="./images/hero-mobile.jpg" />
                </div>

                <div class="heading--div">
                    <span>We're</span> <br /> coming soon
                </div>

                <div class="text--div">
                    <div class="text--div-2">Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.</div>
                </div>

                <div className={`signup--div ${isValidEmail ? "" : "invalid-email"}`}>
                    <div className="input--div">
                        <input
                            className={`email--input ${!isValidEmail ? "invalid" : ""}`}
                            type="email"
                            placeholder="Email Address"
                            id="email-id"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="image--div">
                        {!isValidEmail && (
                            <img
                                src="./images/icon-error.svg"
                                alt="Error Icon"
                                className="warning"
                                id="warning-icon"
                            />
                        )}
                    </div>

                    <div className={`button--div`}>
                        <button type="submit" className={`submit-button`}>
                            <img src="./images/icon-arrow.svg" alt="Submit" />
                        </button>
                    </div>

                </div>
                {!isValidEmail && (<p className="error-msg">Please Enter A Valid Email Id</p>)}

                <Footer />

            </div>

            <div class="image--div">
                
            </div>
        </div>
    )
}