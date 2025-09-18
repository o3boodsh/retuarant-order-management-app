const FormGroupCustomer = (props) => {
    return (
        <div className="form-group-customer">
            <label className="form-label-customer">{props.label}</label>
            <div className="input-group-customer">
                <span className="input-group-text-customer"><i className={`fas ${props.icon}`}></i></span>
                <input type={props.type} className="form-control-customer" placeholder={props.placeholder} required />
            </div>
        </div>
    );
}

export default FormGroupCustomer;