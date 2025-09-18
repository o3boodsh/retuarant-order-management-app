import FormGroupCustomer from "./FormGroupCustomer";

const FormRegister = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <FormGroupCustomer label="Name" icon="fa-user" type="text" placeholder="Enter your name" />
            <FormGroupCustomer label="Email" icon="fa-envelope" type="email" placeholder="Enter your email" />
            <FormGroupCustomer label="Password" icon="fa-lock" type="password" placeholder="Create a password" />
            <small className="form-text text-muted">Password must not be the same as your email address</small>
            <FormGroupCustomer label="Confirm Password" icon="fa-lock" type="password" placeholder="Confirm your password" />

            <button type="submit" className="btn-login-customer">
                <i className="fas fa-user-plus me-2"></i>SIGN UP
            </button>
        </form>
    );
}

export default FormRegister;