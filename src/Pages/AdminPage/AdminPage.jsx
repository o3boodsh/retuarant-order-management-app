import { Outlet } from "react-router-dom";
import RestuarantContext from "../../Context/restuarant-context";
import { useState } from "react";
import Header from "../../Components/AdminPageComponents/Header";
import NavBar from "../../Components/AdminPageComponents/NavBar";
import '../../Resources/css/style.css';


const AdminPage = () => {
    let [menuItem, setMenuItem] = useState([]);
    const [staffs, setStaffs] = useState([]);
    let addNewItemMenu = (newItem) => {
        setMenuItem((prevItems) => {
            return [newItem, ...prevItems];
        });
    }

    let setMenuItemsFromFB = (fbItems) => {
        setMenuItem(fbItems);
    }

    let addNewStaff = (newStaff) => {
        setStaffs((prevStaff) => {
            return [newStaff, ...prevStaff];
        });
    }
    const setStaffFromFB = (fbStaffs) => {
        setStaffs(fbStaffs);
    };
    return (

        <RestuarantContext.Provider value={{
            menuItem: menuItem,
            addNewItemMenu: addNewItemMenu,
            setMenuItemsFromFB: setMenuItemsFromFB,
            staffs: staffs,
            addNewStaff: addNewStaff,
            setStaffFromFB: setStaffFromFB

        }}>
            <div id="admin-page" className="page">
                <NavBar />
                <div className="main-content">
                    <Header />
                    {/* main content */}
                    <Outlet />
                </div>
            </div>
        </RestuarantContext.Provider>

    );
}

export default AdminPage;