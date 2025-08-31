import { Link, useNavigate } from "react-router-dom";
import "../Resources/css/staff-login.css";


import { Fragment } from "react";

const StaffLoginPage = () => {
    let navigate = useNavigate();

    let onSubmitHandler = (event) => {
        event.preventDefault()
        navigate("/admin", { replace: true });
    }
    return (
        <Fragment>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="admin-icon">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h2>Staff Login</h2>
                        <p>Access the restaurant management system</p>
                    </div>

                    <div className="login-body">
                        <form id="admin-login-form" onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input type="text" id="adminUsername" className="form-control" placeholder="Enter your username"
                                        required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                    <input type="password" id="adminPassword" className="form-control"
                                        placeholder="Enter your password" required />
                                </div>
                            </div>

                            <button type="submit" className="btn-login">
                                <i className="fas fa-sign-in-alt me-2"></i>Login
                            </button>
                        </form>

                        <div className="back-link">
                            <Link to="/role-selecttion">
                                <i className="fas fa-arrow-left me-2"></i>Back to Role Selection
                            </Link>
                        </div>
                    </div>

                    <div className="floating-items">
                        <div className="floating-item"><i className="fas fa-cog"></i></div>
                        <div className="floating-item"><i className="fas fa-chart-bar"></i></div>
                        <div className="floating-item"><i className="fas fa-users"></i></div>
                        <div className="floating-item"><i className="fas fa-utensils"></i></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default StaffLoginPage; 