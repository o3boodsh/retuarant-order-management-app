import { Fragment } from "react";
import HeaderCustomer from "../../Components/CustomerPageComponents/HeaderCustomer";
import ContentCustomer from "../../Components/CustomerPageComponents/ContentCustomer";

const CustomerPage = () => {
    return (
        <Fragment>
            <HeaderCustomer />
            <ContentCustomer />
        </Fragment>
    );
}

export default CustomerPage;