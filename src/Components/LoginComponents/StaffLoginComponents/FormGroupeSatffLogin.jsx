import React from "react";

const FormGroupeSatffLogin = React.forwardRef((props, ref) => {
    return (
        <div className="form-group_1">
            <label className="form-label">{props.label}</label>
            <div className="input-group">
                <span className="input-group-text"><i className={`fas ${props.icon}`}></i></span>
                <input type="text" id="adminUsername" className="form-control_1" placeholder={props.placeholder} required ref={ref} />
            </div>
        </div>
    );
});
export default FormGroupeSatffLogin;