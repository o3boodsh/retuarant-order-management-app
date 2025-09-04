import { replace, useNavigate } from "react-router-dom";
import ItemMenu from "../Model/ItemMenu";
import Swal from "sweetalert2";

class CustomerPageController {
    FIREBASE_DB_URL = "https://restuarant-order-management-default-rtdb.firebaseio.com";
    navigate = new useNavigate();

    addToCart(item, setCartItems) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                this.showAlret('success', '✓ Added!', `${item.name} (Quantity: ${existingItem.quantity + 1})`);
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                this.showAlret('success', '✓ Added to Cart!', `${item.name} has been added`);
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    }

    showAlret(icon, title, text) {
        Swal.fire({
            icon: icon,
            title:  title ,
            text: text ,
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });
    }

    increaseQuantity(itemId, setCartItems) {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    decreaseQuantity(itemId, setCartItems) {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        );
    }

    removeItem(itemId, setCartItems) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }

    fetchItemsMenu(setItems, setError, setLoading) {
        setLoading(true);
        setError(null);

        fetch(`${this.FIREBASE_DB_URL}/menuItems.json`,
            {
                method: "GET",
            }
        ).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
            let fbItems = [];
            for (let key in result) {
                let item = new ItemMenu(
                    result[key].id,
                    result[key].name,
                    result[key].price,
                    result[key].description,
                    result[key].category,
                    result[key].status,
                    result[key].image,
                );
                item.id = key;
                fbItems.unshift(item);
            }
            console.log(fbItems);
            setItems(fbItems);
            setError(null);
        }).catch((error) => {
            console.log(error);
            setError("Failed to load menu. Please check your internet connection and try again.");
        }).finally(() => {
            setLoading(false);
        });
    }

    handleButtonsVisibility(buttonsVisible, menuToggleRef, floatingButtonsRef) {
        const menuToggle = menuToggleRef.current;
        const floatingButtons = floatingButtonsRef.current?.querySelectorAll('.floating-btn');
        const contactButton = document.querySelector('.floating-btn.contact');

        if (menuToggle) {
            if (buttonsVisible) {
                menuToggle.classList.add('active');
            } else {
                menuToggle.classList.remove('active');
            }
        }

        if (floatingButtons) {
            floatingButtons.forEach(btn => {
                if (buttonsVisible) {
                    btn.classList.add('show');
                    if (contactButton) {
                        contactButton.classList.add('pulse');
                    }
                } else {
                    btn.classList.remove('show');
                    if (contactButton) {
                        contactButton.classList.remove('pulse');
                    }
                }
            });
        }
    }

    handleCartPanelVisibility(cartOpen, cartPanelRef, overlayRef, setButtonsVisible) {
        const cartPanel = cartPanelRef.current;
        const overlay = overlayRef.current;

        if (cartPanel && overlay) {
            if (cartOpen) {
                cartPanel.classList.add('open');
                overlay.classList.add('open');
            } else {
                cartPanel.classList.remove('open');
                overlay.classList.remove('open');
                setButtonsVisible(false)
            }
        }
    }

    updateCartTotals(cartItems) {
        const subtotal = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    retryFetch(setError, setLoading, setItems) {
        setError(null);
        setLoading(true);

        setTimeout(() => {
            this.fetchItemsMenu(setItems, setError, setLoading);
        }, 1000);
    }

    logout() {
        this.navigate('/customer-login', { replace: true });
    }
}

export default CustomerPageController;