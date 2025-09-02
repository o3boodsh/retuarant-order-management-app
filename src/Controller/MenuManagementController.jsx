import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import ItemMenu from "../Model/ItemMenu";
import RestuarantContext from "../Context/restuarant-context";

class MenuManagementController {
    nameRef = useRef();
    priceRef = useRef();
    descriptionRef = useRef();
    categoryRef = useRef();
    statusRef = useRef();
    imageRef = useRef();
    itemContext = useContext(RestuarantContext);

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.addNewItem();
    }

    addNewItem = () => {
        if (this.checkForm()) {
            const newItemObject = this.newItem;
            this.itemContext.addNewItemMenu(newItemObject);
            console.log(newItemObject);
            console.log(this.itemContext.menuItem);
            this.clear();
        }
    }

    checkForm = () => {
        if (this.nameRef.current.value !== "" && this.priceRef.current.value !== "" && this.descriptionRef.current.value !== "" && this.categoryRef.current.value !== "" && this.statusRef.current.value !== "" && this.imageRef.current.value !== "") {
            this.showAlert("successfully!", "Item added successfully", "success");
            return true;
        }
        this.showAlert("Data is missing!", "The entered data is incomplete.", "error");
    }

    showAlert = (titel, text, icon) => {
        Swal.fire({
            title: titel,
            text: text,
            icon: icon,
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    clear = () => {
        this.nameRef.current.value = "";
        this.priceRef.current.value = "";
        this.descriptionRef.current.value = "";
        this.categoryRef.current.value = "";
        this.statusRef.current.value = "";
        this.imageRef.current.value = "";

    }
    get newItem() {
        return new ItemMenu(
            Math.random(),
            this.nameRef.current.value,
            this.priceRef.current.value,
            this.descriptionRef.current.value,
            this.categoryRef.current.value,
            this.statusRef.current.value,
            this.imageRef.current.files[0]
            );
    }
}

export default MenuManagementController;