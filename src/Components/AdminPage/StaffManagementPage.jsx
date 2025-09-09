import { Fragment, useContext, useEffect, useState, useRef } from "react";
import RestuarantContext from "../../Context/restuarant-context";
import { useStaffManagement } from "../../Controller/StaffManagementController";

const StaffManagementPage = () => {
    const staffIdRef = useRef();
    const staffNameRef = useRef();
    const staffCategoryRef = useRef();
    const staffPasswordRef = useRef();
    
    const restuarantContext = useContext(RestuarantContext);
    const {
        saveStaffOnFirebase,
        fetchStaffFromFirebase,
        deleteStaffFromFirebase,
        saveEditStaff,
        showAlert
    } = useStaffManagement();
    
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetchStaffFromFirebase();
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { 
        fetchData(); 
    }, []);

    const checkForm = () => {
        if (staffIdRef.current.value !== "" && 
            staffNameRef.current.value !== "" && 
            staffPasswordRef.current.value !== "" && 
            staffCategoryRef.current.value !== "") {
            return true;
        }
        showAlert("Data is missing!", "The entered data is incomplete.", "error");
        return false;
    };

    const clearForm = () => {
        staffIdRef.current.value = "";
        staffNameRef.current.value = "";
        staffPasswordRef.current.value = "";
        staffCategoryRef.current.value = "";
    };

    const handleStartEdit = (staff) => {
        setEditingStaff(staff);
        staffIdRef.current.value = staff.staffId;
        staffNameRef.current.value = staff.name;
        staffPasswordRef.current.value = staff.password;
        staffCategoryRef.current.value = staff.category;
        setEditing(true);
    };

    const cancelEdit = () => {
        clearForm();
        setEditingStaff(null);
        setEditing(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!checkForm()) return;
        
        const staffData = {
            staffId: staffIdRef.current.value,
            name: staffNameRef.current.value,
            password: staffPasswordRef.current.value,
            category: staffCategoryRef.current.value,
        };
        
        let success = false;
        
        if (editing) {
            success = await saveEditStaff(editingStaff, staffData);
        } else {
            success = await saveStaffOnFirebase(staffData);
        }
        
        if (success) {
            clearForm();
            setEditing(false);
            setEditingStaff(null);
            // إعادة تحميل البيانات من Firebase
            await fetchStaffFromFirebase();
        }
    };

    const handleDelete = async (staff) => {
        
            const success = await deleteStaffFromFirebase(staff.firebaseKey);
            if (success) {
                // إعادة تحميل البيانات من Firebase
                await fetchStaffFromFirebase();
            
        }
    };

    // دالة لتصحيح البيانات الموجودة في Firebase
    // const fixStaffData = async () => {
    //     if (window.confirm("This will fix staff data by reloading from Firebase. Continue?")) {
    //         setLoading(true);
    //         try {
    //             await fetchStaffFromFirebase();
    //             showAlert("Success!", "Staff data reloaded successfully", "success");
    //         } catch (error) {
    //             console.error("Error fixing data:", error);
    //             showAlert("Error!", "Failed to reload staff data", "error");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    return (
        <Fragment>
            <h3 className="mb-4"><i className="fas fa-users me-2"></i>Staff Management</h3>
            
            {/* <div className="alert alert-info d-flex justify-content-between align-items-center">
                <div>
                    <i className="fas fa-info-circle me-2"></i>
                    If staff IDs are not showing, click the button to reload data from Firebase.
                </div>
                <button className="btn btn-outline-info btn-sm" onClick={fixStaffData}>
                    <i className="fas fa-sync me-1"></i> Reload Data
                </button>
            </div> */}
            
            <div className="card p-4 shadow-sm">
                <h5 className="card-header bg-transparent mb-3">
                    {editing ? "Edit Staff" : "Add New Staff"}
                </h5>
                <form id="staffForm" className="row g-3" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label">Staff Category</label>
                        <select 
                            id="input-tags" 
                            ref={staffCategoryRef}
                            className="form-control"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Chef">Chef</option>
                            <option value="Waiter">Waiter</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="staffName" 
                                placeholder="Staff Name"
                                ref={staffNameRef}
                                required
                            />
                            <label htmlFor="staffName">Staff Name</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                type="text"
                                className="form-control"
                                id="staffId" 
                                placeholder="Staff ID"
                                ref={staffIdRef} 
                                required
                                // disabled={editing}
                            />
                            <label htmlFor="staffId">Staff ID</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="staffPassword"
                                placeholder="Password" 
                                ref={staffPasswordRef} 
                                required
                            />
                            <label htmlFor="staffPassword">Password</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success btn-action">
                            {editing ? "Save Changes" : <><i className="fas fa-plus-circle me-1"></i> Add Staff</>}
                        </button>
                        {editing && (
                            <button type="button" className="btn btn-secondary ms-2" onClick={cancelEdit}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
                
                <hr />
                
                <h5 className="card-header bg-transparent mb-3">Staff List</h5>
                
                {loading ? (
                    <div className="text-center py-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restuarantContext.staffs && restuarantContext.staffs.length > 0 ? (
                                restuarantContext.staffs.map((staff) => (
                                    <tr key={staff.firebaseKey}>
                                        <td>{staff.staffId || "N/A"}</td>
                                        <td>{staff.name || "N/A"}</td>
                                        <td>{staff.password || "N/A"}</td>
                                        <td>{staff.category || "N/A"}</td>
                                        <td>
                                            <button 
                                                className="btn btn-primary btn-sm me-2" 
                                                onClick={() => handleStartEdit(staff)}
                                            >
                                                <i className="fas fa-edit"></i> Edit
                                            </button>
                                            <button 
                                                className="btn btn-danger btn-sm" 
                                                onClick={() => handleDelete(staff)}
                                            >
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-3">No staff members found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </Fragment>
    );
};

export default StaffManagementPage;