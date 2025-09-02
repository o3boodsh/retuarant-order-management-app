import React from "react";

const RestuarantContext = React.createContext({
    menuItem: [],
    addNewItemMenu: (newItem) => { },
    staffs: [],
    addNewStaff: (newStaff) => { },
});

export default RestuarantContext;