import { Fragment } from "react";

const Item = (props) => {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card item card">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {"$" + props.price}
                        </h6>
                        <span>{props.category}</span>
                        <hr />
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-primary"
                                onClick={() => props.onEdit(props.id)}>
                                <i className="fas fa-edit me-1"></i>Edit
                            </button>
                            <button className="btn btn-sm btn-danger"
                                onClick={() => props.onDelete(props.id)}>
                                <i className="fas fa-trash me-1"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Item;
