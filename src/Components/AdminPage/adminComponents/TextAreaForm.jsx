import React from "react";

const TextAreaForm = React.forwardRef((props, ref) => {
    return (
        <div className="col-md-12">
            <div className="form-floating">
                <textarea className="form-control" id="itemDescription" placeholder={props.placeholder}
                     ref={ref}/>
                <label htmlFor="itemDescription">{props.name}</label>
            </div>
        </div>
    );
});

export default TextAreaForm;