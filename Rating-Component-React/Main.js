import React from "react"

export default function Main() {

    const [isActive, setIsActive] = React.useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
        
    const [activeStar1, setActiveStar1] = React.useState(false);
    const [activeStar2, setActiveStar2] = React.useState(false);
    const [activeStar3, setActiveStar3] = React.useState(false);
    const [activeStar4, setActiveStar4] = React.useState(false);
    const [activeStar5, setActiveStar5] = React.useState(false);

    const [stars, setStars] = React.useState(0);

    const totalStars = star => () => {
        setStars(star)

        if (star === "1") {
            setActiveStar1(current => !current);
        } else if ( star === "2" ) {
            setActiveStar2(current => !current);
        } else if ( star === "3" ) {
            setActiveStar3(current => !current);
        } else if ( star === "4" ) {
            setActiveStar4(current => !current);
        } else if ( star === "5" ) {
            setActiveStar5(current => !current);
        }
    };

    return (

    <div className="main-div">
        {/* Rating state start */}

        <div className="container1">

            <div className="con1-div1">
                <div className="miniBox">
                <img src="./images/icon-star.svg" alt="" />
                </div>
            </div>

            <div className="con1-div2">
                <h2>How did we do?</h2>
            </div>

            <div className="con1-div3">
                <p>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
            </div>

            <div className="con1-div4">
                <button className={activeStar1 ? "miniBox activeMiniBox" : "miniBox"} value="1" onClick={totalStars('1')}>1</button>
                <button className={activeStar2 ? "miniBox activeMiniBox" : "miniBox"} value="2" onClick={totalStars('2')}>2</button>
                <button className={activeStar3 ? "miniBox activeMiniBox" : "miniBox"} value="3" onClick={totalStars('3')}>3</button>
                <button className={activeStar4 ? "miniBox activeMiniBox" : "miniBox"} value="4" onClick={totalStars('4')}>4</button>
                <button className={activeStar5 ? "miniBox activeMiniBox" : "miniBox"} value="5" onClick={totalStars('5')}>5</button>
            </div>

            <div className="con1-div5">
                <button type="submit" className="submit_button" id="submit" onClick={handleClick}>Submit</button>
            </div>

        </div>

        {/* Rating state end */}

        {/* Thank you state start */}

        <div className={isActive ? "container2 activeContainer2" : "container2"}>

            <div className="con2-div1">
                <img src="./images/illustration-thank-you.svg" alt="" />
            </div>

            <div className="con2-div2">
                <div className="con2-div2-1">
                    You selected {stars} out of 5
                </div>
            </div>

            <div className="con2-div3">
                Thank you!
            </div>

            <div className="con2-div4">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </div>

        </div>

        {/* Thank you state end */}
        
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">The-Bipu</a>.
        </div>

    </div>
    )
}