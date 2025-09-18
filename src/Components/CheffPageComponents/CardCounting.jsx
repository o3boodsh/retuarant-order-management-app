const CardCounting = (props) => {
    return (
        <div className="col-md-3 mb-3">
            <div className={`card dashboard-card bg-${props.color} text-white p-3 glow-card`}>
                <div className="card-body">
                    <h3 className="stat-number" id="total-orders-count">{props.length}</h3>
                    <p className="stat-label">{props.title}</p>
                    <div className="mt-2">
                        <span className="badge bg-light text-dark">{props.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCounting;