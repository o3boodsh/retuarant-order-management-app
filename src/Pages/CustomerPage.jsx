import HeaderCustomer from "../Components/CustomerPage/HeaderCustomer";
import ContentCustomer from "../Components/CustomerPage/ContentCustomer";
import { Fragment } from "react";

const CustomerPage = () => {
    return (
        <Fragment>
            <HeaderCustomer />
            <ContentCustomer />
        </Fragment>
    );
}

export default CustomerPage;