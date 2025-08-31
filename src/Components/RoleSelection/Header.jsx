import { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <div className="container-fluid p-5 bg-primary text-white text-center login-cover">
                <h1 className="mt-5">Restaurant Self-Service</h1>
                <p className="lead">Welcome to our restaurant management system</p>
            </div>
        </Fragment>
    );
}

export default Header;