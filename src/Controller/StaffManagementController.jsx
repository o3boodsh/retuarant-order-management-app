import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import RestuarantContext from "../Context/restuarant-context";
import Staff from "../Model/Staff";

class StaffManagementController {
    staffIdRef = useRef();
    staffNameRef = useRef();
    staffCategoryRef = useRef();
    staffPasswordRef = useRef();

    staffContext = useContext(RestuarantContext);
    FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";

onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.checkForm()) {
        const newStaffObject = this.newStaff;  // ✅ استدعاء صحيح
        this.clear();
        this.saveStaffOnFirebase(newStaffObject);
        this.fetchStaffFromFirebase();
    }
}

    
    saveStaffOnFirebase = (newStaff) => {
        fetch(`${this.FIREBASE_DB_URL}/staffs.json`,
            {
                method: "POST",
                body: JSON.stringify(newStaff),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
            // newItem.id = result["name"];
            newStaff.id = result.name;
            this.staffContext.addNewStaff(newStaff);
        }).catch((error) => {
            console.log(error);
        });
    }
        fetchStaffFromFirebase = () => {
        fetch(`${this.FIREBASE_DB_URL}/staffs.json`,
            {
                method: "GET",
            }
        ).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
            let fbStaffs = [];
            for (let key in result) {
                let staff = new Staff(
                    result[key].id,
                    result[key].name,
                    result[key].password,
                    result[key].category,
                );
                staff.id = key;
                fbStaffs.unshift(staff);
            }
            this.staffContext.setStaffFromFB(fbStaffs);
        }).catch((error) => {
            console.log(error)
        }
        );
    }
        returnStsff = async () => {
        this.fetchStaffFromFirebase();
        return this.staffContext.staffs;
    }


deleteStaffFromFirebase = (id) => {

    // TO BE CONTENUED .....

        }


    addNewStaff = () => {
        if (this.checkForm()) {
            const newStaffObject = this.newStaff;
            this.staffContext.addNewStaff(newStaffObject);
            console.log(newStaffObject);
            // console.log(`The new item : ${this.newItem}`)
            console.log(this.staffContext.staffs);
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