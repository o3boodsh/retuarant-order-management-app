import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormGroupeSatffLogin from "./FormGroupeSatffLogin";

const FormStaffLogin = () => {
    let navigate = useNavigate();
    let userRef = useRef();
    let passwordRed = useRef();

    let onSubmitHandler = (event) => {
        event.preventDefault()
        if (userRef.current.value === 'a') {
            navigate("/admin", { replace: true });
        }
        else if (userRef.current.value === 'ch') {
            navigate("/cheff", { replace: true });
        }
        else if (userRef.current.value === 'w') {
            navigate("/waiter", { replace: true });
        }
        else {
            alert('Error input!!');
        }
    }
    return (
        <form id="admin-login-form" onSubmit={onSubmitHandler}>
            <FormGroupeSatffLogin label="Username" icon="fa-user" placeholder="Enter your username..." ref={userRef} />
            <FormGroupeSatffLogin label="Password" icon="fa-lock" placeholder="Enter your password..." ref={passwordRed} />

            <button type="submit" className="btn-login_1">
                <i className="fas fa-sign-in-alt me-2"></i>Login
            </button>
        </form>
    );
}

export default FormStaffLogin;