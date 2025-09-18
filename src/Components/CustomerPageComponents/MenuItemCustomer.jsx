import { Fragment, useState } from "react";

const MenuItemCustomer = (props) => {
    const [specialInstructions, setSpecialInstructions] = useState("");

    const handleAddToCart = () => {
        props.addToCartHandler({
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            category: props.category,
            quantity: 1, // الكمية دائماً 1 عند الإضافة
            specialInstructions: specialInstructions // التعليمات الخاصة
        });
        setSpecialInstructions(""); // مسح الحقل بعد الإضافة
    };

    return (
        <Fragment>
            <div className="menu-item">
                <div className="item-category-badge">{props.category}</div>
                <img src={props.image} alt={props.name} className="item-image" />
                <div className="item-details">
                    <h3 className="item-name">{props.name}</h3>
                    <p className="item-description">{props.description}</p>

                    {/* حقل التعليمات الخاصة */}
                    <div className="special-instructions-input">
                        <input
                            type="text"
                            placeholder="Special instructions (optional)"
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            className="instructions-input"
                        />
                    </div>

                    <div className="item-footer">
                        <span className="item-price">${props.price}</span>
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            <i className="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuItemCustomer;