import { Fragment } from "react";

const CartItem = (props) => {
    return (
        <Fragment>
            <div className="card" data-category="mains" id={props.id}>
                <div className="card-image">
                    <img src={props.image}
                        alt="error in loaging image" />
                    <div className="item-badge">{props.category}</div>
                </div>
                <div className="card-content">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-description">{props.description}</p>

                    <div className="card-footer_1">
                        <div className="price">{props.price}</div>
                        <button className="add-to-cart"
                            onClick={props.onAddToCart}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CartItem;