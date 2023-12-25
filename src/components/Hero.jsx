import pingLogo from "../assets/logo.svg";

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero__logo" src={pingLogo} alt="Ping logo" />
            <h1 className="hero__title">We are launching <span>soon!</span></h1>
            <span className="hero__description">Subscribe and get notified</span>
            <form className="subscribe">
                <input type="subscribe__email" placeholder="Your email address..."/>
                <button className="subscribe__button" type="submit">Notify Me</button>
            </form>
        </div>
    )
};

export default Hero;