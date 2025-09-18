const HeaderCheff = () => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 className="page-title">Kitchen Orders</h2>
                <p className="page-subtitle">Manage and track all incoming orders from customers</p>
            </div>
            <div className="d-flex">
                <button className="btn btn-outline-secondary me-2">
                    <i className="fas fa-filter me-1"></i> Filter
                </button>
                <button className="btn btn-outline-primary">
                    <i className="fas fa-sync-alt me-1"></i> Refresh
                </button>
            </div>
        </div>
    );
}

export default HeaderCheff;