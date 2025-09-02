import { Fragment } from "react";
import RoleCard from "../Components/RoleSelection/RoleCard";
import Header from "../Components/RoleSelection/Header";
import "../Resources/css/style.css";

const RoleSelectionPage = () => {
    return (
        <Fragment>
            <div id="role-page" className="page active-page">
                <Header />
                <div className="container flex-grow-1">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="form-box">
                                <div className="text-center mb-4">
                                    <h2>Select Your Role</h2>
                                    <p className="text-muted">Choose how you would like to use the system</p>
                                </div>

                                <div className="row">
                                    <RoleCard icon="fa-users-cog"
                                        color="danger"
                                        title="Staff"
                                        description="Manage kitchen orders and administrative tasks"
                                        type="staff-login"
                                    />
                                    <RoleCard
                                        icon="fa-users"
                                        color="primary"
                                        title="Customer"
                                        description="Browse menu, place orders, and track your order status"
                                        type="customer-login"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RoleSelectionPage;