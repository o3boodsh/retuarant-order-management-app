const DashBoard = () => {
    return (
        <>
            <div className="container-fluid">
                <div id="dashboard" className="section active">
                    <div className="row mb-4">
                        <div className="col-xl-3 col-md-6 mb-3">
                            <div className="card dashboard-card bg-primary text-white p-3 glow-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="stat-number">$1,250</h3>
                                            <p className="stat-label">Today's Revenue</p>
                                        </div>
                                        <i className="fas fa-dollar-sign fa-2x opacity-50 floating"></i>
                                    </div>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">+12% from yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-3">
                            <div className="card dashboard-card bg-success text-white p-3 glow-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="stat-number">42</h3>
                                            <p className="stat-label">Orders Today</p>
                                        </div>
                                        <i className="fas fa-shopping-bag fa-2x opacity-50 floating"></i>
                                    </div>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">+5 from yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-3">
                            <div className="card dashboard-card bg-info text-white p-3 glow-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="stat-number">18</h3>
                                            <p className="stat-label">Active Tables</p>
                                        </div>
                                        <i className="fas fa-table fa-2x opacity-50 floating"></i>
                                    </div>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">72% occupancy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-3">
                            <div className="card dashboard-card bg-warning text-dark p-3 glow-card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="stat-number">4.7/5</h3>
                                            <p className="stat-label">Customer Rating</p>
                                        </div>
                                        <i className="fas fa-star fa-2x opacity-50 floating"></i>
                                    </div>
                                    <div className="mt-2">
                                        <span className="badge bg-light text-dark">Based on 28 reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="card mb-4 dashboard-card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Revenue Overview</h5>
                                    <div>
                                        <button className="btn btn-sm btn-outline-secondary">Day</button>
                                        <button className="btn btn-sm btn-outline-primary">Week</button>
                                        <button className="btn btn-sm btn-outline-secondary">Month</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-container">
                                        <canvas id="revenueChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 dashboard-card h-100">
                                        <div className="card-header">
                                            <h5 className="mb-0">Popular Items</h5>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <i className="fas fa-pizza-slice text-primary me-2"></i>
                                                        Margherita Pizza
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">24 orders</span>
                                                </li>
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <i className="fas fa-hamburger text-success me-2"></i>
                                                        Classic Burger
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">18 orders</span>
                                                </li>
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <i className="fas fa-leaf text-info me-2"></i>
                                                        Caesar Salad
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">15 orders</span>
                                                </li>
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <i className="fas fa-birthday-cake text-warning me-2"></i>
                                                        Chocolate Cake
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">12 orders</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 dashboard-card h-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">Recent Orders</h5>
                                            <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
                                        </div>
                                        <div className="card-body">
                                            <div className="recent-order-card">
                                                <div className="card-body py-2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h6 className="mb-0">Order #1007</h6>
                                                            <small className="text-muted">Table 4 • 15 mins ago</small>
                                                        </div>
                                                        <div>
                                                            <span className="fw-bold">$32.97</span>
                                                            <span className="badge bg-success ms-2">Completed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recent-order-card">
                                                <div className="card-body py-2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h6 className="mb-0">Order #1006</h6>
                                                            <small className="text-muted">Table 7 • 25 mins ago</small>
                                                        </div>
                                                        <div>
                                                            <span className="fw-bold">$26.97</span>
                                                            <span className="badge bg-warning ms-2">Preparing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recent-order-card">
                                                <div className="card-body py-2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h6 className="mb-0">Order #1005</h6>
                                                            <small className="text-muted">Table 3 • 45 mins ago</small>
                                                        </div>
                                                        <div>
                                                            <span className="fw-bold">$45.50</span>
                                                            <span className="badge bg-success ms-2">Completed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="card mb-4 dashboard-card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Recent Activity</h5>
                                    <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                                                className="rounded-circle" width="40" height="40" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0">John Doe</h6>
                                            <p className="mb-0">Placed a new order #1008</p>
                                            <small className="text-muted">10 minutes ago</small>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random"
                                                className="rounded-circle" width="40" height="40" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0">Jane Smith</h6>
                                            <p className="mb-0">Completed order #1005</p>
                                            <small className="text-muted">45 minutes ago</small>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=Mike+Johnson&background=random"
                                                className="rounded-circle" width="40" height="40" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0">Mike Johnson</h6>
                                            <p className="mb-0">Updated menu item prices</p>
                                            <small className="text-muted">2 hours ago</small>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=Sara+Wilson&background=random"
                                                className="rounded-circle" width="40" height="40" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0">Sara Wilson</h6>
                                            <p className="mb-0">Added new dessert to menu</p>
                                            <small className="text-muted">5 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card dashboard-card">
                                <div className="card-header">
                                    <h5 className="mb-0">Table Status</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row text-center">
                                        <div className="col-3 mb-3">
                                            <div className="bg-success rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                                            // style="width: 60px; height: 60px;"
                                            >
                                                <span className="text-white fw-bold">4</span>
                                            </div>
                                            <small className="mt-2 d-block">Available</small>
                                        </div>
                                        <div className="col-3 mb-3">
                                            <div className="bg-primary rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                                            // style="width: 60px; height: 60px;"
                                            >
                                                <span className="text-white fw-bold">8</span>
                                            </div>
                                            <small className="mt-2 d-block">Occupied</small>
                                        </div>
                                        <div className="col-3 mb-3">
                                            <div className="bg-warning rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                                            // style="width: 60px; height: 60px;"
                                            >
                                                <span className="text-white fw-bold">3</span>
                                            </div>
                                            <small className="mt-2 d-block">Reserved</small>
                                        </div>
                                        <div className="col-3 mb-3">
                                            <div className="bg-secondary rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                                            // style="width: 60px; height: 60px;"
                                            >
                                                <span className="text-white fw-bold">3</span>
                                            </div>
                                            <small className="mt-2 d-block">Cleaning</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashBoard;