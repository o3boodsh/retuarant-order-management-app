import React from "react";

const RestuarantContext = React.createContext({
    menuItem: [],
    menuCoustomer: [],
    addNewItemMenu: (newItem) => { },
    setMenuItemsFromFB: (fbItems) => { },
    staffs: [],
    addNewStaff: (newStaff) => { },
     setStaffFromFB: (fbStaffs) => {},
});

export default RestuarantContext;