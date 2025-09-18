const Footer = (props) => {
    return (
        <div className="social-login-customer">
            <div className="social-divider-customer">
                <span>{props.title}</span>
            </div>
            <div className="social-buttons-customer">
                <button type="button" className="btn-social-customer btn-facebook-customer">
                    <i className="fab fa-facebook-f"></i>Facebook
                </button>
                <button type="button" className="btn-social-customer btn-instagram-customer">
                    <i className="fab fa-instagram"></i>Instagram
                </button>
            </div>
        </div>
    );
}

export default Footer;