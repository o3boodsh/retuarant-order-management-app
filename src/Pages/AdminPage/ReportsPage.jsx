import { Fragment } from "react";

const ReportsPage = () => {
    return (
        <Fragment>
            <h3 className="mb-4"><i className="fas fa-chart-pie me-2"></i>Sales Reports</h3>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Select Report Type</h5>
                    <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-primary report-type-btn active"
                            onClick={console.log("Daily Report")}>
                            <i className="fas fa-calendar-day me-2"></i>Daily Report
                        </button>
                        <button className="btn btn-outline-primary report-type-btn"
                            onClick={console.log("Weekly Report")}>
                            <i className="fas fa-calendar-week me-2"></i>Weekly Report
                        </button>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="reportDate" className="form-label">Select Date</label>
                                <input type="date" className="form-control" id="reportDate" value="2023-10-15" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="reportWeek" className="form-label">Select Week</label>
                                <input type="week" className="form-control" id="reportWeek" value="2023-W42"
                                // style="display: none;"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-success btn-action" onClick={console.log("Generate Report")}>
                        <i className="fas fa-file-pdf me-2"></i>Generate Report
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4 report-card">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Sales Overview</h5>
                        </div>
                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="salesChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 report-card">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Top Selling Items</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Margherita Pizza
                                    <span className="badge bg-primary rounded-pill">24</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Classic Burger
                                    <span className="badge bg-primary rounded-pill">18</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Caesar Salad
                                    <span className="badge bg-primary rounded-pill">15</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Chocolate Cake
                                    <span className="badge bg-primary rounded-pill">12</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ReportsPage;