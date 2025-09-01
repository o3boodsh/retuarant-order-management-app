import { Navigate, Route, Routes } from "react-router-dom";
import RoleSelectionPage from "../Pages/RoleSelectionPage";
import CustomerPage from "../Pages/CustomerPage";
import AdminPage from "../Pages/AdminPage";
import StaffLoginPage from "../Pages/StaffLoginPage";
import DashBoard from "../Components/AdminPage/DashBoard";
import MenuManagement from "../Components/AdminPage/MenuManagement";
import Orders from "../Components/AdminPage/Orders";
import ReportsPage from "../Components/AdminPage/ReportsPage";
import StaffManagementPage from "../Components/AdminPage/StaffManagementPage";
import CustomerLogin from "../Pages/CustomerLogin";
import CheffPage from "../Pages/CheffPage";
import WaiterPage from "../Pages/WaiterPage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/role-selecttion" />} />
            <Route path="/role-selecttion" element={<RoleSelectionPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cheff" element={<CheffPage />} />
            <Route path="/waiter" element={<WaiterPage />} />
            <Route path="/staff-login" element={<StaffLoginPage />} />
            <Route path="/customer-login" element={<CustomerLogin />} />

            <Route path="/admin" element={<AdminPage />}>
                <Route path="/admin/dashboard" element={<DashBoard />} />
                <Route path="/admin/menu" element={<MenuManagement />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/reports" element={<ReportsPage />} />
                <Route path="/admin/staff-management" element={<StaffManagementPage />} />
            </Route>


            {/* <Route path="/dashboard" element={<Navigate to="/dashboard/tasks" />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/tasks" element={<TasksPage />} />
                <Route path="/dashboard/tasks/new-task" element={<AddNewTask />} />
                <Route path="/dashboard/tasks/:id/detailes" element={<TaskDetailesPage />} />
            </Route> */}

        </Routes>
    );
}

export default AppRoutes;