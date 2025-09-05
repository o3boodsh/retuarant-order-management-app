import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "../../Context/order-context";

const HeaderCustomer = () => {
    let navigate = useNavigate();
    let orderContext = useContext(OrderContext);

    const itemsCount = orderContext.order ? orderContext.order.getItemsCount() : 0;

    let openContactHandler = () => { }
    let openAboutHandler = () => { }
    let openFeedbackHandler = () => { }

    let logoutHandler = () => {
        navigate('/customer-login', { replace: true });
    }

    let openCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <Fragment>
            <div className="header-customer">
                <div className="logo">
                    <i className="fas fa-utensils logo-icon"></i>
                    <h1>Gourmet Delight</h1>
                </div>

                <div className="header-buttons">
                    <div className="header-btn contact" onClick={openContactHandler}>
                        <i className="fas fa-envelope"></i>
                        <span className="btn-tooltip">Contact Us</span>
                    </div>
                    <div className="header-btn about" onClick={openAboutHandler}>
                        <i className="fas fa-info-circle"></i>
                        <span className="btn-tooltip">About Us</span>
                    </div>
                    <div className="header-btn feedback" onClick={openFeedbackHandler}>
                        <i className="fas fa-comment-dots"></i>
                        <span className="btn-tooltip">Feedback</span>
                    </div>
                    <div className="header-btn logout" onClick={logoutHandler}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="btn-tooltip">Logout</span>
                    </div>
                    <div className="header-btn" id="cart-btn" onClick={openCheckoutHandler}>
                        <i className="fas fa-shopping-cart"></i>
                        <div className="cart-count" id="cart-count">{itemsCount}</div>
                        <span className="btn-tooltip">View Cart</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderCustomer;