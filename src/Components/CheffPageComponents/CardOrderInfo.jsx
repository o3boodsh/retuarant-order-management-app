import { useEffect, useState } from "react";
import Order from "../../Model/Order";
import CardCounting from "./CardCounting";

const CardOrderInfo = () => {
    const [orders, setOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [ready, setReady] = useState([]);
    const [completed, setCompleted] = useState([]);

    let addPendingOredr = (newOrder) => {
        setPendingOrders((prevOrders) => {
            return [...prevOrders, newOrder];
        });
    }
    let addPreparing = (newOrder) => {
        setPreparing((prevOrders) => {
            return [...prevOrders, newOrder];
        });
    }
    let addReady = (newOrder) => {
        setReady((prevOrders) => {
            return [...prevOrders, newOrder];
        });
    }
    let addCompleted = (newOrder) => {
        setCompleted((prevOrders) => {
            return [...prevOrders, newOrder];
        });
    }
    const FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";


    let fetchOrders = () => {
        fetch(`${FIREBASE_DB_URL}/orders.json`, {
            method: "GET",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                console.log(result);
                let fbOrders = [];

                if (result) {
                    for (let key in result) {
                        if (result[key]) {
                            //tableNumber = 0, customerName = '', status = 'pending', items = [], subtotal = 0, tax = 0, finalTotal = 0
                            let order = new Order(
                                result[key].tableNumber,
                                result[key].customerName,
                                result[key].status,
                                result[key].items,
                                result[key].subtotal,
                                result[key].tax,
                                result[key].finalTotal,
                            );
                            order.id = key;
                            fbOrders.unshift(order);
                            if (result[key].status === "pending") {
                                addPendingOredr(order);
                            }
                            else if (result[key].status === "preparing") {
                                addPreparing(order);
                            }
                            else if (result[key].status === "ready") {
                                addReady(order);
                            }
                            else if (result[key].status === "completed") {
                                addCompleted(order);
                            }
                        }
                    }
                }

                console.log(fbOrders);
                setOrders(fbOrders);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="row mb-4">
            <CardCounting length={orders.length} color="primary" title="New Orders" description="+2 since last hour" />
            <CardCounting length={orders.length} color="success" title="Preparing" description="Avg: 12 min" />
            <CardCounting length={orders.length} color="info" title="Ready" description="Waiting pickup" />
            <CardCounting length={orders.length} color="warning" title="Total Today" description={`5:12 avg time`} />

        </div >
    );
}
export default CardOrderInfo;