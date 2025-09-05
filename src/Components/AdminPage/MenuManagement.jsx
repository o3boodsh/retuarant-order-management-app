import { Fragment, useContext, useEffect, useState } from "react";
import '../../Resources/css/style.css';
import MenuManagementController from "../../Controller/MenuManagementController";
import Item from "./adminComponents/Item";
import TextAreaForm from "./adminComponents/TextAreaForm";

import InputForm from "./adminComponents/InputForm";

import RestuarantContext from "../../Context/restuarant-context";
import EditItemModal from "./adminComponents/EditItem";


const MenuManagement = () => {
    let menuManagementController = new MenuManagementController();
    let restuarantContext = useContext(RestuarantContext);

    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            await menuManagementController.fetchItemsMenuFromFirebase();
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    const handleDelete = (id) => {
        menuManagementController.deleteItemFromFirebase(id);
    };

    const handleEdit = (id) => {
        const item = restuarantContext.menuItem.find(i => i.id === id);
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleChange = (e) => {
        setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        menuManagementController.updateItemInFirebase(selectedItem.id, selectedItem);
        setShowModal(false);
    };

    return (
        <Fragment>

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
                                    <option value="appetizers">Appetizers</option>
                                    <option value="mains">Main Courses</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="drinks">Beverages</option>
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
                                <i className="fas fa-plus-circle me-1"></i> Add Item
                            </button>
                        </div>
                    </form>
                    <div style={{ borderTop: "2px solid #dee2e6", margin: "2rem 0" }}></div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="row" id="menuItems">
                            {restuarantContext.menuItem.map((element) =>
                                <Item
                                    key={element.id}
                                    id={element.id}
                                    name={element.name}
                                    image={element.image}
                                    price={element.price}
                                    category={element.category}
                                    description={element.description}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Bootstrap Modal
            {showModal && selectedItem && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Item</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control mb-2"
                                    name="name"
                                    value={selectedItem.name}
                                    onChange={handleChange} />
                                <input type="number" className="form-control mb-2"
                                    name="price"
                                    value={selectedItem.price}
                                    onChange={handleChange} />
                                <textarea className="form-control mb-2"
                                    name="description"
                                    value={selectedItem.description}
                                    onChange={handleChange}></textarea>
                                <input type="text" className="form-control mb-2"
                                    name="category"
                                    value={selectedItem.category}
                                    onChange={handleChange} />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            {/* {  :) showModal  شغل شات تسألنيش ليش} */}
            {showModal && (
                <EditItemModal
                    selectedItem={selectedItem}
                    onChange={handleChange}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                />
            )}
        </Fragment>
    );
};

export default MenuManagement;
