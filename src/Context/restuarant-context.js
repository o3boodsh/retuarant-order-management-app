import React from "react";

const RestuarantContext = React.createContext({
    menuItem: [],
    menuCoustomer: [],
    addNewItemMenu: (newItem) => { },
    setMenuItemsFromFB: (fbItems) => { },
    staffs: [],
    addNewStaff: (newStaff) => { },
});

export default RestuarantContext;