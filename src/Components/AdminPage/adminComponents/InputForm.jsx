import React from "react";

const InputForm = React.forwardRef((props, ref) => {
    return (
        props.type === "file" ? (
            <div className="col-12">
                <label htmlFor={props.id} className="form-label">{props.name}</label>
                <input
                    type={props.type}
                    className="form-control"
                    id={props.id}
                    accept="image/*"
                    ref={ref}
                />
            </div>
        ) : (
            <div className="col-md-6">
                <div className="form-floating">
                    <input
                        type={props.type}
                        className="form-control"
                        id={props.id}
                        placeholder={props.placeholder}
                        ref={ref}
                    />
                    <label htmlFor={props.id}>{props.name}</label>
                </div>
            </div>
        )
    );
});
export default InputForm;