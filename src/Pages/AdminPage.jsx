import { Outlet } from "react-router-dom";
import SlideBar from "../Components/AdminPage/SlideBar";
import Header from "../Components/AdminPage/Header";

const AdminPage = () => {
    return (
        <>

            <div id="admin-page" className="page">
                <SlideBar />
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