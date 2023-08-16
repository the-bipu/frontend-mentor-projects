import React from "react";

export default function Main () {
    return (
        <div className="container">
            <div className="con1-div1">

                <p className="heading">Learn to code by watching others</p>
                <p className="about">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>

            </div>
            <div className="con1-div2">

                <div className="con1-div2-1">
                    <p className="plans">Try it free 7 days <span>then $20/mo. thereafter</span></p>
                </div>
                <div className="con1-div2-2">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Password" />

                    <button type="submit">Claim your free trial</button>
                    <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </div>

            </div>
        </div>
    )
}