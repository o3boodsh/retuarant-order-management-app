import React from "react";

const EditItemModal = ({ selectedItem, onChange, onClose, onSave }) => {
    if (!selectedItem) return null;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Item</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control mb-2"
                            name="name"
                            value={selectedItem.name}
                            onChange={onChange} />
                        <input type="number" className="form-control mb-2"
                            name="price"
                            value={selectedItem.price}
                            onChange={onChange} />
                        <textarea className="form-control mb-2"
                            name="description"
                            value={selectedItem.description}
                            onChange={onChange}></textarea>
                        <input type="text" className="form-control mb-2"
                            name="category"
                            value={selectedItem.category}
                            onChange={onChange} />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button className="btn btn-primary" onClick={onSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItemModal;
