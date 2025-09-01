import { Outlet } from "react-router-dom";
import Header from "../Components/AdminPage/Header";
import NavBar from "../Components/AdminPage/NavBar";
import '../Resources/css/style.css';

const AdminPage = () => {
    return (
        <>
            <div id="admin-page" className="page">
                <NavBar />
                <div className="main-content">
                    <Header />
                    {/* main content */}
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AdminPage;