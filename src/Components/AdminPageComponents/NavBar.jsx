import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    function toggleSidebar() {
        document.body.classList.toggle('collapsed');
    }
    return (
        <Fragment>
            <div className="sidebar">
                <div className="text-center mb-4 sidebar-title">
                    <h4 className="text-white mt-2">Restaurant Admin</h4>
                    <p className="text-muted small">Management System</p>
                </div>

                <ul className="sidebar-menu">
                    <li>
                        <NavLink to="/admin/dashboard" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-tachometer-alt"></i>
                            <span className="menu-text">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/menu" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-utensils"></i>
                            <span className="menu-text">Menu Management</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/orders" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-clipboard-list"></i>
                            <span className="menu-text">Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/reports" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-file-alt"></i>
                            <span className="menu-text">Reports</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/staff-management" className={`${(event) => event.isActive ? "active" : ""}`} end >
                            <i className="fas fa-users"></i>
                            <span className="menu-text">Staff Management</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="path3" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-cog"></i>
                            <span className="menu-text">Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="path4" className={`${(event) => event.isActive ? "active" : ""}`} end>
                            <i className="fas fa-table"></i>
                            <span className="menu-text">Table Management</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <button className="toggle-sidebar" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </button>
        </Fragment>
    );
}
export default NavBar;