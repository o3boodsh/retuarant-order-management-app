import { Fragment, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "../../Context/order-context";
import Order from "../../Model/Order";

const Checkout = () => {
    const navigate = useNavigate();
    const orderContext = useContext(OrderContext);
    const [tableNumber, setTableNumber] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    // الحصول على الطلب من Context
    const order = orderContext.order;

    useEffect(() => {
        // إذا لم يكن هناك طلب أو الطلب فارغ، العودة إلى القائمة
        if (!order || order.isEmpty()) {
            navigate('/customer');
        }
    }, [order, navigate]);

    const onClickBackHandler = () => {
        navigate('/customer');
    };

    const handleQuantityChange = (itemId, change, specialInstructions = '') => {
        if (!order) return;

        // إنشاء نسخة جديدة من الطلب لتجنب مشاكل المرجعية
        const newOrder = new Order(order.tableNumber, order.customerName);
        Object.assign(newOrder, order);
        
        const item = newOrder.items.find(item => 
            item.id === itemId && item.specialInstructions === specialInstructions
        );
        
        if (item) {
            const newQuantity = item.quantity + change;
            if (newQuantity > 0) {
                newOrder.updateItemQuantity(itemId, newQuantity, specialInstructions);
            } else {
                newOrder.removeItem(itemId, specialInstructions);
            }
            
            orderContext.setOrder(newOrder);
        }
    };

    const handleRemoveItem = (itemId, specialInstructions = '') => {
        if (!order) return;

        const newOrder = new Order(order.tableNumber, order.customerName);
        Object.assign(newOrder, order);
        newOrder.removeItem(itemId, specialInstructions);
        orderContext.setOrder(newOrder);
    };

    const processPayment = async () => {
        if (!tableNumber) {
            alert("Please enter your table number");
            return;
        }

        if (!order || order.isEmpty()) {
            alert("Your cart is empty");
            return;
        }

        setIsProcessing(true);
        try {
            // تحديث رقم الطاولة في الطلب
            const newOrder = new Order(order.tableNumber, order.customerName);
            Object.assign(newOrder, order);
            newOrder.setTableNumber(parseInt(tableNumber));
            
            // هنا يمكنك حفظ الطلب في Firebase أو قاعدة البيانات
            // await saveOrderToFirebase(newOrder);
            
            // مسح الطلب بعد الدفع الناجح
            orderContext.setOrder(new Order());
            
            alert('Payment processed successfully! Thank you for your order.');
            navigate('/customer');
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (!order || order.isEmpty()) {
        return (
            <div className="checkout-page">
                <div className="container">
                    <p>No active order. Redirecting...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
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
                        
                        {order.items.map((item) => (
                            <div key={`${item.id}-${item.specialInstructions}`} className="cart-item">
                                <div className="item-info">
                                    <img src={item.image} alt={item.name} className="item-img" />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>${item.price.toFixed(2)}</p>
                                        {item.specialInstructions && (
                                            <p className="special-instructions">{item.specialInstructions}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="item-quantity">
                                    <button 
                                        className="quantity-btn" 
                                        onClick={() => handleQuantityChange(item.id, -1, item.specialInstructions)}
                                    >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button 
                                        className="quantity-btn" 
                                        onClick={() => handleQuantityChange(item.id, 1, item.specialInstructions)}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                <button 
                                    className="remove-item-btn"
                                    onClick={() => handleRemoveItem(item.id, item.specialInstructions)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}

                        <div className="total-line">
                            <span>Subtotal:</span>
                            <span>${order.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-line">
                            <span>Tax (10%):</span>
                            <span>${order.tax.toFixed(2)}</span>
                        </div>
                        <div className="grand-total">
                            <span>Total:</span>
                            <span>${order.finalTotal.toFixed(2)}</span>
                        </div>
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
    );
}

export default Checkout;