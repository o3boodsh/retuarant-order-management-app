import React from "react";
import Order from "../Model/Order";

const OrderContext = React.createContext({
    order: new Order(),
    setOrder: () => {}
});

export default OrderContext;