const CardOrder = (props) => {
    return (
        <div className="card order-card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-2">
                            <h5 className="card-title mb-0 me-3">{props.card - title}</h5>
                            <span className="order-badge bg-info">{props.badge}</span>
                            <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i>{props.time}</span>
                        </div>
                        {props.items.map((element) =>
                            <p className="order-items mb-1">
                                <strong>{props.count} x</strong>
                                {props.element}
                            </p>
                        )}
                        {/* <p className="order-items mb-1"><strong>{props.count} x</strong>{props.element}</p>
                        <p className="order-items mb-2"><strong>1 x</strong> Caesar Salad</p> */}
                        <div>

                            <span className="badge bg-light text-dark me-2">{props.priority}</span>
                            <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> {props.count - guests} guests
                            </span>
                        </div>
                    </div>
                    <div className="ms-3">
                        <button className="btn btn-primary btn-kitchen">
                            <i className="fas fa-play-circle me-1"></i> Start Preparing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardOrder;