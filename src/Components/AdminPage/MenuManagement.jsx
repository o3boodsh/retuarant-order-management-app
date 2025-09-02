import { Fragment } from "react";
import '../../Resources/css/style.css';
import TextAreaForm from "./adminComponents/TextAreaForm";
import InputForm from "./adminComponents/InputForm";
import MenuManagementController from "../../Controller/MenuManagementController";

const MenuManagement = () => {
    let menuManagementController = new MenuManagementController();

    return (
        <Fragment >
            <h3 className="mb-4"><i className="fas fa-utensils me-2"></i>Menu Management</h3>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Add New Menu Item</h5>

                    <form onSubmit={menuManagementController.onSubmitHandler} id="menuForm" className="row g-3">
                        <InputForm type="text" placeholder="Item Name" name="Item Name" ref={menuManagementController.nameRef} id="itemName" />
                        <InputForm type="number" placeholder="Price" name="Price ($)" ref={menuManagementController.priceRef} id="itemPrice" />
                        <TextAreaForm placeholder="Description" name="Description" ref={menuManagementController.descriptionRef} />

                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="itemCategory" ref={menuManagementController.categoryRef}>
                                    <option value="">Select Category</option>
                                    <option value="appetizer">Appetizers</option>
                                    <option value="main">Main Courses</option>
                                    <option value="dessert">Desserts</option>
                                    <option value="beverage">Beverages</option>
                                </select>
                                <label htmlFor="itemCategory">Category</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="itemStatus" ref={menuManagementController.statusRef}>
                                    <option value="available">Available</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                                <label htmlFor="itemStatus">Status</label>
                            </div>
                        </div>
                        <InputForm type="file" name="Item Image" ref={menuManagementController.imageRef} id="itemImage" />

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
                        {/* Cards of items */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuManagement;