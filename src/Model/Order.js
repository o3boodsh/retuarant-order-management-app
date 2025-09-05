import { useState, useCallback } from 'react';

const Order = (initialTableNumber = 0, initialCustomerName = '') => {
    const [order, setOrder] = useState({
        id: generateOrderId(),
        tableNumber: initialTableNumber,
        customerName: initialCustomerName,
        status: 'pending',
        items: [],
        subtotal: 0,
        tax: 0,
        finalTotal: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        notes: ''
    });

    const generateOrderId = () => {
        const timestamp = Date.now().toString(36);
        const randomStr = Math.random().toString(36).substr(2, 5);
        return `order_${timestamp}_${randomStr}`;
    };

    const addItem = useCallback((item, quantity = 1, specialInstructions = '') => {
        setOrder(prevOrder => {
            const existingItemIndex = prevOrder.items.findIndex(i =>
                i.id === item.id && i.specialInstructions === specialInstructions
            );

            let newItems;
            if (existingItemIndex >= 0) {
                newItems = [...prevOrder.items];
                newItems[existingItemIndex].quantity += quantity;
            } else {
                newItems = [...prevOrder.items, {
                    ...item,
                    quantity,
                    specialInstructions: specialInstructions || ''
                }];
            }

            const subtotal = calculateSubtotal(newItems);
            const tax = calculateTax(subtotal);
            const finalTotal = subtotal + tax;

            return {
                ...prevOrder,
                items: newItems,
                subtotal,
                tax,
                finalTotal,
                updatedAt: new Date().toISOString()
            };
        });
    }, []);

    const removeItem = useCallback((itemId, specialInstructions = '') => {
        setOrder(prevOrder => {
            const newItems = prevOrder.items.filter(item =>
                !(item.id === itemId && item.specialInstructions === specialInstructions)
            );

            const subtotal = calculateSubtotal(newItems);
            const tax = calculateTax(subtotal);
            const finalTotal = subtotal + tax;

            return {
                ...prevOrder,
                items: newItems,
                subtotal,
                tax,
                finalTotal,
                updatedAt: new Date().toISOString()
            };
        });
    }, []);

    const calculateSubtotal = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTax = (subtotal) => {
        return subtotal * 0.1;
    };

    const setStatus = useCallback((newStatus) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            status: newStatus,
            updatedAt: new Date().toISOString()
        }));
    }, []);

    const setTableNumber = useCallback((tableNumber) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            tableNumber,
            updatedAt: new Date().toISOString()
        }));
    }, []);

    const setCustomerName = useCallback((customerName) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            customerName,
            updatedAt: new Date().toISOString()
        }));
    }, []);

    const setNotes = useCallback((notes) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            notes,
            updatedAt: new Date().toISOString()
        }));
    }, []);

    const getItemsCount = useCallback(() => {
        return order.items.reduce((total, item) => total + item.quantity, 0);
    }, [order.items]);

    const isEmpty = useCallback(() => {
        return order.items.length === 0;
    }, [order.items]);

    return {
        order,
        addItem,
        removeItem,
        setStatus,
        setTableNumber,
        setCustomerName,
        setNotes,
        getItemsCount,
        isEmpty
    };
};

export default Order;



// // Order.js
// const Order = () => {
//     [items, setItems] = useState();
//     constructor(tableNumber = 0, customerName = '') {
//         this.id = this.generateOrderId();
//         this.tableNumber = tableNumber;
//         this.customerName = customerName;
//         this.status = 'pending'; // pending, preparing, ready, completed, cancelled
//         this.items = [];
//         this.subtotal = 0;
//         this.tax = 0;
//         this.finalTotal = 0;
//         this.createdAt = new Date().toISOString();
//         this.updatedAt = new Date().toISOString();
//         this.notes = '';
//     }

//     // إنشاء معرف فريد للطلب
//     generateOrderId() {
//         const timestamp = Date.now().toString(36);
//         const randomStr = Math.random().toString(36).substr(2, 5);
//         return `order_${timestamp}_${randomStr}`;
//     }

//     addItem(itemMenu, quantity = 1, specialInstructions = '') { }

//     // إضافة عنصر ItemMenu إلى الطلب (الطريقة المطلوبة)
//     addItem(itemMenu, quantity = 1, specialInstructions = '') {
//         // التحقق من أن itemMenu هو كائن من نوع ItemMenu
//         if (!itemMenu || !itemMenu.id || !itemMenu.name || itemMenu.price === undefined) {
//             throw new Error('Invalid ItemMenu object');
//         }

//         // البحث إذا كان العنصر موجودًا بالفعل
//         const existingItemIndex = this.items.findIndex(i =>
//             i.id === itemMenu.id && i.specialInstructions === specialInstructions
//         );

//         if (existingItemIndex >= 0) {
//             // إذا كان العنصر موجودًا، نزيد الكمية فقط
//             this.items[existingItemIndex].quantity += quantity;
//         } else {
//             // إذا كان العنصر غير موجود، نضيفه جديدًا
//             this.items.push({
//                 id: itemMenu.id,
//                 name: itemMenu.name,
//                 price: itemMenu.price,
//                 description: itemMenu.description,
//                 category: itemMenu.category,
//                 image: itemMenu.image,
//                 quantity: quantity,
//                 specialInstructions: specialInstructions || ''
//             });
//         }

//         this.updateTotals();
//         this.updatedAt = new Date().toISOString();

//         return this;
//     }

//     // إزالة عنصر من الطلب
//     removeItem(itemId, specialInstructions = '') {
//         const initialLength = this.items.length;

//         this.items = this.items.filter(item =>
//             !(item.id === itemId && item.specialInstructions === specialInstructions)
//         );

//         if (this.items.length !== initialLength) {
//             this.updateTotals();
//             this.updatedAt = new Date().toISOString();
//         }

//         return this;
//     }

//     // تحديث كمية عنصر في الطلب
//     updateItemQuantity(itemId, newQuantity, specialInstructions = '') {
//         if (newQuantity <= 0) {
//             return this.removeItem(itemId, specialInstructions);
//         }

//         const itemIndex = this.items.findIndex(item =>
//             item.id === itemId && item.specialInstructions === specialInstructions
//         );

//         if (itemIndex >= 0) {
//             this.items[itemIndex].quantity = newQuantity;
//             this.updateTotals();
//             this.updatedAt = new Date().toISOString();
//         }

//         return this;
//     }

//     // زيادة كمية عنصر بمقدار 1
//     increaseItemQuantity(itemId, specialInstructions = '') {
//         const itemIndex = this.items.findIndex(item =>
//             item.id === itemId && item.specialInstructions === specialInstructions
//         );

//         if (itemIndex >= 0) {
//             this.items[itemIndex].quantity += 1;
//             this.updateTotals();
//             this.updatedAt = new Date().toISOString();
//         }

//         return this;
//     }

//     // تقليل كمية عنصر بمقدار 1
//     decreaseItemQuantity(itemId, specialInstructions = '') {
//         const itemIndex = this.items.findIndex(item =>
//             item.id === itemId && item.specialInstructions === specialInstructions
//         );

//         if (itemIndex >= 0) {
//             if (this.items[itemIndex].quantity > 1) {
//                 this.items[itemIndex].quantity -= 1;
//             } else {
//                 // إذا كانت الكمية 1، إزالة العنصر
//                 this.items.splice(itemIndex, 1);
//             }
//             this.updateTotals();
//             this.updatedAt = new Date().toISOString();
//         }

//         return this;
//     }

//     // تحديث المجاميع
//     updateTotals() {
//         this.subtotal = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//         this.tax = this.calculateTax(this.subtotal);
//         this.finalTotal = this.subtotal + this.tax;
//         return this;
//     }

//     // حساب الضريبة
//     calculateTax(subtotal) {
//         return subtotal * 0.1; // 10% ضريبة
//     }

//     // تغيير حالة الطلب
//     setStatus(newStatus) {
//         const validStatuses = ['pending', 'preparing', 'ready', 'completed', 'cancelled'];
//         if (validStatuses.includes(newStatus)) {
//             this.status = newStatus;
//             this.updatedAt = new Date().toISOString();
//         } else {
//             console.warn(`Invalid status: ${newStatus}. Valid statuses are: ${validStatuses.join(', ')}`);
//         }
//         return this;
//     }

//     // إضافة ملاحظات للطلب
//     setNotes(notes) {
//         this.notes = notes;
//         this.updatedAt = new Date().toISOString();
//         return this;
//     }

//     // تعيين رقم الطاولة
//     setTableNumber(tableNumber) {
//         this.tableNumber = tableNumber;
//         this.updatedAt = new Date().toISOString();
//         return this;
//     }

//     // تعيين اسم العميل
//     setCustomerName(customerName) {
//         this.customerName = customerName;
//         this.updatedAt = new Date().toISOString();
//         return this;
//     }

//     // الحصول على عدد العناصر في الطلب
//     getItemsCount() {
//         return this.items.reduce((total, item) => total + item.quantity, 0);
//     }

//     // التحقق إذا كان الطلب فارغًا
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // مسح جميع العناصر من الطلب
//     clearItems() {
//         this.items = [];
//         this.updateTotals();
//         this.updatedAt = new Date().toISOString();
//         return this;
//     }

//     // البحث عن عنصر في الطلب
//     findItem(itemId, specialInstructions = '') {
//         return this.items.find(item =>
//             item.id === itemId && item.specialInstructions === specialInstructions
//         );
//     }

//     // الحصول على سعر العنصر
//     getItemPrice(itemId, specialInstructions = '') {
//         const item = this.findItem(itemId, specialInstructions);
//         return item ? item.price : 0;
//     }

//     // الحصول على كمية العنصر
//     getItemQuantity(itemId, specialInstructions = '') {
//         const item = this.findItem(itemId, specialInstructions);
//         return item ? item.quantity : 0;
//     }

//     // تصدير الطلب ككائن عادي (للتخزين أو الإرسال)
//     toObject() {
//         return {
//             id: this.id,
//             tableNumber: this.tableNumber,
//             customerName: this.customerName,
//             status: this.status,
//             items: [...this.items],
//             subtotal: this.subtotal,
//             tax: this.tax,
//             finalTotal: this.finalTotal,
//             createdAt: this.createdAt,
//             updatedAt: this.updatedAt,
//             notes: this.notes
//         };
//     }

//     // استيراد طلب من كائن (للاسترجاع من التخزين)
//     static fromObject(obj) {
//         const order = new Order(obj.tableNumber, obj.customerName);
//         order.id = obj.id || order.id;
//         order.status = obj.status || 'pending';
//         order.items = obj.items || [];
//         order.subtotal = obj.subtotal || 0;
//         order.tax = obj.tax || 0;
//         order.finalTotal = obj.finalTotal || 0;
//         order.createdAt = obj.createdAt || new Date().toISOString();
//         order.updatedAt = obj.updatedAt || new Date().toISOString();
//         order.notes = obj.notes || '';

//         order.updateTotals();
//         return order;
//     }

//     // طباعة تفاصيل الطلب
//     printOrder() {
//         console.log(`Order ID: ${this.id}`);
//         console.log(`Table: ${this.tableNumber}`);
//         console.log(`Customer: ${this.customerName}`);
//         console.log(`Status: ${this.status}`);
//         console.log('Items:');
//         this.items.forEach(item => {
//             console.log(`  - ${item.name} x${item.quantity} - $${item.price} each`);
//             if (item.specialInstructions) {
//                 console.log(`    Special: ${item.specialInstructions}`);
//             }
//         });
//         console.log(`Subtotal: $${this.subtotal.toFixed(2)}`);
//         console.log(`Tax: $${this.tax.toFixed(2)}`);
//         console.log(`Total: $${this.finalTotal.toFixed(2)}`);
//     }
// }

// export default Order;