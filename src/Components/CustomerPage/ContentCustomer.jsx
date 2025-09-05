import { Fragment, useContext, useEffect, useState } from "react";
import CustomerPageController from "../../Controller/CustomerPageController";
import MenuItemCustomer from "./MenuItemCustomer";
import OrderContext from "../../Context/order-context";
import Order from "../../Model/Order";

const ContentCustomer = () => {
    const { items, loading, error, fetchItemsMenu } = CustomerPageController();
    const [filteredItems, setFilteredItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const oreder = new Order();

    useEffect(() => {
        filterItemsByCategory(activeCategory);
    }, [items, activeCategory]);

    const filterItemsByCategory = (category) => {
        if (category === "all") {
            setFilteredItems(items);
        } else if (category === "mains") {
            setFilteredItems(items.filter(item => item.category === category));
        } else if (category === "appetizers") {
            setFilteredItems(items.filter(item => item.category === category));
        } else if (category === "desserts") {
            setFilteredItems(items.filter(item => item.category === category));
        } else if (category === "drinks") {
            setFilteredItems(items.filter(item => item.category === category));
        }
        else {
            setFilteredItems(items.filter(item => item.category === category));
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    // const addToCartHandler = (element) => {
    //     return () => {
    //         // إذا لم يكن هناك طلب، إنشاء طلب جديد
    //         if (!orderContext.order) {
    //             orderContext.setOrder(new Order());
    //         }

    //         // إنشاء نسخة جديدة من الطلب الحالي
    //         const currentOrder = orderContext.order || new Order();
    //         const newOrder = new Order(currentOrder.tableNumber, currentOrder.customerName);

    //         // نسخ جميع الخصائص من الطلب القديم
    //         Object.assign(newOrder, currentOrder);

    //         // إضافة العنصر الجديد
    //         newOrder.addItem(new ItemMenu(
    //             element.id,
    //             element.name,
    //             element.price,
    //             element.description,
    //             element.category,
    //             element.status,
    //             element.image
    //         ));

    //         // تحديث حالة الطلب في Context
    //         orderContext.setOrder(newOrder);
    //         console.log("Order updated:", newOrder);
    //         alert(`Added ${element.name} to cart! Total items: ${newOrder.getItemsCount()}`);
    //     };
    // };

    const addToCartHandler = () => {

     }

    if (loading) {
        return (
            <div className="container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading menu...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <div className="error-container">
                    <i className="fas fa-exclamation-triangle"></i>
                    <h3>Oops!</h3>
                    <p>{error}</p>
                    <button onClick={fetchItemsMenu} className="retry-btn">
                        <i className="fas fa-redo"></i>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="container">
                <div className="header">
                    <h1>Our Delicious Menu</h1>
                    <p>Choose from our selection of premium dishes</p>
                </div>

                <div className="category-filter">
                    <button
                        className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("all")}
                    >
                        All Items
                    </button>
                    <button
                        className={`category-btn ${activeCategory === "appetizers" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("appetizers")}
                    >
                        Appetizers
                    </button>
                    <button
                        className={`category-btn ${activeCategory === "mains" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("mains")}
                    >
                        Main Courses
                    </button>
                    <button
                        className={`category-btn ${activeCategory === "desserts" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("desserts")}
                    >
                        Desserts
                    </button>
                    <button
                        className={`category-btn ${activeCategory === "drinks" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("drinks")}
                    >
                        Drinks
                    </button>
                </div>

                <div className="menu-content">
                    {filteredItems.length === 0 ? (
                        <div className="empty-menu">
                            <i className="fas fa-utensils"></i>
                            <h3>Menu is Empty</h3>
                            <p>There are no items in the menu at the moment</p>
                        </div>
                    ) : (
                        <div className="menu-grid">
                            {filteredItems.map((element) => (
                                <MenuItemCustomer
                                    key={element.id}
                                    id={element.id}
                                    name={element.name}
                                    image={element.image}
                                    description={element.description}
                                    price={element.price}
                                    category={element.category}
                                    addToCartHandler={addToCartHandler(element)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default ContentCustomer;