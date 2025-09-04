import { Fragment, useState, useRef, useEffect } from "react";
import CartItem from "../Components/CustomerPage/CartItem";
import CustomerPageController from "../Controller/CustomerPageController";

const CustomerPage = () => {
    const customerController = new CustomerPageController();
    const [buttonsVisible, setButtonsVisible] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const menuToggleRef = useRef(null);
    const floatingButtonsRef = useRef(null);
    const cartBtnRef = useRef(null);
    const cartPanelRef = useRef(null);
    const closeCartBtnRef = useRef(null);
    const overlayRef = useRef(null);

    // تحميل البيانات عند فتح الصفحة
    useEffect(() => {
        customerController.fetchItemsMenu(setItems, setError, setLoading);
    }, []);

    useEffect(() => {
        const menuToggle = menuToggleRef.current;

        const handleClick = () => {
            setButtonsVisible(prev => !prev);
        };

        if (menuToggle) {
            menuToggle.addEventListener('click', handleClick);
        }

        return () => {
            if (menuToggle) {
                menuToggle.removeEventListener('click', handleClick);
            }
        };
    }, []);


    // عند الضغط على زر ال + ليحدث التاثير لمرة عليه
    useEffect(() => {
        customerController.handleButtonsVisibility(buttonsVisible, menuToggleRef, floatingButtonsRef);
    }, [buttonsVisible]);

    // عند فتح قائمة المشتريات من هنا يحدث التاثير 
    useEffect(() => {
        customerController.handleCartPanelVisibility(cartOpen, cartPanelRef, overlayRef, setButtonsVisible);
    }, [cartOpen]);

    useEffect(() => {
        customerController.updateCartTotals(cartItems);
    }, [cartItems]);

    const handleCartClick = () => {
        setCartOpen(true);
    };

    const handleCloseCart = () => {
        setCartOpen(false);
    };

    const handleOverlayClick = () => {
        setCartOpen(false);
    };

    const handleRetry = () => {
        customerController.retryFetch(setError, setLoading, setItems);
    };

    return (
        <Fragment>
            <div className="floating-cart-btn" id="cart-btn" ref={cartBtnRef} onClick={handleCartClick}>
                <i className="fas fa-shopping-cart"></i>
                <div className="cart-count" id="cart-count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</div>
            </div>
            <div className="floating-menu-toggle" id="menu-toggle" ref={menuToggleRef}>
                <i className="fas fa-plus"></i>
            </div>

            <div className="floating-buttons-container" id="floating-buttons" ref={floatingButtonsRef}>
                <div className="floating-btn contact" onClick={() => console.log("openContact")}>
                    <i className="fas fa-envelope"></i>
                    <span className="btn-tooltip">Contact Us</span>
                </div>
                <div className="floating-btn about" onClick={() => console.log("openAbout")}>
                    <i className="fas fa-info-circle"></i>
                    <span className="btn-tooltip">About Us</span>
                </div>
                <div className="floating-btn feedback" onClick={() => console.log("openFeedback")}>
                    <i className="fas fa-comment-dots"></i>
                    <span className="btn-tooltip">Feedback</span>
                </div>
                <div className="floating-btn logout" onClick={() => customerController.logout()}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="btn-tooltip">Logout</span>
                </div>
            </div>

            <div className="cart-panel" id="cart-panel" ref={cartPanelRef}>
                <div className="cart-header">
                    <h2 className="cart-title">Your Order</h2>
                    <button className="close-cart" id="close-cart" ref={closeCartBtnRef} onClick={handleCloseCart}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="cart-items" id="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <i className="fas fa-shopping-cart"></i>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item-card">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-price">${item.price}</p>
                                </div>
                                <div className="cart-item-controls">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => customerController.decreaseQuantity(item.id, setCartItems)}
                                    >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span className="quantity-display">{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => customerController.increaseQuantity(item.id, setCartItems)}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div className="cart-item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <button
                                    className="remove-item-btn"
                                    onClick={() => customerController.removeItem(item.id, setCartItems)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-total">
                    <div className="total-line">
                        <span>Subtotal:</span>
                        <span id="subtotal">$0.00</span>
                    </div>
                    <div className="total-line">
                        <span>Tax (10%):</span>
                        <span id="tax">$0.00</span>
                    </div>
                    <div className="total-line">
                        <strong>Total:</strong>
                        <strong id="total">$0.00</strong>
                    </div>

                    <input type="number" id="table-number" placeholder="Enter your table number" />

                    <button className="checkout-btn" onClick={() => console.log("Checkout")}>Checkout</button>
                </div>
            </div>

            <div className="overlay" id="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>

            <div className="container">
                <div className="header">
                    <h1>Our Delicious Menu</h1>
                    <p>Choose from our selection of premium dishes</p>
                </div>

                <div className="category-filter">
                    <button className="category-btn active" data-category="all">All Items</button>
                    <button className="category-btn" data-category="appetizers">Appetizers</button>
                    <button className="category-btn" data-category="mains">Main Courses</button>
                    <button className="category-btn" data-category="desserts">Desserts</button>
                    <button className="category-btn" data-category="drinks">Drinks</button>
                </div>

                {loading && (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading menu...</p>
                    </div>
                )}

                {error && (
                    <div className="error-container">
                        <i className="fas fa-exclamation-triangle"></i>
                        <h3>Oops!</h3>
                        <p>{error}</p>
                        <button onClick={handleRetry} className="retry-btn">
                            <i className="fas fa-redo"></i>
                            Try Again
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <div className="menu-content">
                        {items.length === 0 ? (
                            <div className="empty-menu">
                                <i className="fas fa-utensils"></i>
                                <h3>Menu is Empty</h3>
                                <p>There are no items in the menu at the moment</p>
                            </div>
                        ) : (
                            <div className="menu-grid">
                                {items.map((element) => (
                                    <CartItem
                                        key={element.id}
                                        id={element.id}
                                        name={element.name}
                                        image={element.image}
                                        description={element.description}
                                        price={element.price + '$'}
                                        category={element.category}
                                        onAddToCart={() => customerController.addToCart(element, setCartItems)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default CustomerPage;