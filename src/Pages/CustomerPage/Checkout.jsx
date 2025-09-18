import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Swal from "sweetalert2"; // Fixed import name
import RestuarantContext from "../../Context/restuarant-context";

const Checkout = () => {
    let tableNumberRef = useRef();
    let cardRef = useRef();
    let expiryDateRef = useRef();
    let cvvRef = useRef();
    let cardholderRef = useRef();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const restaurantContext = useContext(RestuarantContext);
    let FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";

    // Function to clear form fields
    const clearFormFields = () => {
        if (tableNumberRef.current) tableNumberRef.current.value = '';
        if (cardRef.current) cardRef.current.value = '';
        if (expiryDateRef.current) expiryDateRef.current.value = '';
        if (cvvRef.current) cvvRef.current.value = '';
        if (cardholderRef.current) cardholderRef.current.value = '';
    };

    let onSubmitHandler = async (event) => {
        event.preventDefault();

        // Check if form references are available
        if (!tableNumberRef.current || !cardRef.current || !expiryDateRef.current ||
            !cvvRef.current || !cardholderRef.current) {
            console.error("Form references are not available");
            return;
        }

        // Check if there are items in the order
        if (!restaurantContext.orderItems || restaurantContext.orderItems.length === 0) {
            await Swal.fire({
                title: 'Empty Order',
                text: 'Please add items to your order before proceeding.',
                icon: 'warning',
            });
            return;
        }

        // Validate input data
        if (!tableNumberRef.current.value ||
            !cardRef.current.value ||
            !expiryDateRef.current.value ||
            !cvvRef.current.value ||
            !cardholderRef.current.value) {
            await Swal.fire({
                title: 'Incomplete Information',
                text: 'Please fill all the required fields.',
                icon: 'warning',
            });
            return;
        }

        // Validate table number
        const tableNumber = parseInt(tableNumberRef.current.value);
        if (isNaN(tableNumber) || tableNumber < 1 || tableNumber > 100) {
            await Swal.fire({
                title: 'Invalid Table Number',
                text: 'Please enter a table number between 1 and 100.',
                icon: 'warning',
            });
            return;
        }

        // Validate card number
        const cardNumber = cardRef.current.value.replace(/\s/g, ''); // Remove spaces
        if (cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
            await Swal.fire({
                title: 'Invalid Card Number',
                text: 'Please enter a valid card number (13-19 digits).',
                icon: 'warning',
            });
            return;
        }

        // Validate expiry date
        const expiryDate = expiryDateRef.current.value;
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            await Swal.fire({
                title: 'Invalid Expiry Date',
                text: 'Please enter expiry date in MM/YY format.',
                icon: 'warning',
            });
            return;
        }

        // Validate CVV
        const cvv = cvvRef.current.value;
        if (!/^\d{3,4}$/.test(cvv)) {
            await Swal.fire({
                title: 'Invalid CVV',
                text: 'Please enter a valid CVV (3-4 digits).',
                icon: 'warning',
            });
            return;
        }

        // Show confirmation dialog
        const confirmationResult = await Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to place this order?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, place order!',
            cancelButtonText: 'No, cancel'
        });

        // If user confirms
        if (confirmationResult.isConfirmed) {
            setIsProcessing(true);

            try {
                // Calculate totals
                const subtotal = restaurantContext.orderItems.reduce((total, item) => {
                    return total + (item.price * item.quantity);
                }, 0);

                const tax = subtotal * 0.10;
                const finalTotal = subtotal + tax;

                // Create order object directly instead of using Order class
                const order = {
                    items: [...restaurantContext.orderItems],
                    tableNumber: tableNumberRef.current.value,
                    name: cardholderRef.current.value,
                    subtotal: subtotal,
                    tax: tax,
                    finalTotal: finalTotal,
                    status: "received",
                    timestamp: new Date().toISOString()
                };

                // Save order to Firebase
                const result = await saveItemsOnFirebase(order);
                const orderId = result.name; // Firebase returns the ID in the "name" field

                // Show success message
                await Swal.fire({
                    title: 'Success',
                    text: 'The order has been placed successfully.',
                    icon: 'success',
                    timer: 3000,
                    showConfirmButton: false,
                });

                // Clear form fields
                clearFormFields();

                // Clear order items from context
                if (restaurantContext.removeItem) {
                    restaurantContext.orderItems.forEach(item => restaurantContext.removeItem(item.id));
                }

                // Navigate to order tracking with the order ID
                navigate('/order-tracking', { state: { orderId } });
            } catch (error) {
                // Handle error
                console.error("Order placement error:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to place the order. Please try again.',
                    icon: 'error',
                });
            } finally {
                setIsProcessing(false); // Re-enable the button
            }
        }
    }

    const saveItemsOnFirebase = async (order) => {
        try {
            const response = await fetch(`${FIREBASE_DB_URL}/orders.json`, {
                method: "POST",
                body: JSON.stringify(order),
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

    const handleQuantityChange = (itemId, change) => {
        const item = restaurantContext.orderItems.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + change;
            if (newQuantity > 0) {
                if (restaurantContext.updateItemQuantity) {
                    restaurantContext.updateItemQuantity(itemId, newQuantity);
                }
            } else {
                if (restaurantContext.removeItem) {
                    restaurantContext.removeItem(itemId);
                }
            }
        }
    };

    const handleRemoveItem = (itemId) => {
        if (restaurantContext.removeItem) {
            restaurantContext.removeItem(itemId);
        }
    };


    const subtotal = restaurantContext.orderItems?.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0) || 0;

    const tax = subtotal * 0.10;
    const finalTotal = subtotal + tax;

    // Function to format card number (add spaces every 4 digits)
    const formatCardNumber = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 19);
        const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = formattedInput;
    };

    // Function to format expiry date (add / automatically)
    const formatExpiryDate = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 4);
        if (input.length > 2) {
            e.target.value = input.substring(0, 2) + '/' + input.substring(2);
        } else {
            e.target.value = input;
        }
    };

    return (
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

                    {!restaurantContext.orderItems || restaurantContext.orderItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <>
                            {restaurantContext.orderItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-info">
                                        <img src={item.image} alt={item.name} className="item-img" />
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</p>
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
                        </>
                    )}

                    <div className="payment-section">
                        <h3 className="section-title">Payment Details</h3>
                        <form className="payment-form" onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label className="form-label">Table Number</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="Enter your table number (1-100)"
                                    ref={tableNumberRef}
                                    min={1}
                                    max={100}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="1234 5678 9012 3456"
                                    ref={cardRef}
                                    maxLength={19}
                                    onInput={formatCardNumber}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="MM/YY"
                                        ref={expiryDateRef}
                                        maxLength={5}
                                        onInput={formatExpiryDate}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="123"
                                        ref={cvvRef}
                                        maxLength={4}
                                        pattern="[0-9]{3,4}"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Cardholder Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="John Doe"
                                    ref={cardholderRef}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="pay-btn"
                                disabled={isProcessing || !restaurantContext.orderItems || restaurantContext.orderItems.length === 0}
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