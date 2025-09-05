import { useState } from "react";
import HeaderCustomer from "../Components/CustomerPage/HeaderCustomer";
import ContentCustomer from "../Components/CustomerPage/ContentCustomer";
import OrderContext from "../Context/order-context";
import Order from "../Model/Order";

const CustomerPage = () => {
    const [order, setOrder] = useState(new Order());

    return (
        <OrderContext.Provider value={{
            order: order,
            setOrder: setOrder,
        }}>
            <HeaderCustomer />
            <ContentCustomer />
        </OrderContext.Provider>
    );
}

export default CustomerPage;