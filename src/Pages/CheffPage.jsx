import { Fragment } from "react";
import Header from "../Components/RoleSelection/Header";
import { useNavigate } from "react-router-dom";

const CheffPage = () => {
    let navigate = useNavigate();
    return (
        <Fragment>
            <div id="chef-page" className="page">
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
                            <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/role-selecttion',{replace:true})}>
                                <i className="fas fa-sync-alt me-1"></i> Switch Role
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="container container-main mt-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="page-title">Kitchen Orders</h2>
                            <p className="page-subtitle">Manage and track all incoming orders from customers</p>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-outline-secondary me-2">
                                <i className="fas fa-filter me-1"></i> Filter
                            </button>
                            <button className="btn btn-outline-primary">
                                <i className="fas fa-sync-alt me-1"></i> Refresh
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-3 mb-3">
                            <div className="card dashboard-card bg-primary text-white p-3 glow-card">
                                <div className="card-body">
                                    <h3 className="stat-number" id="new-orders-count">5</h3>
                                    <p className="stat-label">New Orders</p>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">+2 since last hour</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card dashboard-card bg-success text-white p-3 glow-card">
                                <div className="card-body">
                                    <h3 className="stat-number" id="preparing-orders-count">3</h3>
                                    <p className="stat-label">Preparing</p>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">Avg: 12 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card dashboard-card bg-info text-white p-3 glow-card">
                                <div className="card-body">
                                    <h3 className="stat-number" id="ready-orders-count">2</h3>
                                    <p className="stat-label">Ready</p>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">Waiting pickup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card dashboard-card bg-warning text-white p-3 glow-card">
                                <div className="card-body">
                                    <h3 className="stat-number" id="total-orders-count">10</h3>
                                    <p className="stat-label">Total Today</p>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">5:12 avg time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="nav nav-tabs" id="chefTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="new-orders-tab" data-bs-toggle="tab"
                                data-bs-target="#new-orders" type="button" role="tab">
                                <i className="fas fa-inbox me-1"></i> New Orders
                                <span className="badge bg-primary ms-1">5</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="preparing-orders-tab" data-bs-toggle="tab"
                                data-bs-target="#preparing-orders" type="button" role="tab">
                                <i className="fas fa-blender me-1"></i> Preparing
                                <span className="badge bg-warning ms-1">3</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="ready-orders-tab" data-bs-toggle="tab" data-bs-target="#ready-orders"
                                type="button" role="tab">
                                <i className="fas fa-check-circle me-1"></i> Ready
                                <span className="badge bg-success ms-1">2</span>
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content mt-0" id="chefTabContent">
                        <div className="tab-pane fade show active" id="new-orders" role="tabpanel">
                            <div className="card order-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center mb-2">
                                                <h5 className="card-title mb-0 me-3">Order #1005 - Table 3</h5>
                                                <span className="order-badge bg-info">New</span>
                                                <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 5
                                                    min ago</span>
                                            </div>
                                            <p className="order-items mb-1"><strong>2 x</strong> Margherita Pizza</p>
                                            <p className="order-items mb-2"><strong>1 x</strong> Caesar Salad</p>
                                            <div>
                                                <span className="badge bg-light text-dark me-2">Normal Priority</span>
                                                <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 2
                                                    guests</span>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <button className="btn btn-primary btn-kitchen"
                                                onClick={console.log('')}>
                                                <i className="fas fa-play-circle me-1"></i> Start Preparing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card order-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center mb-2">
                                                <h5 className="card-title mb-0 me-3">Order #1006 - Table 7</h5>
                                                <span className="order-badge bg-info">New</span>
                                                <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 3
                                                    min ago</span>
                                            </div>
                                            <p className="order-items mb-1"><strong>1 x</strong> Classic Burger</p>
                                            <p className="order-items mb-2"><strong>2 x</strong> Vanilla Ice Cream</p>
                                            <div>
                                                <span className="badge bg-warning text-dark me-2">High Priority</span>
                                                <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 3
                                                    guests</span>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <button className="btn btn-primary btn-kitchen"
                                                onClick={console.log('')}>
                                                <i className="fas fa-play-circle me-1"></i> Start Preparing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="preparing-orders" role="tabpanel">
                            <div className="card order-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center mb-2">
                                                <h5 className="card-title mb-0 me-3">Order #1004 - Table 2</h5>
                                                <span className="order-badge bg-warning text-dark">Preparing</span>
                                                <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 12
                                                    min elapsed</span>
                                            </div>
                                            <p className="order-items mb-1"><strong>1 x</strong> Garlic Bread</p>
                                            <p className="order-items mb-2"><strong>1 x</strong> Chocolate Cake</p>
                                            <div
                                                className="progress mb-2"
                                            // style="height: 6px;"
                                            >
                                                <div className="progress-bar bg-warning" role="progressbar"
                                                    // style="width: 65%;"
                                                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <button className="btn btn-success btn-kitchen"
                                                onClick={console.log('')}>
                                                <i className="fas fa-check-circle me-1"></i> Mark as Ready
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="ready-orders" role="tabpanel">
                            <div className="card order-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center mb-2">
                                                <h5 className="card-title mb-0 me-3">Order #1003 - Table 5</h5>
                                                <span className="order-badge bg-success">Ready</span>
                                                <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i>
                                                    Ready 5 min ago</span>
                                            </div>
                                            <p className="order-items mb-1"><strong>2 x</strong> Classic Burger</p>
                                            <p className="order-items mb-2"><strong>1 x</strong> Caesar Salad</p>
                                            <div>
                                                <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 2
                                                    guests</span>
                                            </div>
                                        </div>
                                        {/* <div className="ms-3">
                                    <button className="btn btn-outline-secondary btn-kitchen"
                                        onClick={console.log('')}>
                                        <i className="fas fa-clipboard-check me-1"></i> Mark as Completed
                                    </button>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CheffPage;