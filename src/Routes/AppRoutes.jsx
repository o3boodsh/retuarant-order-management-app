import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RestuarantContext from "../Context/restuarant-context";
import CustomerPage from "../Pages/CustomerPage/CustomerPage";
import CheffPage from "../Pages/StaffPage/CheffPage";
import WaiterPage from "../Pages/StaffPage/WaiterPage";
import StaffLoginPage from "../Pages/LoginPage/StaffLoginPage";
import CustomerLogin from "../Pages/LoginPage/CustomerLogin";
import Checkout from "../Pages/CustomerPage/Checkout";
import OrderTracking from "../Pages/CustomerPage/OrderTracking";
import AdminPage from "../Pages/AdminPage/AdminPage";
import DashBoard from "../Pages/AdminPage/DashBoard";
import MenuManagement from "../Pages/AdminPage/MenuManagement";
import ReportsPage from "../Pages/AdminPage/ReportsPage";
import Orders from "../Pages/AdminPage/Orders";
import StaffManagementPage from "../Pages/AdminPage/StaffManagementPage";
import RoleSelectionPage from "../Pages/RoleSelectionPage";



const AppRoutes = () => {
    const [orederItems, setOrederItems] = useState([]);

    let addItem = (newItem) => {
        setOrederItems((prevItems) => {
            // ابحث إذا كان العنصر موجوداً بالفعل
            const existingItem = prevItems.find(item =>
                item.id === newItem.id && item.specialInstructions === newItem.specialInstructions
            );

            if (existingItem) {
                // إذا موجود، زيد الكمية فقط
                return prevItems.map(item =>
                    item.id === newItem.id && item.specialInstructions === newItem.specialInstructions
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // إذا غير موجود، أضف عنصر جديد بكمية 1
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    }
    // أضف هذه الوظائف الجديدة
    const updateItemQuantity = (itemId, newQuantity) => {
        setOrederItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeItem = (itemId) => {
        setOrederItems(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    };
    let [order, setOrder] = useState({});
    let putOrder = (newOrder) => {
        setOrder(newOrder);
    }
    return (
        <RestuarantContext.Provider value={{
            orderItems: orederItems,
            addItem: addItem,
            updateItemQuantity: updateItemQuantity,
            removeItem: removeItem,
            order: order,
            putOrder: putOrder
        }}>
            <Routes>

                <Route path="/" element={<Navigate to="/role-selecttion" />} />
                <Route path="/role-selecttion" element={<RoleSelectionPage />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                <Route path="/cheff" element={<CheffPage />} />
                <Route path="/waiter" element={<WaiterPage />} />
                <Route path="/staff-login" element={<StaffLoginPage />} />
                <Route path="/customer-login" element={<CustomerLogin />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-tracking" element={<OrderTracking />} />



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
        </RestuarantContext.Provider>

    );
}

export default AppRoutes;