import { Outlet } from "react-router-dom";
import Header from "../Components/AdminPage/Header";
import NavBar from "../Components/AdminPage/NavBar";
import '../Resources/css/style.css';
import RestuarantContext from "../Context/restuarant-context";
import { useState } from "react";

const AdminPage = () => {
        let [menuItem, setMenuItem] = useState([]);
        let[staff,setStaff]=useState([]);
    
        let addNewItemMenu = (newItem) => {
            setMenuItem((prevItems) => {
                return [newItem, ...prevItems];
            });
        }
        let addNewStaff = (newStaff) => {
            setStaff((prevStaff) => {
                return [newStaff, ...prevStaff];
            });
        }
    return (

          <RestuarantContext.Provider value={{
            menuItem:menuItem,
            addNewItemMenu:addNewItemMenu,
            staff:staff,
            addNewStaff:addNewStaff
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