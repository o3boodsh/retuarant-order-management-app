import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
    const [buttonsVisible, setButtonsVisible] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const menuToggleRef = useRef(null);
    const floatingButtonsRef = useRef(null);
    const cartBtnRef = useRef(null);
    const cartPanelRef = useRef(null);
    const closeCartBtnRef = useRef(null);
    const overlayRef = useRef(null);
    let navigate = useNavigate();

    useEffect(() => {
        const menuToggle = menuToggleRef.current;
        const floatingButtons = floatingButtonsRef.current?.querySelectorAll('.floating-btn');

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

    useEffect(() => {
        const menuToggle = menuToggleRef.current;
        const floatingButtons = floatingButtonsRef.current?.querySelectorAll('.floating-btn');
        const contactButton = document.querySelector('.floating-btn.contact');

        if (menuToggle) {
            if (buttonsVisible) {
                menuToggle.classList.add('active');
            } else {
                menuToggle.classList.remove('active');
            }
        }

        if (floatingButtons) {
            floatingButtons.forEach(btn => {
                if (buttonsVisible) {
                    btn.classList.add('show');
                    if (contactButton) {
                        contactButton.classList.add('pulse');
                    }
                } else {
                    btn.classList.remove('show');
                    if (contactButton) {
                        contactButton.classList.remove('pulse');
                    }
                }
            });
        }
    }, [buttonsVisible]);

    useEffect(() => {
        const cartPanel = cartPanelRef.current;
        const overlay = overlayRef.current;

        if (cartPanel && overlay) {
            if (cartOpen) {
                cartPanel.classList.add('open');
                overlay.classList.add('open');
            } else {
                cartPanel.classList.remove('open');
                overlay.classList.remove('open');
            }
        }
    }, [cartOpen]);

    const handleCartClick = () => {
        setCartOpen(true);
    };

    const handleCloseCart = () => {
        setCartOpen(false);
    };

    const handleOverlayClick = () => {
        setCartOpen(false);
    };

    let logout = () => {
        navigate('/customer-login', { replace: true });
    }

    return (
        <Fragment>
            <div className="floating-cart-btn" id="cart-btn" ref={cartBtnRef} onClick={handleCartClick}>
                <i className="fas fa-shopping-cart"></i>
                <div className="cart-count" id="cart-count">0</div>
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
                <div className="floating-btn logout" onClick={logout}>
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
                    <div className="empty-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
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

                <div className="menu-grid">
                    <div className="card" data-category="mains">
                        <div className="card-image">
                            <img src="https://m7et.com/wp-content/uploads/2022/10/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D8%A8%D8%B1%D8%AC%D8%B1-3.jpg"
                                alt="Spicy Beef Burger" />
                            <div className="item-badge">Popular</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Spicy Beef Burger</h3>
                            <p className="card-description">A burger that shows what can result from thinking a little differently.
                                Choose high-quality lean meat and experiment with combinations of ingredients.</p>

                            <button className="dropdown-toggle">
                                Details <i className="fas fa-chevron-down"></i>
                            </button>

                            <div className="card-details">
                                <p>🔥 Spicy beef patty with jalapeños and special sauce</p>
                                <p>⏱ Preparation time: 15 minutes</p>
                                <p>🌶️ Spice level: Medium</p>
                            </div>

                            <div className="card-footer_1">
                                <div className="price">$12.99</div>
                                <button className="add-to-cart"
                                    onClick={() => console.log("addToCart", 1, 'Spicy Beef Burger', 12.99, 'https://m7et.com/wp-content/uploads/2022/10/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D8%A8%D8%B1%D8%AC%D8%B1-3.jpg')}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card" data-category="mains">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Margherita Pizza" />
                            <div className="item-badge">Vegetarian</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Margherita Pizza</h3>
                            <p className="card-description">Classic pizza with tomato sauce, fresh mozzarella, and basil. Simple yet
                                delicious combination that never disappoints.</p>

                            <button className="dropdown-toggle">
                                Details <i className="fas fa-chevron-down"></i>
                            </button>

                            <div className="card-details">
                                <p>🍅 Fresh tomatoes and basil</p>
                                <p>⏱ Preparation time: 20 minutes</p>
                                <p>🧀 Extra cheese option available</p>
                            </div>

                            <div className="card-footer_1">
                                <div className="price">$14.99</div>
                                <button className="add-to-cart"
                                    onClick={() => console.log("addToCart")}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card" data-category="appetizers">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Caesar Salad" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Caesar Salad</h3>
                            <p className="card-description">Fresh romaine lettuce with Caesar dressing, croutons, and parmesan
                                cheese. A classic starter that's both crisp and flavorful.</p>

                            <button className="dropdown-toggle">
                                Details <i className="fas fa-chevron-down"></i>
                            </button>

                            <div className="card-details">
                                <p>🥬 Fresh romaine lettuce</p>
                                <p>⏱ Preparation time: 10 minutes</p>
                                <p>🥓 Optional grilled chicken add-on</p>
                            </div>

                            <div className="card-footer_1">
                                <div className="price">$8.99</div>
                                <button className="add-to-cart"
                                    onClick={() => console.log("addToCart")}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card" data-category="desserts">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Chocolate Cake" />
                            <div className="item-badge">Best Seller</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Chocolate Cake</h3>
                            <p className="card-description">Rich and moist chocolate cake with chocolate frosting. The perfect
                                indulgence for chocolate lovers.</p>

                            <button className="dropdown-toggle">
                                Details <i className="fas fa-chevron-down"></i>
                            </button>

                            <div className="card-details">
                                <p>🍫 Rich chocolate flavor</p>
                                <p>⏱ Preparation time: 5 minutes</p>
                                <p>🍒 Optional cherry topping</p>
                            </div>

                            <div className="card-footer_1">
                                <div className="price">$6.99</div>
                                <button className="add-to-cart"
                                    onClick={() => console.log("addToCart")}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CustomerPage;