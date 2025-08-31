import { Fragment } from "react";

const Orders = () => {
    return (
        <Fragment>
            <div id="orders" className="section">
                <h3 className="mb-4"><i className="fas fa-clipboard-list me-2"></i>Recent Orders</h3>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Items</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#101</td>
                                        <td>John Doe</td>
                                        <td>2</td>
                                        <td>$45.50</td>
                                        <td><span className="badge bg-success">Completed</span></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary btn-action"><i
                                                className="fas fa-eye"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#102</td>
                                        <td>Mary Jane</td>
                                        <td>3</td>
                                        <td>$62.75</td>
                                        <td><span className="badge bg-warning text-dark">Pending</span></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary btn-action"><i
                                                className="fas fa-eye"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#103</td>
                                        <td>James Smith</td>
                                        <td>1</td>
                                        <td>$24.99</td>
                                        <td><span className="badge bg-success">Completed</span></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary btn-action"><i
                                                className="fas fa-eye"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Orders;