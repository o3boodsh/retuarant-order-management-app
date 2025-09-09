import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RestaurantContext from "../../Context/restuarant-context";
import "../../Resources/css/order-tracking.css";

const OrderTracking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const restaurantContext = useContext(RestaurantContext);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [orderStatus, setOrderStatus] = useState("received");
    const [estimatedTime, setEstimatedTime] = useState(25);
    const [progress, setProgress] = useState(25);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";
    const orderId = location.state?.orderId;

    useEffect(() => {
        if (orderId) {
            fetchOrderDetails(orderId);
        } else {
            setError("No order ID provided");
            setLoading(false);
        }
    }, [orderId]);

    const fetchOrderDetails = async (orderId) => {
        try {
            setLoading(true);
            const response = await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch order details: ${response.status}`);
            }
            
            const orderData = await response.json();
            
            if (!orderData) {
                throw new Error("Order not found");
            }
            
            setCurrentOrder({ id: orderId, ...orderData });
            setOrderStatus(orderData.status || "received");
            
            // Update estimated time based on order status
            if (orderData.estimatedTime) {
                setEstimatedTime(orderData.estimatedTime);
            }
            
            // Set progress based on status
            switch (orderData.status) {
                case "received":
                    setProgress(25);
                    break;
                case "preparing":
                    setProgress(50);
                    break;
                case "cooking":
                    setProgress(75);
                    break;
                case "ready":
                    setProgress(90);
                    break;
                case "completed":
                    setProgress(100);
                    break;
                default:
                    setProgress(25);
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching order details:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    // Get status details
    const getStatusDetails = () => {
        switch (orderStatus) {
            case "received":
                return {
                    title: "Order Received",
                    description: "We've received your order and will start preparing it shortly",
                    icon: "fas fa-clipboard-check",
                    progress: 25
                };
            case "preparing":
                return {
                    title: "Preparing Your Order",
                    description: "Our team is gathering ingredients to cook your meal",
                    icon: "fas fa-utensils",
                    progress: 50
                };
            case "cooking":
                return {
                    title: "Cooking Your Order",
                    description: "Our chef is carefully preparing your meal",
                    icon: "fas fa-fire",
                    progress: 75
                };
            case "ready":
                return {
                    title: "Order Ready",
                    description: "Your order is ready and will be served at your table shortly",
                    icon: "fas fa-concierge-bell",
                    progress: 90
                };
            case "completed":
                return {
                    title: "Order Completed",
                    description: "Thank you for dining with us! Enjoy your meal",
                    icon: "fas fa-check-circle",
                    progress: 100
                };
            default:
                return {
                    title: "Order Received",
                    description: "We've received your order and will start preparing it shortly",
                    icon: "fas fa-clipboard-check",
                    progress: 25
                };
        }
    };

    const statusDetails = getStatusDetails();

    const handleBackToMenu = () => {
        navigate('/customer');
    };

if (loading) {
    return (
        <div className="order-tracking-container">
            <div className="loading-spinner">
                <div className="loader"></div>
            </div>
            <p>Loading your order details...</p>
        </div>
    );
}

    if (error) {
        return (
            <div className="order-tracking-container">
                <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    <h3>Unable to Load Order</h3>
                    <p>{error}</p>
                    <button className="back-button" onClick={handleBackToMenu}>
                        Back to Menu
                    </button>
                </div>
            </div>
        );
    }

    if (!currentOrder) {
        return (
            <div className="order-tracking-container">
                <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    <h3>Order Not Found</h3>
                    <p>We couldn't find your order details.</p>
                    <button className="back-button" onClick={handleBackToMenu}>
                        Back to Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="order-tracking-container">
            <div className="order-tracking-header">
                <h2>Order Tracking</h2>
                <button className="back-to-menu" onClick={handleBackToMenu}>
                    <i className="fas fa-arrow-left"></i> Back to Menu
                </button>
            </div>

            <div className="order-tracking-content">
                <div className="order-info-card">
                    <div className="order-number">
                        <h3>Order #: {currentOrder.id}</h3>
                        
                        <p>Table {currentOrder.tableNumber}</p>
                    </div>

                    <div className="order-status">
                        <div className="status-icon">
                            <i className={statusDetails.icon}></i>
                        </div>
                        <div className="status-details">
                            {/* <h3>{statusDetails.title}</h3> */}
                            
                            {/* <p>{statusDetails.description}</p> */}
                        </div>
                    </div>

                    <div className="progress-container">
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="progress-labels">
                            <span className={orderStatus === "received" ? "active" : ""}>Received</span>
                            <span className={orderStatus === "preparing" ? "active" : ""}>Preparing</span>
                            <span className={orderStatus === "cooking" ? "active" : ""}>Cooking</span>
                            <span className={orderStatus === "ready" ? "active" : ""}>Ready</span>
                            <span className={orderStatus === "completed" ? "active" : ""}>Completed</span>
                        </div>
                    </div>

                    <div className="estimated-time">
                        <i className="fas fa-clock"></i>
                        <p>Estimated time: {estimatedTime} minutes</p>
                    </div>
                </div>

                <div className="order-details-card">
                    <h3>Order Details</h3>
                    <div className="order-items">
                        {currentOrder.items && currentOrder.items.map((item, index) => (
                            <div key={index} className="order-item">
                                <div className="item-info">
                                    <span className="item-quantity">{item.quantity}x</span>
                                    <span className="item-name">{item.name}</span>
                                </div>
                                <span className="item-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="order-totals">
                        <div className="total-line">
                            <span>Subtotal:</span>
                            <span>${currentOrder.subtotal?.toFixed(2) || "0.00"}</span>
                        </div>
                        <div className="total-line">
                            <span>Tax (10%):</span>
                            <span>${currentOrder.tax?.toFixed(2) || "0.00"}</span>
                        </div>
                        <div className="total-line grand-total">
                            <span>Total:</span>
                            <span>${currentOrder.finalTotal?.toFixed(2) || "0.00"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;