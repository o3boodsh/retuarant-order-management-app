import FloatingItems from "./FloatingItems";

const LeftBar = () => {
    return (
        <div className="left-panel-customer">
            <div className="panel-content-customer">
                <div className="app-icon-customer">
                    <i className="fas fa-utensils"></i>
                </div>
                <h2>Welcome to FoodExpress</h2>
                <p>Order from your favorite restaurants and get your food delivered right to your doorstep.</p>
                <div className="divider-customer"></div>
                <p>Sign in or create an account to get started.</p>
            </div>
            <FloatingItems />
        </div>
    );
}

export default LeftBar;