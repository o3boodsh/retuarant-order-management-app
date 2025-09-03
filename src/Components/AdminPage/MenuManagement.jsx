import { Fragment, useEffect, useState } from "react";
import '../../Resources/css/style.css';
import TextAreaForm from "./adminComponents/TextAreaForm";
import InputForm from "./adminComponents/InputForm";
import MenuManagementController from "../../Controller/MenuManagementController";
import Item from "./adminComponents/Item";

const MenuManagement = () => {
    const {
        nameRef,
        priceRef,
        descriptionRef,
        categoryRef,
        statusRef,
        imageRef,
        onSubmitHandler,
        fetchItemsFromFirebase,
    } = MenuManagementController();

    const [firebaseItems, setFirebaseItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // دالة لاسترجاع البيانات من Firebase
    const fetchData = async () => {
        setLoading(true);
        try {
            const items = await fetchItemsFromFirebase();
            setFirebaseItems(items);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    // handler للإضافة مع التحديث التلقائي
    const handlerSubmit = async (event) => {
        //passing fetchdata as a callBack
        await onSubmitHandler(event, fetchData);
    };

    //callback of data when loading page for once time. 
    useEffect(() => { fetchData(); }, []);

    return (
        <Fragment >
            <h3 className="mb-4"><i className="fas fa-utensils me-2"></i>Menu Management</h3>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Add New Menu Item</h5>

                    <form onSubmit={handlerSubmit} id="menuForm" className="row g-3">
                        <InputForm type="text" placeholder="Item Name" name="Item Name" ref={nameRef} id="itemName" />
                        <InputForm type="number" placeholder="Price" name="Price ($)" ref={priceRef} id="itemPrice" />
                        <TextAreaForm placeholder="Description" name="Description" ref={descriptionRef} />

                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="itemCategory" ref={categoryRef}>
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
                                <select className="form-select" id="itemStatus" ref={statusRef}>
                                    <option value="available">Available</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                                <label htmlFor="itemStatus">Status</label>
                            </div>
                        </div>
                        <InputForm type="file" name="Item Image" ref={imageRef} id="itemImage" />

                        <div className="col-12">
                            <button type="submit" className="btn btn-success btn-action">
                                <i className="fas fa-plus-circle me-1"></i> Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Menu Items</h5>
                    <button
                        className="btn btn-sm btn-outline-light"
                        onClick={fetchData}
                        disabled={loading}
                    >
                        <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-sync-alt'} me-1`}></i>
                        Refresh
                    </button>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-2">Loading menu items...</p>
                        </div>
                    ) : firebaseItems.length === 0 ? (
                        <div className="text-center py-4">
                            <i className="fas fa-utensils fa-3x text-muted mb-3"></i>
                            <p className="text-muted">No menu items found. Add your first item!</p>
                        </div>
                    ) : (<div className="row" id="menuItems">
                        {firebaseItems.map((element) =>
                            <Item
                                key={element.firebaseId || element.id}
                                id={element.firebaseId || element.id}
                                name={element.name}
                                image={element.image}
                                price={element.price}
                                category={element.category}
                                description={element.description}
                                status={element.status}
                            />
                        )}
                    </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default MenuManagement;