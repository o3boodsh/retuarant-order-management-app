import { useRef, useContext } from "react";
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
    FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";


    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.checkForm()) {
            const newItemObject = this.getNewItem;
            // this.itemContext.addNewItemMenu(newItemObject);
            this.clearForm();
            this.saveItemsOnFirebase(newItemObject);
            console.log(this.itemContext.menuItem);
            this.fetchItemsMenuFromFirebase();
        }
    }

    saveItemsOnFirebase = (newItem) => {
        fetch(`${this.FIREBASE_DB_URL}/menuItems.json`,
            {
                method: "POST",
                body: JSON.stringify(newItem),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
            // newItem.id = result["name"];
            newItem.id = result.name;
            this.itemContext.addNewItemMenu(newItem);
        }).catch((error) => {
            console.log(error);
        });
    }

    fetchItemsMenuFromFirebase = () => {
        fetch(`${this.FIREBASE_DB_URL}/menuItems.json`,
            {
                method: "GET",
            }
        ).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
            let fbItems = [];
            for (let key in result) {
                let item = new ItemMenu(
                    result[key].id,
                    result[key].name,
                    result[key].price,
                    result[key].description,
                    result[key].category,
                    result[key].status,
                    result[key].image,
                );
                item.id = key;
                fbItems.unshift(item);
            }
            console.log(fbItems);
            this.itemContext.setMenuItemsFromFB(fbItems);
        }).catch((error) => {
            console.log(error)
        }
        );
    }

    returnItems = async () => {
        this.fetchItemsMenuFromFirebase();
        return this.itemContext.menuItem;
    }

    showAlert = (title, text, icon) => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    checkForm = () => {
        if (this.nameRef.current?.value &&
            this.priceRef.current?.value &&
            this.descriptionRef.current?.value &&
            this.categoryRef.current?.value &&
            this.statusRef.current?.value &&
            this.imageRef.current?.value) {
            this.showAlert("Successfully!", "Item added successfully", "success");
            return true;
        }
        this.showAlert("Data is missing!", "The entered data is incomplete.", "error");
        return false;
    }

    clearForm = () => {
        if (this.nameRef.current) this.nameRef.current.value = "";
        if (this.priceRef.current) this.priceRef.current.value = "";
        if (this.descriptionRef.current) this.descriptionRef.current.value = "";
        if (this.categoryRef.current) this.categoryRef.current.value = "";
        if (this.statusRef.current) this.statusRef.current.value = "available";
        if (this.imageRef.current) this.imageRef.current.value = "";
    }

    get getNewItem() {
        return new ItemMenu(
            Math.random(),
            this.nameRef.current?.value || "",
            this.priceRef.current?.value || "",
            this.descriptionRef.current?.value || "",
            this.categoryRef.current?.value || "",
            this.statusRef.current?.value || "available",
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/d1a7/live/173b2380-47d2-11ee-9b58-cb80889117a8.jpg.webp"
        );
    }
        // delete item :
        deleteItemFromFirebase = async (id) => {
        try {
            await fetch(`${this.FIREBASE_DB_URL}/menuItems/${id}.json`, {
                method: "DELETE",
            });
            this.showAlert("Deleted!", "Item deleted successfully", "success");

            // بعد الحذف، حدّث البيانات
            this.fetchItemsMenuFromFirebase();
        } catch (error) {
            console.error("Error deleting item:", error);
            this.showAlert("Error!", "Failed to delete item", "error");
        }
    }
    
    // update item
        updateItemInFirebase = async (id, updatedData) => {
        try {
            await fetch(`${this.FIREBASE_DB_URL}/menuItems/${id}.json`, {
                method: "PATCH",
                body: JSON.stringify(updatedData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            this.showAlert("Updated!", "Item updated successfully", "success");

            // بعد التعديل، رجّع القائمة من Firebase
            this.fetchItemsMenuFromFirebase();
        } catch (error) {
            console.error("Error updating item:", error);
            this.showAlert("Error!", "Failed to update item", "error");
        }
    }

     


}

export default MenuManagementController;


// const MenuManagementController = () => {
//     const nameRef = useRef();
//     const priceRef = useRef();
//     const descriptionRef = useRef();
//     const categoryRef = useRef();
//     const statusRef = useRef();
//     const imageRef = useRef();
//     const itemContext = useContext(RestuarantContext);

//     // رابط قاعدة البيانات
//     const FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";

//     const showAlert = useCallback((title, text, icon) => {
//         Swal.fire({
//             title: title,
//             text: text,
//             icon: icon,
//             showCancelButton: false,
//             showCloseButton: false,
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     }, []);

//     const checkForm = useCallback(() => {
//         if (nameRef.current?.value &&
//             priceRef.current?.value &&
//             descriptionRef.current?.value &&
//             categoryRef.current?.value &&
//             statusRef.current?.value &&
//             imageRef.current?.value) {
//             showAlert("Successfully!", "Item added successfully", "success");
//             return true;
//         }
//         showAlert("Data is missing!", "The entered data is incomplete.", "error");
//         return false;
//     }, [showAlert]);

//     const uploadImageToFirebaseStorage = useCallback(async (imageFile) => {
//         // محاكاة رفع الصورة (استبدل هذا بالكود الحقيقي)
//         return "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/d1a7/live/173b2380-47d2-11ee-9b58-cb80889117a8.jpg.webp";
//     }, []);

//     const uploadItemToFirebase = useCallback(async (item) => {
//         try {
//             let imageUrl = item.image;
//             if (item.image instanceof File) {
//                 imageUrl = await uploadImageToFirebaseStorage(item.image);
//             }

//             const response = await fetch(`${FIREBASE_DB_URL}/menuItems.json`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     id: item.id,
//                     name: item.name,
//                     price: item.price,
//                     description: item.description,
//                     category: item.category,
//                     status: item.status,
//                     image: imageUrl
//                 })
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to upload data to Firebase');
//             }

//             const data = await response.json();
//             console.log('Data uploaded successfully:', data);
//             showAlert("Success!", "Data uploaded to Firebase successfully", "success");
//             return true;

//         } catch (error) {
//             console.error('Upload error:', error);
//             showAlert("Error!", "Failed to upload data to Firebase", "error");
//             return false;
//         }
//     }, [FIREBASE_DB_URL, showAlert, uploadImageToFirebaseStorage]);

//     const fetchItemsFromFirebase = useCallback(async () => {
//         try {
//             const response = await fetch(`${FIREBASE_DB_URL}/menuItems.json`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data from Firebase');
//             }

//             const data = await response.json();
//             const itemsArray = [];

//             for (const key in data) {
//                 if (data.hasOwnProperty(key)) {
//                     itemsArray.push({
//                         firebaseId: key,
//                         ...data[key],
//                     });
//                 }
//             }

//             console.log('Data fetched successfully:', itemsArray);
//             return itemsArray;

//         } catch (error) {
//             console.error('Fetch error:', error);
//             showAlert("Error!", "Failed to fetch data from Firebase", "error");
//             return [];
//         }
//     }, [FIREBASE_DB_URL, showAlert]);

//     const clearForm = useCallback(() => {
//         if (nameRef.current) nameRef.current.value = "";
//         if (priceRef.current) priceRef.current.value = "";
//         if (descriptionRef.current) descriptionRef.current.value = "";
//         if (categoryRef.current) categoryRef.current.value = "";
//         if (statusRef.current) statusRef.current.value = "available";
//         if (imageRef.current) imageRef.current.value = "";
//     }, []);

//     const getNewItem = useCallback(() => {
//         return new ItemMenu(
//             Math.random(),
//             nameRef.current?.value || "",
//             priceRef.current?.value || "",
//             descriptionRef.current?.value || "",
//             categoryRef.current?.value || "",
//             statusRef.current?.value || "available",
//             imageRef.current?.files?.[0] || null
//         );
//     }, []);

//     const onSubmitHandler = useCallback(async (event, onItemAdded) => {
//         event.preventDefault();

//         if (checkForm()) {
//             const newItemObject = getNewItem();
//             itemContext.addNewItemMenu(newItemObject);
//             clearForm();
//             // رفع البيانات إلى Firebase
//             const success = await uploadItemToFirebase(newItemObject);
//             if (success && onItemAdded) {
//                 onItemAdded(); // استدعاء callback التحديث
//             }
//         }
//     }, [checkForm, getNewItem, itemContext, uploadItemToFirebase, clearForm]);

//     return {
//         nameRef,
//         priceRef,
//         descriptionRef,
//         categoryRef,
//         statusRef,
//         imageRef,
//         onSubmitHandler,
//         fetchItemsFromFirebase,
//     };
// };

// export default MenuManagementController;