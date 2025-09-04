import { Fragment, useContext, useEffect, useState } from "react";
import RestuarantContext from "../../Context/restuarant-context";
import StaffManagementController from "../../Controller/StaffManagementController";
import Staff from "./adminComponents/Staff";

const StaffManagementPage = () => {
    let staffManagementController = new StaffManagementController();
    let restuarantContext = useContext(RestuarantContext);

    const [loading, setLoading] = useState(true);

    // const [loading, setLoading] = useState(true);
    // const [showModal, setShowModal] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            await staffManagementController.fetchStaffFromFirebase();
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    // const handleDelete = (id) => {
    //     menuManagementController.deleteItemFromFirebase(id);
    // };

    // const handleEdit = (id) => {
    //     const item = restuarantContext.menuItem.find(i => i.id === id);
    //     setSelectedItem(item);
    //     setShowModal(true);
    // };

    // const handleChange = (e) => {
    //     setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
    // };

    // const handleSave = () => {
    //     menuManagementController.updateItemInFirebase(selectedItem.id, selectedItem);
    //     setShowModal(false);
    // };

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

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restuarantContext.staffs.map((staff) => (
                            <tr key={staff.id}>
                                <td>{staff.id}</td>
                                <td>{staff.name}</td>
                                <td>{staff.password}</td>
                                <td>{staff.category}</td>
                                        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => staffManagementController.deleteStaffFromFirebase(staff.id)}
          >
            <i className="fas fa-trash-alt"></i> Delete
          </button>
        </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>



        </Fragment>
    );
}

export default StaffManagementPage;