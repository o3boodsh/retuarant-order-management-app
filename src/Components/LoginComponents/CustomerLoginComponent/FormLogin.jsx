import FormGroupCustomer from "./FormGroupCustomer";

const FormLogin = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <FormGroupCustomer label="Email" icon="fa-envelope" type="email" placeholder="Enter your email" />
            <FormGroupCustomer label="Password" icon="fa-lock" type="password" placeholder="Enter your password" />

            <div className="forgot-password-customer">
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login-customer">
                <i className="fas fa-sign-in-alt me-2"></i>LOGIN
            </button>
        </form>
    );
}

export default FormLogin;