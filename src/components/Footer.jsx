import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__icons-wrapper">
                <a className="footer__icon" href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="footer__icon" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="footer__icon" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <span className="footer__text">&copy; Copyright Ping. All rights reserved.</span>
        </footer>
    )
};

export default Footer;