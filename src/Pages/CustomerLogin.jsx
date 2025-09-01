import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerLogin = () => {
    let navigate = useNavigate();
    let onSubmitHandler = (event) => {
        event.preventDefault();
        navigate('/customer', { replace: true });
    }

    const [show, setShow] = useState(false);
    return (
        <Fragment>
            {/* Login */}
            <div className="login-container_1">
                <div className="login-card_1">
                    <div className="login-header_1">
                        <div className="customer-icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <h2>Customer Login</h2>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyOTgwYjkiIGQ9Ik03NSA0MGMtMTkuMzMgMC0zNSAxNS42Ny0zNSAzNXMxNS42NyAzNSAzNSAzNSAzNS0xNS42NyAzNS0zNS0xNS42Ny0zNS0zNS0zNXoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSIjMzQ5OGRiIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02NSA1NWMtNS41MiAwLTEwIDQuNDgtMTAgMTBzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwLTQuNDgtMTAtMTAtMTB6TTg1IDU1YzUuNTIgMCAxMCA0LjQ4IDEwIDEwcy00LjQ4IDEwLTEwIDEwLTEwLTQuNDgtMTAtMTAgNC40OC0xMCAxMC0xMHoiIG9wYWNpdHk9Ii40Ii8+PHBhdGggc3Ryb2tlPSIjMzQ5OGRiIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01NSA0NWMtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6TTk1IDQ1YzIuNzYgMCA1IDIuMjQgNSA1cy0yLjI0IDUtNSA1LTUtMi4yNC01LTUgMi4yNC01IDUtNXoiIG9wYWNpdHk9Ii40Ii8+PC9nPjwvc3ZnPg=="
                            className="restaurant-animation" alt="Restaurant Icon" />
                    </div>

                    <div className="login-body_1">
                        <form id="customer-login-form" onSubmit={onSubmitHandler}>
                            <div className="form-group_1">
                                <label className="form-label">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                    <input type="email" id="customerEmail" className="form-control_1" placeholder="Enter your email"
                                        required />
                                </div>
                            </div>

                            <div className="form-group_1">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                    <input type="password" id="customerPassword" className="form-control_1"
                                        placeholder="Enter your password" required />
                                </div>
                            </div>

                            <div className="forgot-password">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Forgot Password?</a>
                            </div>

                            <button type="submit" className="btn-login_1">
                                <i className="fas fa-sign-in-alt me-2"></i>Login
                            </button>

                            <div className="social-login">
                                <div className="social-divider">
                                    <span>Or continue with</span>
                                </div>
                                <div className="social-buttons">
                                    <button type="button" className="btn-social btn-facebook">
                                        <i className="fab fa-facebook-f"></i>Facebook
                                    </button>
                                    <button type="button" className="btn-social btn-instagram">
                                        <i className="fab fa-instagram"></i>Instagram
                                    </button>
                                </div>
                            </div>

                            <button onClick={() => setShow(true)} type="button" className="btn-login_1" data-bs-toggle="modal" data-bs-target="#registerModal">
                                <i className="fas fa-user-plus me-2"></i>Create New Account
                            </button>
                        </form>

                        <div className="back-link_1">
                            <Link to="/role-selecttion" >
                                <i className="fas fa-arrow-left me-2"></i>Back to Role Selection
                            </Link>
                        </div>
                    </div>

                    <div className="floating-items_1">
                        <div className="floating-item_1"><i className="fas fa-utensils"></i></div>
                        <div className="floating-item_1"><i className="fas fa-hamburger"></i></div>
                        <div className="floating-item_1"><i className="fas fa-pizza-slice"></i></div>
                        <div className="floating-item_1"><i className="fas fa-ice-cream"></i></div>
                        <div className="floating-item_1"><i className="fas fa-coffee"></i></div>
                        <div className="floating-item_1"><i className="fas fa-cookie"></i></div>
                    </div>
                </div>
            </div>

            {/* Regtration */}
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalLabel">Create New Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="register-form">
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        <input type="text" className="form-control" placeholder="Enter your full name" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="Create a password" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="Confirm your password"
                                            required />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}
            <div show={show} className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="forgotPasswordModalLabel">Reset Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Enter your email address and we'll send you a link to reset your password.</p>
                            <form id="forgot-password-form">
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input type="email" className="form-control_1" placeholder="Enter your email" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setShow(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Send Reset Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CustomerLogin;