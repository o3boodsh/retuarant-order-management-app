import { useNavigate } from "react-router-dom";
import RestuarantContext from "../../Context/restuarant-context";
import { useContext, useRef, useState } from "react";
import Order from "../../Model/Order";
import Swal from "sweetalert2";

// في Checkout.js
const Checkout = () => {
    let tableNumberRef = useRef();
    let cardRef = useRef();
    let expiryDateRef = useRef();
    let cvvRef = useRef();
    let cardholderRef = useRef();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const restuarantContext = useContext(RestuarantContext);
    let FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";
    let order = new Order();

    let onSubmitHandler = async (event) => {
        event.preventDefault();
        order.setItems(restuarantContext.orderItems);
        order.setTableNumber(tableNumberRef.current.value);
        order.setName(cardholderRef.current.value);
        order.setSubtotal(subtotal);
        order.setTax(tax);
        order.setFinalTotal(finalTotal);
        restuarantContext.putOrder(order);
        console.log();
        Swal.fire({
            title: 'successfully',
            text: 'The request has been submitted successfully.',
            icon: 'success',
            showCancelButton: true,
            showConfirmButton: true,
            timer: 5000,
        }).then((result) => {
            if (result.isConfirmed) {
                order = restuarantContext.order;
                saveItemsOnFirebase(order);
            }
        }).catch((error) => {
            alert('error:' + error);
        });
    }

    // let saveItemsOnFirebase = async (newOrder) => {
    //     fetch(`${FIREBASE_DB_URL}/orders.json`,
    //         {
    //             method: "POST",
    //             body: JSON.stringify(newOrder),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     ).then((response) => {
    //         return response.json();
    //     }).then((result) => {
    //         return result;
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

    const saveItemsOnFirebase = async (newOrder) => {
        try {
            const response = await fetch(`${FIREBASE_DB_URL}/orders.json`, {
                method: "POST",
                body: JSON.stringify(newOrder),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Failed to save order:", error);
            throw error;
        }
    };


    const onClickBackHandler = () => {
        navigate('/customer');
    }

    // في Checkout.js
    const handleQuantityChange = (itemId, change) => {
        const item = restuarantContext.orderItems.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + change;
            if (newQuantity > 0) {
                restuarantContext.updateItemQuantity(itemId, newQuantity);
            } else {
                restuarantContext.removeItem(itemId);
            }
        }
    };

    const handleRemoveItem = (itemId) => {
        restuarantContext.removeItem(itemId);
    };

    // حساب المجاميع
    const subtotal = restuarantContext.orderItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const tax = subtotal * 0.10;
    const finalTotal = subtotal + tax;

    return (
        <div className="checkout-container">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h2 className="checkout-title">Checkout</h2>
                    <button className="back-to-menu" onClick={onClickBackHandler}>
                        <i className="fas fa-arrow-left"></i> Back to Menu
                    </button>
                </div>
                <div className="checkout-content">
                    <div className="order-summary">
                        <h3 className="section-title">Your Order</h3>

                        {restuarantContext.orderItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <img src={item.image} alt={item.name} className="item-img" />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>${item.price}</p>
                                        {item.specialInstructions && (
                                            <p className="special-instructions">{item.specialInstructions}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="item-quantity">
                                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, -1)}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, 1)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}

                        <div className="total-line">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-line">
                            <span>Tax (10%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="grand-total">
                            <span>Total:</span>
                            <span>${finalTotal.toFixed(2)}</span>
                        </div>

                        <div className="payment-section">
                            <h3 className="section-title">Payment Details</h3>
                            <form className="payment-form">
                                <div className="form-group">
                                    <label className="form-label">Table Number</label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        placeholder="Enter your table number"
                                        ref={tableNumberRef}
                                        min={0}
                                        max={100}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Card Number</label>
                                    <input type="number" className="form-input" placeholder="1-100" ref={cardRef} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Expiry Date</label>
                                        <input type="text" className="form-input" placeholder="MM/YY" ref={expiryDateRef} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-input" placeholder="123" ref={cvvRef} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Cardholder Name</label>
                                    <input type="text" className="form-input" placeholder="John Doe" ref={cardholderRef} />
                                </div>
                                <button
                                    type="button"
                                    className="pay-btn"
                                    disabled={isProcessing}
                                    onClick={onSubmitHandler}
                                >
                                    {isProcessing ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i> Processing...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-lock"></i> Pay Now
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
