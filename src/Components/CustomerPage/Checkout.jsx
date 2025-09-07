import { useNavigate } from "react-router-dom";
import RestuarantContext from "../../Context/restuarant-context";
import { useContext, useState } from "react";

// في Checkout.js
const Checkout = () => {
    const navigate = useNavigate();
    const [tableNumber, setTableNumber] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const restuarantContext = useContext(RestuarantContext);

    const onClickBackHandler = () => {
        navigate('/customer');
    }

    const processPayment = () => { }

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

    // // وظيفة زيادة ونقصان الكمية
    // const handleQuantityChange = (itemId, change) => {
    //     const updatedItems = restuarantContext.orderItems.map(item => {
    //         if (item.id === itemId) {
    //             const newQuantity = item.quantity + change;
    //             if (newQuantity <= 0) {
    //                 return null; // احذف العنصر إذا كانت الكمية 0
    //             }
    //             return { ...item, quantity: newQuantity };
    //         }
    //         return item;
    //     }).filter(item => item !== null);

    //     // هنا تحتاج لتحديث الـ context (سنضيفها لاحقاً)
    // };

    // // وظيفة حذف العنصر
    // const handleRemoveItem = (itemId) => {
    //     const updatedItems = restuarantContext.orderItems.filter(item => item.id !== itemId);
    //     // هنا تحتاج لتحديث الـ context
    // };

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
                                        value={tableNumber}
                                        onChange={(e) => setTableNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Card Number</label>
                                    <input type="text" className="form-input" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Expiry Date</label>
                                        <input type="text" className="form-input" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-input" placeholder="123" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Cardholder Name</label>
                                    <input type="text" className="form-input" placeholder="John Doe" />
                                </div>
                                <button
                                    type="button"
                                    className="pay-btn"
                                    onClick={processPayment}
                                    disabled={isProcessing}
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
