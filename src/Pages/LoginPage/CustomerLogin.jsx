import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormRegister from "../../Components/LoginComponents/CustomerLoginComponent/FormRegister";
import FormLogin from "../../Components/LoginComponents/CustomerLoginComponent/FormLogin";
import Footer from "../../Components/LoginComponents/CustomerLoginComponent/Footer";
import LeftBar from "../../Components/LoginComponents/CustomerLoginComponent/LeftBar";

const CustomerLogin = () => {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState('login'); // 'login' or 'register'

    const onSubmitHandler = (event) => {
        event.preventDefault();
        navigate('/customer', { replace: true });
    }

    const onSubmitRegistrationHandler = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Successfuly",
            icon: "success",
            text: "Form submitted successfully!",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const onClickLoginTab = () => {
        setActiveForm('login');
    }

    const onClickRegisterTab = () => {
        setActiveForm('register');
    }

    return (
        <div className="container-customer">
            <LeftBar />
            <div className="right-panel-customer">
                <div className="form-wrapper-customer">
                    <div className="form-toggle-customer">
                        <div
                            className={`toggle-btn-customer ${activeForm === 'login' ? 'active-customer' : ''}`}
                            onClick={onClickLoginTab}
                        >
                            Login
                        </div>
                        <div
                            className={`toggle-btn-customer ${activeForm === 'register' ? 'active-customer' : ''}`}
                            onClick={onClickRegisterTab}
                        >
                            Register
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className={`form-container-customer ${activeForm === 'login' ? 'active-customer' : ''}`}>
                        <FormLogin onSubmit={onSubmitHandler} />
                        <Footer title="Or continue with" />
                    </div>

                    {/* Registration Form */}
                    <div className={`form-container-customer ${activeForm === 'register' ? 'active-customer' : ''}`}>
                        <FormRegister onSubmit={onSubmitRegistrationHandler} />
                        <Footer title="Or sign up with" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerLogin;