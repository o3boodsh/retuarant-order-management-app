import { useContext } from "react";
import Swal from "sweetalert2";
import RestuarantContext from "../Context/restuarant-context";

export const useStaffManagement = () => {
    const staffContext = useContext(RestuarantContext);
    const FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";

    const saveStaffOnFirebase = (newStaff) => {
        return fetch(`${FIREBASE_DB_URL}/staffs.json`, {
            method: "POST",
            body: JSON.stringify(newStaff),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((result) => {
            // Add the Firebase-generated key to the data
            const staffWithKey = {
                ...newStaff,
                firebaseKey: result.name
            };
            staffContext.addNewStaff(staffWithKey);
            showAlert("Success!", "Staff added successfully", "success");
            return true;
        })
        .catch((error) => {
            console.log(error);
            showAlert("Error!", "Failed to add staff", "error");
            return false;
        });
    };

    const fetchStaffFromFirebase = () => {
        return fetch(`${FIREBASE_DB_URL}/staffs.json`, { method: "GET" })
            .then((response) => response.json())
            .then((result) => {
                let fbStaffs = [];
                for (let key in result) {
                    if (result[key]) { // Ensure data exists
                        let staff = {
                            staffId: result[key].staffId || "", // Use default value if not exists
                            name: result[key].name || "",
                            password: result[key].password || "",
                            category: result[key].category || "",
                            firebaseKey: key
                        };
                        fbStaffs.unshift(staff);
                    }
                }
                staffContext.setStaffFromFB(fbStaffs);
                return fbStaffs;
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    };

    const deleteStaffFromFirebase = async (id, staffName) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to recover staff member "${staffName}"!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });
        
        // If user didn't confirm, exit the function
        if (!result.isConfirmed) {
            return false;
        }
        
        try {
            const response = await fetch(`${FIREBASE_DB_URL}/staffs/${id}.json`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Failed to delete staff with id ${id}`);
            }

            const updatedStaffs = staffContext.staffs.filter(staff => staff.firebaseKey !== id);
            staffContext.setStaffFromFB(updatedStaffs);
            showAlert("Deleted!", "Staff has been deleted successfully.", "success");
            return true;
        } catch (error) {
            console.error(error);
            showAlert("Error!", "Failed to delete staff. Please try again.", "error");
            return false;
        }
    };

    const saveEditStaff = (editingStaff, updatedStaff) => {
        return fetch(`${FIREBASE_DB_URL}/staffs/${editingStaff.firebaseKey}.json`, {
            method: "PUT",
            body: JSON.stringify(updatedStaff),
            headers: { "Content-Type": "application/json" },
        })
        .then(() => {
            // Update the list locally
            const updatedStaffs = staffContext.staffs.map(staff =>
                staff.firebaseKey === editingStaff.firebaseKey
                    ? { ...updatedStaff, firebaseKey: editingStaff.firebaseKey }
                    : staff
            );
            staffContext.setStaffFromFB(updatedStaffs);
            showAlert("Success!", "Staff updated successfully", "success");
            return true;
        })
        .catch((error) => {
            console.error(error);
            showAlert("Error!", "Failed to update staff", "error");
            return false;
        });
    };

    const showAlert = (title, text, icon) => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return {
        saveStaffOnFirebase,
        fetchStaffFromFirebase,
        deleteStaffFromFirebase,
        saveEditStaff,
        showAlert
    };
};