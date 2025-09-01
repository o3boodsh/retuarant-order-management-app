import { Fragment } from "react";

const StaffManagementPage = () => {
    return (
        <Fragment>
            <h3 className="mb-4"><i className="fas fa-users me-2"></i>Staff Management</h3>
            <div className="card p-4 shadow-sm">
                <h5 className="card-header bg-transparent mb-3">Add New Chef</h5>
                <form id="staffForm" className="row g-3">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="staffName" placeholder="Chef Name"
                                required />
                            <label htmlFor="staffName">Chef Name</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="staffId" placeholder="Chef ID" required />
                            <label htmlFor="staffId">Chef ID</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="staffPassword"
                                placeholder="Password" required />
                            <label htmlFor="staffPassword">Password</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-success btn-action"><i
                            className="fas fa-plus-circle me-1"></i> Add Chef</button>
                    </div>
                </form>
                <hr />
                <h5 className="card-header bg-transparent mb-3">Staff List</h5>
                <ul id="staffList" className="list-group"></ul>
            </div>
        </Fragment>
    );
}

export default StaffManagementPage;