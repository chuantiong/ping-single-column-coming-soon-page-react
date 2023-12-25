import pingLogo from "../assets/logo.svg";

const Hero = () => {
    return (
        <div className="hero container">
            <img className="hero__logo" src={pingLogo} alt="Ping logo" />
            <h1 className="hero__title">We are launching <span>soon!</span></h1>
            <span className="hero__description">Subscribe and get notified</span>
            <form className="subscribe">
                <div className="subscribe__input-wrapper">
                    <input
                        className="subscribe__email-input" type="email"
                        placeholder="Your email address..."
                    />
                    <span className="subscribe__error-message">Please provide a valid email address</span>
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