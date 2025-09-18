import { Link } from "react-router-dom";
import FormStaffLogin from "../../Components/LoginComponents/StaffLoginComponents/FormStaffLogin";
import HeaderFormStaffLogin from "../../Components/LoginComponents/StaffLoginComponents/HeaderFormStaffLogin";

const StaffLoginPage = () => {
    return (
        <div className="login-container_1">
            <div className="login-card_1">
                <HeaderFormStaffLogin />
                <div className="login-body_1">
                    <FormStaffLogin />
                    <div className="back-link_1">
                        <Link to="/role-selecttion"><i className="fas fa-arrow-left me-2"></i>Back to Role Selection</Link>
                    </div>
                </div>

                <div className="floating-items_1">
                    <div className="floating-item_1"><i className="fas fa-cog"></i></div>
                    <div className="floating-item_1"><i className="fas fa-chart-bar"></i></div>
                    <div className="floating-item_1"><i className="fas fa-users"></i></div>
                    <div className="floating-item_1"><i className="fas fa-utensils"></i></div>
                </div>
            </div>
        </div>
    );
}
export default StaffLoginPage; 