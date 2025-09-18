import { useState } from "react";
import HeaderCheff from "./HeaderCheff";
import CardOrderInfo from "./CardOrderInfo";

const ContentCheffPage = () => {
    // حالة لتتبع علامة التبويب النشطة
    const [activeTab, setActiveTab] = useState('new-orders');

    return (
        <div className="container container-main mt-4">
            <HeaderCheff />
            <CardOrderInfo />

            <ul className="nav nav-tabs" id="chefTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'new-orders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('new-orders')}
                    >
                        <i className="fas fa-inbox me-1"></i> New Orders
                        <span className="badge bg-primary ms-1">5</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'preparing-orders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('preparing-orders')}
                    >
                        <i className="fas fa-blender me-1"></i> Preparing
                        <span className="badge bg-warning ms-1">3</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'ready-orders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ready-orders')}
                    >
                        <i className="fas fa-check-circle me-1"></i> Ready
                        <span className="badge bg-success ms-1">2</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content mt-0" id="chefTabContent">
                {/* New Orders Tab */}
                <div className={`tab-pane ${activeTab === 'new-orders' ? 'show active' : 'fade'}`} role="tabpanel">
                    <div className="card order-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center mb-2">
                                        <h5 className="card-title mb-0 me-3">Order #1005 - Table 3</h5>
                                        <span className="order-badge bg-info">New</span>
                                        <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 5
                                            min ago</span>
                                    </div>
                                    <p className="order-items mb-1"><strong>2 x</strong> Margherita Pizza</p>
                                    <p className="order-items mb-2"><strong>1 x</strong> Caesar Salad</p>
                                    <div>
                                        <span className="badge bg-light text-dark me-2">Normal Priority</span>
                                        <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 2
                                            guests</span>
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

                    <div className="card order-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center mb-2">
                                        <h5 className="card-title mb-0 me-3">Order #1006 - Table 7</h5>
                                        <span className="order-badge bg-info">New</span>
                                        <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 3
                                            min ago</span>
                                    </div>
                                    <p className="order-items mb-1"><strong>1 x</strong> Classic Burger</p>
                                    <p className="order-items mb-2"><strong>2 x</strong> Vanilla Ice Cream</p>
                                    <div>
                                        <span className="badge bg-warning text-dark me-2">High Priority</span>
                                        <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 3
                                            guests</span>
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
                </div>

                {/* Preparing Orders Tab */}
                <div className={`tab-pane ${activeTab === 'preparing-orders' ? 'show active' : 'fade'}`} role="tabpanel">
                    <div className="card order-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center mb-2">
                                        <h5 className="card-title mb-0 me-3">Order #1004 - Table 2</h5>
                                        <span className="order-badge bg-warning text-dark">Preparing</span>
                                        <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i> 12
                                            min elapsed</span>
                                    </div>
                                    <p className="order-items mb-1"><strong>1 x</strong> Garlic Bread</p>
                                    <p className="order-items mb-2"><strong>1 x</strong> Chocolate Cake</p>
                                    <div className="progress mb-2" style={{ height: '6px' }}>
                                        <div className="progress-bar bg-warning" role="progressbar"
                                            style={{ width: '65%' }}
                                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <button className="btn btn-success btn-kitchen">
                                        <i className="fas fa-check-circle me-1"></i> Mark as Ready
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ready Orders Tab */}
                <div className={`tab-pane ${activeTab === 'ready-orders' ? 'show active' : 'fade'}`} role="tabpanel">
                    <div className="card order-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center mb-2">
                                        <h5 className="card-title mb-0 me-3">Order #1003 - Table 5</h5>
                                        <span className="order-badge bg-success">Ready</span>
                                        <span className="order-time text-muted ms-auto"><i className="far fa-clock me-1"></i>
                                            Ready 5 min ago</span>
                                    </div>
                                    <p className="order-items mb-1"><strong>2 x</strong> Classic Burger</p>
                                    <p className="order-items mb-2"><strong>1 x</strong> Caesar Salad</p>
                                    <div>
                                        <span className="badge bg-light text-dark"><i className="fas fa-user me-1"></i> 2
                                            guests</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ContentCheffPage;