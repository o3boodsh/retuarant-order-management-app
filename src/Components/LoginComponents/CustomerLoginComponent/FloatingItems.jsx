const FloatingItems = () => {
    return (<div className="floating-items-customer">
        <div className="floating-item-customer" style={{ top: '10%', left: '20%', animationDelay: '0s' }}>
            <i className="fas fa-hamburger"></i>
        </div>
        <div className="floating-item-customer" style={{ top: '20%', left: '80%', animationDelay: '2s' }}>
            <i className="fas fa-pizza-slice"></i>
        </div>
        <div className="floating-item-customer" style={{ top: '60%', left: '10%', animationDelay: '4s' }}>
            <i className="fas fa-ice-cream"></i>
        </div>
        <div className="floating-item-customer" style={{ top: '70%', left: '70%', animationDelay: '6s' }}>
            <i className="fas fa-coffee"></i>
        </div>
        <div className="floating-item-customer" style={{ top: '40%', left: '40%', animationDelay: '8s' }}>
            <i className="fas fa-cookie"></i>
        </div>
    </div>);
}

export default FloatingItems;