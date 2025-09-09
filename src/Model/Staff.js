class Staff {
    staffId;
    name;
    password;
    category;
    constructor(staffId, name, password, category) {
        this.staffId = staffId; // التأكد من استخدام staffId وليس id
        this.name = name;
        this.password = password;
        this.category = category;
        this.firebaseKey = null;
    }
}

export default Staff;