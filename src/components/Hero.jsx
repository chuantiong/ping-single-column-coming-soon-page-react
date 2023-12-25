import React, { useState } from 'react';
import pingLogo from "../assets/logo.svg";

const Hero = () => {
    const [emailInput, setEmailInput] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value)
        setIsValidEmail(emailInput.match(emailRegex));
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
    };

    return (
        <div className="hero container">
            <img className="hero__logo" src={pingLogo} alt="Ping logo" />
            <h1 className="hero__title">We are launching <span>soon!</span></h1>
            <span className="hero__description">Subscribe and get notified</span>
            <form className="subscribe" onSubmit={handleSubscribe}>
                <div className="subscribe__input-wrapper">
                    <input
                        className="subscribe__email-input" 
                        type="text"
                        placeholder="Your email address..."
                        onChange={handleEmailInput}
                        style={{
                            outline: isValidEmail ? "none" : "1px solid #ff5263",
                            border: isValidEmail ? "1px solid #c2d3ff" : "none"
                        }}
                    />
                    <span 
                        className="subscribe__error-message"
                        style={{
                            display: isValidEmail ? "none" : "block"
                        }}
                        >
                        Please provide a valid email address
                    </span>
                </div>
                <button 
                    className="subscribe__button" 
                    type="submit"
                >
                    Notify Me
                </button>
            </form>
        </div>
    )
};

export default Hero;