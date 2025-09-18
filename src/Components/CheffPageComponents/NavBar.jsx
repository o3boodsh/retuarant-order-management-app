import { useNavigate } from "react-router-dom";

const NavBar = () => {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <i className="fas fa-utensils me-2"></i>
                    <span className="fw-bold">Gourmet Chef Dashboard</span>
                </a>
                <div className="navbar-nav ms-auto">
                    <span className="navbar-text me-3">
                        <i className="fas fa-user-shield me-1"></i> Role: <span className="table-number">Head Chef</span>
                    </span>
                    <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/role-selecttion', { replace: true })}>
                        <i className="fas fa-sync-alt me-1"></i> Switch Role
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;