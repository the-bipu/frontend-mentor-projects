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

                    <div className="con1-div2-2-1 con1-iDiv-1">
                        <input type="text" name="fname" placeholder="First Name" className="con2-Input" />
                        <div className="warningDiv w-1">First Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-2">
                        <input type="text" name="lname" placeholder="Last Name" className="con2-Input" />
                        <div className="warningDiv w-2">Last Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-3">
                        <input type="text" name="email" placeholder="Email Address" className="con2-Input" />
                        <div className="warningDiv w-3">Looks like this is not an email</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-4">
                        <input type="text" name="password" placeholder="Password" className="con2-Input" />
                        <div className="warningDiv w-4">Password cannot be empty</div>
                    </div>

                    <button type="submit">Claim your free trial</button>
                    <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </div>

            </div>
        </div>
    )
}