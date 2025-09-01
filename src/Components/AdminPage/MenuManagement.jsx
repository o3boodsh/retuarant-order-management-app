import { Fragment } from "react";
import '../../Resources/css/style.css';

const MenuManagement = () => {
    let onSubmitHandler = (event) => {
        event.preventDefault();
        alert('Will Done');
    }
    return (
        <Fragment >
            <h3 className="mb-4"><i className="fas fa-utensils me-2"></i>Menu Management</h3>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Add New Menu Item</h5>
                    <form onSubmit={onSubmitHandler} id="menuForm" className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="itemName" placeholder="Item Name"
                                    required />
                                <label htmlhtmlFor="itemName">Item Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="number" className="form-control" id="itemPrice" placeholder="Price"
                                    step="0.01" required />
                                <label htmlhtmlFor="itemPrice">Price ($)</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <textarea className="form-control" id="itemDescription" placeholder="Description"
                                    // style="height: 100px" 
                                    required />
                                <label htmlhtmlFor="itemDescription">Description</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="itemCategory" required>
                                    <option value="">Select Category</option>
                                    <option value="appetizer">Appetizers</option>
                                    <option value="main">Main Courses</option>
                                    <option value="dessert">Desserts</option>
                                    <option value="beverage">Beverages</option>
                                </select>
                                <label htmlhtmlFor="itemCategory">Category</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="itemStatus" required>
                                    <option value="available">Available</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                                <label htmlhtmlFor="itemStatus">Status</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlhtmlFor="itemImage" className="form-label">Item Image</label>
                            {/* <div className="image-preview-container" id="imagePreviewContainer">
                                <div className="upload-placeholder">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <p>Click to upload or drag and drop</p>
                                </div>
                                <img className="image-preview" id="imagePreview" src="" alt="Preview" />
                            </div> */}
                            <input className="form-control" type="file" id="itemImage" accept="image/*" required
                            // style="display: none;"
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success btn-action">
                                <i className="fas fa-plus-circle me-1"></i> Add Item</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                    <h5 className="mb-0">Menu Items</h5>
                </div>
                <div className="card-body">
                    <div className="row" id="menuItems">
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuManagement;