import { Link, useNavigate } from "react-router-dom";
import "../Resources/css/staff-login.css";


import { Fragment, useRef } from "react";

const StaffLoginPage = () => {
    let navigate = useNavigate();

    let userRef = useRef();;

    let onSubmitHandler = (event) => {
        event.preventDefault()
        if (userRef.current.value === 'a') {
            navigate("/admin", { replace: true });
        }
        else if (userRef.current.value === 'ch') {
            navigate("/cheff", { replace: true });
        }
        else if (userRef.current.value === 'w') {
            navigate("/waiter", { replace: true });
        }
        else {
            alert('Error input!!');
        }

    }
    return (
        <Fragment>
            <div className="login-container_1">
                <div className="login-card_1">
                    <div className="login-header_1">
                        <div className="admin-icon_1">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h2>Staff Login</h2>
                        <p>Access the restaurant management system</p>
                    </div>

                    <div className="login-body_1">
                        <form id="admin-login-form" onSubmit={onSubmitHandler}>
                            <div className="form-group_1">
                                <label className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input type="text" id="adminUsername" className="form-control_1" placeholder="Enter your username"
                                        required ref={userRef} />
                                </div>
                            </div>

                            <div className="form-group_1">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                    <input type="password" id="adminPassword" className="form-control_1"
                                        placeholder="Enter your password" required />
                                </div>
                            </div>

                            <button type="submit" className="btn-login_1">
                                <i className="fas fa-sign-in-alt me-2"></i>Login
                            </button>
                        </form>

                        <div className="back-link_1">
                            <Link to="/role-selecttion">
                                <i className="fas fa-arrow-left me-2"></i>Back to Role Selection
                            </Link>
                        </div>
                    </div>

                    <div className="floating-items_1">
                        <div className="floating-item_1"><i className="fas fa-cog"></i></div>
                        <div className="floating-item_1"><i className="fas fa-chart-bar"></i></div>
                        <div className="floating-item_1"><i className="fas fa-users"></i></div>
                        <div className="floating-item_1"><i className="fas fa-utensils"></i></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default StaffLoginPage; 