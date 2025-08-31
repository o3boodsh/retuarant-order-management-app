import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-utensils me-2"></i>
                        Restaurant Management System
                    </a>
                    <div className="navbar-nav ms-auto">
                        <div className="d-flex align-items-center">
                            <div className="dropdown me-3">
                                <a href="#" className="text-white position-relative" data-bs-toggle="dropdown">
                                    <i className="fas fa-bell fa-lg"></i>
                                    <span className="notification-badge">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <h6 className="dropdown-header">Notifications</h6>
                                    <a className="dropdown-item" href="#">New order received</a>
                                    <a className="dropdown-item" href="#">Table reservation request</a>
                                    <a className="dropdown-item" href="#">Inventory low alert</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="text-white dropdown-toggle text-decoration-none"
                                    data-bs-toggle="dropdown">
                                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=random"
                                        className="rounded-circle me-2" width="32" height="32" />
                                    <span>Admin User</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i> Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/staff-login"><i className="fas fa-sign-out-alt me-2"></i>
                                        Logout</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="page-title">Administration Dashboard</h2>
                    <p className="page-subtitle">Manage restaurant operations and view analytics</p>
                </div>
                <div>
                    <button className="btn btn-outline-secondary me-2">
                        <i className="fas fa-download me-1"></i> Export Report
                    </button>
                    <button className="btn btn-primary">
                        <i className="fas fa-plus me-1"></i> New Order
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;