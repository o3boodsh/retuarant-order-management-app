import React from "react";

const OrderContext = React.createContext({
    order: {},
    setOrder: () => { }
});

export default OrderContext;