class ItemMenu {
    id;
    name;
    price;
    description;
    category;
    status;
    image;

    constructor(id, name, price, description, category, status, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.status = status;
        this.image = image;
    }
}

export default ItemMenu;