import { Fragment, useContext } from "react";
import RestuarantContext from "../../Context/restuarant-context";
import StaffManagementController from "../../Controller/StaffManagementController";
import Staff from "./adminComponents/Staff";

const StaffManagementPage = () => {
    let staffManagementController = new StaffManagementController();
    let restuarantContext = useContext(RestuarantContext);
    return (
        <Fragment>
            <h3 className="mb-4"><i className="fas fa-users me-2"></i>Staff Management</h3>
            <div className="card p-4 shadow-sm">
                <h5 className="card-header bg-transparent mb-3">Add New Staff</h5>
                <form id="staffForm" className="row g-3" onSubmit={staffManagementController.onSubmitHandler}>
                    <div className="form-outline mb-4">
                        <label className="form-label">Staff Category</label>
                        <select id="input-tags" ref={staffManagementController.staffCategoryRef}
                            className="form-control">
                            <option value="1">Cheff</option>
                            <option value="2" >Waiter</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="staffName" placeholder="Chef Name"
                                ref={staffManagementController.staffNameRef}
                            />

                            <label htmlFor="staffName">Staf Name</label>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text"
                                className="form-control"
                                id="staffId" placeholder="Chef ID"
                                ref={staffManagementController.staffIdRef} />
                            <label htmlFor="staffId">Staff ID</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="staffPassword"
                                placeholder="Password" ref={staffManagementController.staffPasswordRef} />
                            <label htmlFor="staffPassword">Password</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success btn-action"><i
                            className="fas fa-plus-circle me-1"></i> Add Staff</button>
                    </div>
                </form>
                <hr />
                <h5 className="card-header bg-transparent mb-3">Staff List</h5>
                <ul id="staffList" className="list-group"></ul>
            </div>

            {restuarantContext.staffs.map((element) =>
                <Staff
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    password={element.password}
                    category={element.category}
                />
            )}
        </Fragment>
    );
}

export default StaffManagementPage;