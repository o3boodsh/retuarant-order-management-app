import { Fragment } from "react";

const WaiterPage = () => {
    return (<Fragment>
        <div id="waiter-page" className="page">
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <i className="fas fa-concierge-bell me-2"></i>
                        <span className="fw-bold">Waiter Dashboard</span>
                    </a>
                    <div className="navbar-nav ms-auto">
                        <span className="navbar-text me-3">
                            <i className="fas fa-user-tie me-1"></i> Role: <span className="table-number">Senior Waiter</span>
                        </span>
                        <button className="btn btn-outline-light btn-sm" onClick={console.log('')}>
                            <i className="fas fa-sync-alt me-1"></i> Switch Role
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container container-main mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="page-title">Order Delivery & Table Management</h2>
                        <p className="page-subtitle">Manage order delivery and table statuses</p>
                    </div>
                </div>

                {/* ممكن نضيفهم ك تحسين لكن بعدين  */}
                {/* <div className="row mb-4">
                    <div className="col-md-3 mb-3">
                        <div className="card dashboard-card bg-primary text-white text-center p-3">
                            <div className="card-body">
                                <h3 className="stat-number" id="ready-orders-count">3</h3>
                                <p className="stat-label">Ready for Delivery</p>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark">+1 since last refresh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card dashboard-card bg-warning text-dark text-center p-3">
                            <div className="card-body">
                                <h3 className="stat-number" id="delivering-orders-count">2</h3>
                                <p className="stat-label">Being Delivered</p>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark">Avg: 5 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card dashboard-card bg-success text-white text-center p-3">
                            <div className="card-body">
                                <h3 className="stat-number" id="delivered-orders-count">8</h3>
                                <p className="stat-label">Delivered Today</p>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark">4:30 avg time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card dashboard-card bg-info text-white text-center p-3">
                            <div className="card-body">
                                <h3 className="stat-number" id="occupied-tables-count">5</h3>
                                <p className="stat-label">Occupied Tables</p>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark">3 need cleaning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}

                <ul className="nav nav-tabs" id="waiterTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="ready-orders-tab" data-bs-toggle="tab"
                            data-bs-target="#ready-orders" type="button" role="tab">
                            <i className="fas fa-check-circle me-1"></i> Ready Orders
                            <span className="badge bg-success ms-1">3</span>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="delivering-orders-tab" data-bs-toggle="tab"
                            data-bs-target="#delivering-orders" type="button" role="tab">
                            <i className="fas fa-truck me-1"></i> Delivering
                            <span className="badge bg-warning ms-1">2</span>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tables-tab" data-bs-toggle="tab" data-bs-target="#tables-management"
                            type="button" role="tab">
                            <i className="fas fa-chair me-1"></i> Tables
                            <span className="badge bg-info ms-1">12</span>
                        </button>
                    </li>
                </ul>

                <div className="tab-content mt-0" id="waiterTabContent">
                    <div className="tab-pane fade show active" id="ready-orders" role="tabpanel">
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
                                    <div className="ms-3">
                                        <button className="btn btn-success btn-kitchen"
                                            onClick={console.log('')}>
                                            <i className="fas fa-truck me-1"></i> Start Delivery
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
                                            <h5 className="card-title mb-0 me-3">Order #1007 - Table 8</h5>
                                            <span className="order-badge bg-success">Ready</span>
                                            <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i>
                                                Ready 2 min ago</span>
                                        </div>
                                        <p className="order-items mb-1"><strong>1 x</strong> Margherita Pizza</p>
                                        <p className="order-items mb-2"><strong>2 x</strong> Sparkling Water</p>
                                        <div>
                                            <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 4
                                                guests</span>
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <button className="btn btn-success btn-kitchen"
                                            onClick={console.log('')}>
                                            <i className="fas fa-truck me-1"></i> Start Delivery
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="delivering-orders" role="tabpanel">
                        <div className="card order-card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center mb-2">
                                            <h5 className="card-title mb-0 me-3">Order #1002 - Table 4</h5>
                                            <span className="order-badge bg-warning text-dark">Delivering</span>
                                            <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 3
                                                min elapsed</span>
                                        </div>
                                        <p className="order-items mb-1"><strong>1 x</strong> Seafood Pasta</p>
                                        <p className="order-items mb-2"><strong>2 x</strong> Garlic Bread</p>
                                        <div className="progress mb-2"
                                        // style="height: 6px;"
                                        >
                                            <div className="progress-bar bg-warning" role="progressbar"
                                                // style="width: 30%;"
                                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <button className="btn btn-primary btn-kitchen"
                                            onClick={console.log('')}>
                                            <i className="fas fa-check-circle me-1"></i> Mark as Delivered
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tables-management" role="tabpanel">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="card table-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <h5 className="table-number mb-0 me-3">Table 3</h5>
                                                    <span className="table-status bg-success">Occupied</span>
                                                    <span className="order-time text-muted ms-auto"><i
                                                        className="far fa-clock me-1"></i> 45 min</span>
                                                </div>
                                                <p className="order-items mb-1"><strong>Order #1005</strong></p>
                                                <p className="order-items mb-1">2 guests</p>
                                                <div>
                                                    <span className="badge bg-light text-dark me-2">Main Course Finished</span>
                                                </div>
                                            </div>
                                            <div className="table-actions">
                                                <button className="btn btn-outline-primary btn-sm" onClick={console.log('')}>
                                                    <i className="fas fa-utensils me-1"></i> Free Table
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="card table-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <h5 className="table-number mb-0 me-3">Table 5</h5>
                                                    <span className="table-status bg-warning text-dark">Needs Cleaning</span>
                                                    <span className="order-time text-muted ms-auto"><i
                                                        className="far fa-clock me-1"></i> 15 min ago</span>
                                                </div>
                                                <p className="order-items mb-1">Last order: #1003</p>
                                                <p className="order-items mb-1">2 guests</p>
                                                <div>
                                                    <span className="badge bg-light text-dark me-2">Ready for new
                                                        customers</span>
                                                </div>
                                            </div>
                                            <div className="table-actions">
                                                <button className="btn btn-outline-success btn-sm" onClick={console.log('')}>
                                                    <i className="fas fa-check me-1"></i> Mark Ready
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="card table-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <h5 className="table-number mb-0 me-3">Table 2</h5>
                                                    <span className="table-status bg-success">Occupied</span>
                                                    <span className="order-time text-muted ms-auto"><i
                                                        className="far fa-clock me-1"></i> 25 min</span>
                                                </div>
                                                <p className="order-items mb-1"><strong>Order #1004</strong></p>
                                                <p className="order-items mb-1">3 guests</p>
                                                <div>
                                                    <span className="badge bg-light text-dark me-2">Dessert Time</span>
                                                </div>
                                            </div>
                                            <div className="table-actions">
                                                <button className="btn btn-outline-primary btn-sm" onClick={console.log('')}>
                                                    <i className="fas fa-utensils me-1"></i> Free Table
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="card table-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <h5 className="table-number mb-0 me-3">Table 7</h5>
                                                    <span className="table-status bg-info">Available</span>
                                                    <span className="order-time text-muted ms-auto"><i
                                                        className="fas fa-check-circle me-1"></i> Ready</span>
                                                </div>
                                                <p className="order-items mb-1">Capacity: 4 persons</p>
                                                <p className="order-items mb-1">Last cleaned: 30 min ago</p>
                                                <div>
                                                    <span className="badge bg-light text-dark me-2">Window View</span>
                                                </div>
                                            </div>
                                            <div className="table-actions">
                                                <button className="btn btn-outline-secondary btn-sm" disabled>
                                                    <i className="fas fa-chair me-1"></i> Available
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>);
}

export default WaiterPage;