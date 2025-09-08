import React, { Fragment } from "react";

const PaymentForm = React.forwardRef((props, ref) => {

    return (
        <Fragment>
            <div className="payment-section">
                <h3 className="section-title">Payment Details</h3>
                <form className="payment-form" onSubmit={props.onSubmitHandler}>
                    <div className="form-group">
                        <label className="form-label">Table Number</label>
                        <input
                            type="number"
                            className="form-input"
                            placeholder="Enter your table number"
                            value={props.tableNumber}
                            ref={ref}
                            min={0}
                            max={100}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input type="text" className="form-input" placeholder="1234 5678 9012 3456" ref={ref} />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Expiry Date</label>
                            <input type="text" className="form-input" placeholder="MM/YY" ref={ref} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">CVV</label>
                            <input type="text" className="form-input" placeholder="123" ref={ref} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Cardholder Name</label>
                        <input type="text" className="form-input" placeholder="John Doe" ref={ref} />
                    </div>
                    <button
                        type="button"
                        className="pay-btn"
                        disabled={props.disabled}
                    >
                        {props.disabled ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i> Processing...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-lock"></i> Pay Now
                            </>
                        )}
                    </button>
                </form>
            </div>
        </Fragment>
    );
});

export default PaymentForm;