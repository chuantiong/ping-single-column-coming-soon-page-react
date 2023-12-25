import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__icons-wrapper">
                <div className="footer__icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="footer__icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="footer__icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
            <span className="footer__text">&copy; Copyright Ping. All rights reserved.</span>
        </footer>
    )
};

export default Footer;