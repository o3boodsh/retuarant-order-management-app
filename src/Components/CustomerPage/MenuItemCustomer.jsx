import { Fragment } from "react";

const MenuItemCustomer = (props) => {
    return (
        <Fragment>
            <div className="menu-item">
                <div className="item-category-badge">{props.category}</div>
                <img src={props.image} alt="Pasta" className="item-image" />
                <div className="item-details">
                    <h3 className="item-name">{props.name}</h3>
                    <p className="item-description">{props.description}</p>
                    <div className="item-footer">
                        <span className="item-price">${props.price}</span>
                        <button className="add-to-cart-btn" onClick={props.addToCartHandler}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuItemCustomer;