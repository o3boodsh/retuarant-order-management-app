import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import RestuarantContext from "../Context/restuarant-context";
import Staff from "../Model/Staff";

class StaffManagementController {
    staffIdRef = useRef();
    staffNameRef = useRef();
    staffCategoryRef = useRef();
    staffPasswordRef = useRef();

    itemContext = useContext(RestuarantContext);

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.addNewStaff();
    }

    addNewStaff = () => {
        if (this.checkForm()) {
            const newStaffObject = this.newStaff;
            this.itemContext.addNewStaff(newStaffObject);
            console.log(newStaffObject);
            // console.log(`The new item : ${this.newItem}`)
            console.log(this.itemContext.staffs);
            this.clear();
        }
    }

    checkForm = () => {
        if (this.staffIdRef.current.value !== "" && this.staffNameRef.current.value !== "" && this.staffPasswordRef.current.value !== "" && this.staffCategoryRef.current.value !== "") {
            this.showAlert("successfully!", "Staff added successfully", "success");
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
        this.staffIdRef.current.value = "";
        this.staffNameRef.current.value = "";
        this.staffPasswordRef.current.value = "";
        this.staffCategoryRef.current.value = "";

    }
    get newStaff() {
        return new Staff(
            this.staffIdRef.current.value,
            this.staffNameRef.current.value,
            this.staffPasswordRef.current.value,
            this.staffCategoryRef.current.value,
        );
    }
}

export default StaffManagementController;