import React from "react";

const RestuarantContext = React.createContext({
    menuItem: [],
    menuCoustomer: [],
    addNewItemMenu: (newItem) => { },
    setMenuItemsFromFB: (fbItems) => { },
    staffs: [],
    addNewStaff: (newStaff) => { },
    setStaffFromFB: (fbStaffs) => { },
    orderItems: [],
    addItem: (newItem) => { },
    order: {},
    putOrder: (newOrder) => { }
});

export default RestuarantContext;